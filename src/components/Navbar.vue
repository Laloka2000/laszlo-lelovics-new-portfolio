<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-lg font-bold">My Portfolio</h1>

    <!-- Navigation links -->
    <ul class="hidden md:flex gap-6">
      <li>
        <RouterLink class="hover:text-gray-200" to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-gray-200" to="/projects">Projects</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-gray-200" to="/experience">Experience</RouterLink>
      </li>
      <li>
        <RouterLink class="hover:text-gray-200" to="/contact">Contact</RouterLink>
      </li>
    </ul>


    <!-- Mobile menu button (hidden on larger screens) -->
    <button class="md:hidden focus:outline-none " @click="isOpen = !isOpen">
      <!-- Icon changes depending on state -->
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <transition name="slide-fade">
      <ul v-if="isOpen" class="md:hidden bg-blue-600 text-white flex flex-col gap-4 px-6 py-4">
        <li>
          <RouterLink @click="isOpen = false" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink @click="isOpen = false" to="/projects">Projects</RouterLink>
        </li>
        <li>
          <RouterLink @click="isOpen = false" to="/experience">Experience</RouterLink>
        </li>
        <li>
          <RouterLink @click="isOpen = false" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
</script>


<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
