<template>
  <Disclosure as="nav" class="sticky top-0 z-20 border-b border-terminal-border bg-terminal-bg/80 backdrop-blur"
    v-slot="{ open, close }">
    <div class="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-5 sm:px-7">
      <a href="#top" @click="scrollToHash($event, '#top')" class="text-sm font-bold tracking-[0.05em] text-terminal-accent"
        :aria-label="$t('nav.logoAlt')">
        ~/laszlo<span class="cursor-blink">_</span>
      </a>

      <div class="flex items-center gap-1">
        <!-- desktop: full link row (contact is covered by the CTA button) -->
        <a v-for="item in desktopItems" :key="item.id" :href="'#' + item.id"
          @click="scrollToHash($event, '#' + item.id)"
          class="nav-link hidden rounded-full px-3 py-1.5 text-[13px] tracking-[0.04em] whitespace-nowrap text-terminal-muted transition-colors hover:text-terminal-accent lg:inline-block"
          :class="{ active: activeId === item.id }">
          {{ $t(item.key) }}
        </a>

        <!-- max-sm: variant so it wins over the component's own inline-flex -->
        <LanguageSwitcher class="ml-4 border-l border-terminal-border pl-5 text-xs text-terminal-muted max-sm:hidden" />

        <!-- tablet + desktop: CTA stays visible next to the burger -->
        <a href="#contact" @click="scrollToHash($event, '#contact')"
          class="navcta ml-3 hidden items-center gap-2 whitespace-nowrap rounded-full bg-terminal-accent px-4 py-2 text-[13px] font-semibold text-black transition-colors hover:bg-[#7dffc0] sm:inline-flex">
          {{ $t('nav.getInTouch') }}
        </a>

        <DisclosureButton
          class="burger ml-3 flex h-10 w-10 items-center justify-center rounded-lg border border-terminal-border text-terminal-accent transition-colors lg:hidden"
          :class="{ 'burger-open': open }"
          :aria-label="open ? $t('nav.closeMenu') : $t('nav.openMenu')" :aria-expanded="open">
          <span class="blines" aria-hidden="true">
            <i /><i /><i />
          </span>
        </DisclosureButton>
      </div>
    </div>

    <DisclosurePanel class="lg:hidden">
      <div
        class="mx-auto flex max-h-[calc(100dvh-81px)] max-w-[1180px] flex-col gap-1 overflow-y-auto border-t border-terminal-border px-5 py-4 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:px-7">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
          @click="(e) => { scrollToHash(e, '#' + item.id); close(); }"
          class="nav-link rounded-lg px-3 py-3 text-sm tracking-[0.04em] text-terminal-muted transition-colors hover:text-terminal-accent"
          :class="{ active: activeId === item.id }">
          {{ $t(item.key) }}
        </a>

        <div class="mt-2 flex items-center justify-between gap-4 border-t border-terminal-border px-3 pt-4 sm:col-span-2">
          <LanguageSwitcher class="text-sm text-terminal-muted" />
          <a href="#contact" @click="(e) => { scrollToHash(e, '#contact'); close(); }"
            class="inline-flex items-center rounded-full bg-terminal-accent px-4 py-2 text-[13px] font-semibold text-black sm:hidden">
            {{ $t('nav.getInTouch') }}
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { navItems } from '../navItems.js'

const desktopItems = navItems.filter((i) => i.id !== 'contact')

const activeId = ref('')
const route = useRoute()
const router = useRouter()

function scrollToHash(e, hash) {
  if (route.path !== '/') {
    // navigate to the home page, router's scrollBehavior handles the jump
    e.preventDefault()
    router.push({ path: '/', hash })
    return
  }
  e.preventDefault()
  const id = hash.slice(1)
  const el = id === 'top' ? document.body : document.getElementById(id)
  if (el) {
    const top = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top, behavior: 'smooth' })
  }
  if (router.currentRoute.value.hash !== hash) {
    router.replace({ path: '/', hash })
  }
}

// Sections are looked up on every scroll: the Home page mounts after the Navbar
// (and remounts when coming back from another route), so caching them here would leave them empty.
function onScroll() {
  const y = window.scrollY + 140
  let current = ''
  for (const item of navItems) {
    const s = document.getElementById(item.id)
    if (s && s.offsetTop <= y) current = item.id
  }
  activeId.value = current
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.cursor-blink {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

.nav-link.active {
  color: var(--color-terminal-accent);
  background: var(--color-terminal-accent-dim);
}

/* ── animated hamburger / close button ── */
.burger:hover {
  border-color: var(--color-terminal-accent);
}

.burger-open {
  background: var(--color-terminal-accent-dim);
}

.blines {
  position: relative;
  width: 18px;
  height: 12px;
}

.blines i {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  border-radius: 2px;
  background: currentColor;
  transition:
    transform 0.36s cubic-bezier(0.66, -0.3, 0.29, 1.32),
    opacity 0.16s ease;
}

.blines i:nth-child(1) {
  top: 0;
}

.blines i:nth-child(2) {
  top: 50%;
  margin-top: -0.75px;
}

.blines i:nth-child(3) {
  bottom: 0;
}

.burger-open .blines i:nth-child(1) {
  transform: translateY(5.25px) rotate(45deg);
}

.burger-open .blines i:nth-child(2) {
  opacity: 0;
  transform: scaleX(0.3);
}

.burger-open .blines i:nth-child(3) {
  transform: translateY(-5.25px) rotate(-45deg);
}
</style>
