<template>
  <div>
    <Home />
    <router-view />
    <Navbar />
  </div>
</template>



<script setup>
import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue';

</script>


<style scoped>

</style>
