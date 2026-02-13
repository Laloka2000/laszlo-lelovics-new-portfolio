<script setup>
import { ref } from "vue"
import emailjs from "emailjs-com"
import { Mail, Github, Linkedin, Globe } from "lucide-vue-next"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

// your info
const contactInfo = {
  email: "lelovicslaszlo10@gmail.com",
  github: "https://github.com/Laloka2000",
  linkedin: "https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/",
}

// state
const name = ref("")
const email = ref("")
const message = ref("")
const errors = ref({})
const successMessage = ref("")

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY



// validate inputs
const validateForm = () => {
  errors.value = {}
  if (!name.value.trim()) {
    errors.value.name = t('contact.validation.required')
  }
  if (!email.value.trim()) {
    errors.value.email = t('contact.validation.required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = t('contact.validation.invalidEmail')
  }
  if (!message.value.trim()) {
    errors.value.message = t('contact.validation.required')
  }
  return Object.keys(errors.value).length === 0
}


// handle submit
const sendEmail = (e) => {
  e.preventDefault()
  if (!validateForm()) return // show errors immediately

  // emailjs integration
  emailjs
    .send(
      serviceId,
      templateId,
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      publicKey
    )
    .then(
      () => {
        successMessage.value = t('contact.success')
        name.value = ""
        email.value = ""
        message.value = ""
      },
      (error) => {
        successMessage.value = t('contact.error')
      }
    )
}
</script>

<template>
  <section class="min-h-[calc(67vh-6rem)] bg-gray-50 dark:bg-gray-900 py-16">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <!-- LEFT: contact info -->
      <div class="flex flex-col justify-center">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {{ $t('contact.title') }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          {{ $t('contact.subtitle') }}
        </p>
        <ul class="space-y-4 text-gray-700 dark:text-gray-200">
          <li class="flex items-center gap-3">
            <Mail class="w-6 h-6 text-blue-600" />
            <a :href="`mailto:${contactInfo.email}`" class="hover:underline">
              {{ contactInfo.email }}
            </a>
          </li>
          <li class="flex items-center gap-3">
            <Github class="w-6 h-6" />
            <a :href="contactInfo.github" target="_blank" class="hover:underline">GitHub</a>
          </li>
          <li class="flex items-center gap-3">
            <Linkedin class="w-6 h-6 text-blue-700" />
            <a :href="contactInfo.linkedin" target="_blank" class="hover:underline">LinkedIn</a>
          </li>
        </ul>
      </div>

      <!-- RIGHT: form -->
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <form class="space-y-6" @submit="sendEmail">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('contact.form.name') }}
            </label>
            <input
              v-model="name"
              type="text"
              id="name"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              :placeholder="$t('contact.form.namePlaceholder')"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('contact.form.email') }}
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              :placeholder="$t('contact.form.emailPlaceholder')"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ $t('contact.form.message') }}
            </label>
            <textarea
              v-model="message"
              id="message"
              rows="5"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              :placeholder="$t('contact.form.messagePlaceholder')"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {{ $t('contact.form.submit') }}
          </button>

          <!-- Feedback -->
          <p v-if="successMessage" class="mt-4 text-green-600 dark:text-green-400">
            {{ successMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>