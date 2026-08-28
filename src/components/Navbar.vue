<template>
  <Disclosure as="nav" class="sticky top-0 z-20 border-b border-terminal-border bg-terminal-bg/80 backdrop-blur"
    v-slot="{ open, close }">
    <div class="flex items-center justify-between px-6 py-5 md:px-12">
      <a href="#top" @click="scrollToHash($event, '#top')" class="text-sm font-bold tracking-[0.05em] text-terminal-accent"
        :aria-label="$t('nav.logoAlt')">
        ~/laszlo<span class="cursor-blink">_</span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" @click="scrollToHash($event, '#' + item.id)"
          class="nav-link rounded-full px-3 py-1.5 text-[13px] tracking-[0.04em] text-terminal-muted transition-colors hover:text-terminal-accent"
          :class="{ active: activeId === item.id }">
          {{ $t(item.key) }}
        </a>

        <LanguageSwitcher class="ml-4 border-l border-terminal-border pl-5 text-xs text-terminal-muted" />

        <a href="#contact" @click="scrollToHash($event, '#contact')"
          class="navcta ml-3 inline-flex items-center gap-2 rounded-full bg-terminal-accent px-4 py-2 text-[13px] font-semibold text-black transition-colors hover:bg-[#7dffc0]">
          {{ $t('nav.getInTouch') }}
        </a>
      </div>

      <DisclosureButton
        class="burger flex h-9 w-9 items-center justify-center rounded-lg border border-terminal-border text-terminal-accent transition-colors md:hidden"
        :class="{ 'burger-open': open }"
        :aria-label="open ? 'Close menu' : 'Open menu'" :aria-expanded="open">
        <span class="blines" aria-hidden="true">
          <i /><i /><i />
        </span>
      </DisclosureButton>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="flex flex-col gap-5 border-t border-terminal-border px-6 py-5">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
          @click="(e) => { scrollToHash(e, '#' + item.id); close(); }"
          class="nav-link text-sm tracking-[0.04em] text-terminal-muted transition-colors hover:text-terminal-accent"
          :class="{ active: activeId === item.id }">
          {{ $t(item.key) }}
        </a>

        <LanguageSwitcher class="border-t border-terminal-border pt-4 text-xs text-terminal-muted" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const navItems = [
  { id: 'work', key: 'nav.work' },
  { id: 'about', key: 'nav.about' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'path', key: 'nav.path' },
  { id: 'contact', key: 'nav.contact' },
]

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

let onScroll = null

onMounted(() => {
  const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean)
  if (!sections.length) return

  onScroll = () => {
    const y = window.scrollY + 140
    let current = ''
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id
    }
    activeId.value = current
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll)
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
