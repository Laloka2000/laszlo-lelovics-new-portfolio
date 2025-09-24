<template>
  <section class="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
      <!-- LEFT: Contact Info -->
      <div
        class="flex flex-col justify-center"
        v-motion
        :initial="{ opacity: 0, x: -40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
      >
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get in Touch
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out through the form or connect with me on social media.
        </p>

        <!-- Social links -->
        <ul class="space-y-4 text-gray-700 dark:text-gray-200">
          <li class="flex items-center gap-3">
            <Mail class="w-6 h-6 text-blue-600" />
            <a :href="`mailto:${contactInfo.email}`" class="hover:underline">
              {{ contactInfo.email }}
            </a>
          </li>
          <li class="flex items-center gap-3">
            <Github class="w-6 h-6 text-gray-800 dark:text-white" />
            <a :href="contactInfo.github" target="_blank" class="hover:underline">
              GitHub
            </a>
          </li>
          <li class="flex items-center gap-3">
            <Linkedin class="w-6 h-6 text-blue-700" />
            <a :href="contactInfo.linkedin" target="_blank" class="hover:underline">
              LinkedIn
            </a>
          </li>
          <li class="flex items-center gap-3">
            <Globe class="w-6 h-6 text-purple-600" />
            <a :href="contactInfo.dailydev" target="_blank" class="hover:underline">
              Daily.dev
            </a>
          </li>
        </ul>
      </div>

      <!-- RIGHT: Contact Form -->
      <div
        class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8"
        v-motion
        :initial="{ opacity: 0, x: 40 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }"
      >
        <form class="space-y-6">
          <!-- Name -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <!-- Message -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              rows="5"
              class="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue"
import { Mail, Github, Linkedin, Globe } from "lucide-vue-next"
const contactInfo = {
  email: "yourmail@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  dailydev: "https://app.daily.dev/yourusername",
}


const form = reactive({
  name: "",
  email: "",
  message: ""
})

function handleSubmit()
{
  alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)

  // Reset form
  form.name = ""
  form.email = ""
  form.message = ""
}


</script>
