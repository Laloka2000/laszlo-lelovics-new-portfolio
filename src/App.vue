<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <main class="flex-1 max-w-6xl mx-auto px-6 py-12">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
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
