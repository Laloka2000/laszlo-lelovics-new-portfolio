<template>
  <section class="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center">
    <div class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
      <!-- Left: text block with fade-up animation -->
      <div class="flex-1" v-motion :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }">
        <h1 class="text-5xl md:text-6xl font-extrabold leading-tight md-4">
          Hey - I'm Laszlo Lelovics <span class="wave">👋</span>
        </h1>
        <p class="text-lg text-gray-700 mb-6 max-w-xl">
          Frontend dev who builds fast, accessible UIs with Vue. I focus on clean code, subtle motion and tiny load
          times — the kind of stuff clients love.
        </p>
        <div class="flex flex-wrap gap-4">
          <RouterLink to="/projects"
            class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">View Projects
          </RouterLink>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <a href="/contact"
            class="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition">Get
            in Touch</a>
        </div>
        <!-- Tech stack -->
        <!--TODO : add tech stack with svg icons using level of experience animations-->
        <!--
        <div class="mt-8 text-gray-500">
          <h2 class="text-3xl font-semibold">Tech stack</h2>
          <ul class="flex gap-2" v-for="(tech, index) in techStack" :key="index">
            <li
              class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full">
              {{ tech }}
            </li>
          </ul>
        </div>
        -->
      </div>
      <div class="w-92 h-92 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
        <img :src="profilePic" alt="Profile photo" class="object-cover w-full h-full" />
      </div>
    </div>
  </section>
</template>

<script setup>
import profilePic from '../assets/images/photo.jpg'
import { RouterLink } from 'vue-router';
import  {ref} from 'vue';

const techStack = ref(['Vue', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Figma', 'Git']);

</script>

<style></style>