<template>
  <div class="relative flex min-h-screen flex-col bg-terminal-bg text-terminal-fg">

    <BackgroundLines />

    <div
      ref="cursorGlowRef"
      class="cursor-glow"
      :class="{visibleEl}"
      aria-hidden="true"
    />

    <Navbar />

    <main class="relative z-10 flex-1">
      <RouterView v-slot="{ Component, route}">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

  </div>
</template>



<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackgroundLines from './components/BackgroundLines.vue';
import { useCursorGlow } from './composables/useCursorGlow';

const { cursorGlowRef, visibleEl } = useCursorGlow();
</script>


<style scoped>
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: radial-gradient(
    circle,
    rgba(0, 255, 136, 0.1) 0%,
    transparent 70%
  );
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-glow.visibleEl {
  opacity: 1;
}

@media (hover: none){
  .cursor-glow {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .cursor-glow {
    display: none;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.18s ease;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

</style>
