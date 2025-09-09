<template>
  <section class="min-h-screen bg-gradient-to-br from-sky-50 to-white flex items-center">
    <div class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
      <!-- Left: text block with fade-up animation -->
      <div class="flex-1" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{opacity: 1, y: 0, transition: {duration: 0.7}}">
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
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <a href="#contact"
            class="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-50 transition">Get in Touch</a>
        </div>
      </div>
      <div class="w-64 h-64 bg-white rounded-2xl shadow-lg flex items-center justify-center" v-motion :initial="{ opacity: 0, scale: 0.8 }" :enter="{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }">
        <svg class="w-40 h-40 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20c0-3.31 2.69-6 6-6s6 2.69 6 6"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style></style>