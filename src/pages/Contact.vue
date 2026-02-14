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

</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-11">
    <div class="max-w-6xl mx-auto px-6 gap-12 justify-content text-center">
      <div class="justify-center">
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
    </div>
  </section>
</template>