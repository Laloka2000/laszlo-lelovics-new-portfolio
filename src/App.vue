<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Navbar />
    <main class="pt-16">
      <router-view />
    </main>
    <Footer/>
  </div>
</template>



<script setup>
import Navbar from './components/Navbar.vue';
//import Contact from './pages/Contact.vue';
//import Home from './pages/Home.vue';
//import Experience from './pages/Experience.vue';
</script>


<style scoped>

</style>
