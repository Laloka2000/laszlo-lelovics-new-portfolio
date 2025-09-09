<template>
  <nav class="bg-primary text-white p-4 shadow-lg">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <h1 class="text-2xl font-bold">My Portfolio</h1>

      <!-- Links (Desktop) -->
      <ul class="hidden md:flex space-x-6">
        <li><RouterLink to="/" class="hover:text-secondary">Home</RouterLink></li>
        <li><RouterLink to="/projects" class="hover:text-secondary">Projects</RouterLink></li>
        <li><RouterLink to="/experience" class="hover:text-secondary">Experience</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-secondary">Contact</RouterLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden mt-4 space-y-2">
      <RouterLink to="/" class="block hover:text-secondary">Home</RouterLink>
      <RouterLink to="/projects" class="block hover:text-secondary">Projects</RouterLink>
      <RouterLink to="/experience" class="block hover:text-secondary">Experience</RouterLink>
      <RouterLink to="/contact" class="block hover:text-secondary">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
