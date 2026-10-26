<template>
  <BootScreen v-if="showBoot" @done="onBootDone" />

  <div v-show="!showBoot" class="relative flex min-h-screen flex-col bg-terminal-bg text-terminal-fg">
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

  <CookieBanner v-if="!showBoot" />

  <Teleport to="body">
    <div ref="glowRef" aria-hidden="true" />
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import BackgroundLines from './components/BackgroundLines.vue'
import BootScreen from './components/BootScreen.vue'
import CookieBanner from './components/CookieBanner.vue'
import { useCursorGlow } from './composables/useCursorGlow.js'

const { glowRef } = useCursorGlow()

const bootKey = 'hasSeenBoot'

const showBoot = ref(!sessionStorage.getItem(bootKey))

function onBootDone() {
  sessionStorage.setItem(bootKey, '1')
  showBoot.value = false
}
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
