<template>
  <div class="relative flex min-h-screen flex-col bg-terminal-bg text-terminal-fg">
    <BackgroundLines />
    <Navbar />
    <main class="relative z-10 flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>

  <Teleport to="body">
    <div ref="glowRef" aria-hidden="true" />
  </Teleport>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackgroundLines from './components/BackgroundLines.vue'
import { useCursorGlow } from './composables/useCursorGlow.js'

const { glowRef } = useCursorGlow()
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.18s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>