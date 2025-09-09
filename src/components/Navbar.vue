<template>
  <nav class="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
    <h1 class="text-lg font-bold">My Portfolio</h1>
    <ul class="flex gap-6">
      <li><RouterLink class="hover:text-gray-200" to="/">Home</RouterLink></li>
      <li><RouterLink class="hover:text-gray-200" to="/projects">Projects</RouterLink></li>
      <li><RouterLink class="hover:text-gray-200" to="/experience">Experience</RouterLink></li>
      <li><RouterLink class="hover:text-gray-200" to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
