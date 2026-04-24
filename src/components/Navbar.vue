<template>
  <Disclosure as="nav" class="relative z-20 border-b border-terminal-border bg-terminal-bg" v-slot="{ open, close }">
    <div class="flex items-center justify-between px-6 py-5 md:px-12">
      <!-- Brand: ~/laszlo_ with blinking cursor -->
      <RouterLink to="/" class="text-sm font-bold tracking-[0.05em] text-terminal-accent"
        :aria-label="$t('nav.logoAlt')">
        ~/laszlo<span class="cursor-blink">_</span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" custom
          v-slot="{ href, navigate, isActive, isExactActive }">
          <a :href="href" @click="navigate"
            class="nav-link text-[13px] tracking-[0.04em] text-terminal-muted transition-colors hover:text-terminal-accent"
            :class="{
              active: item.exact ? isExactActive : isActive,
            }">
            <template v-if="item.exact ? isExactActive : isActive">&gt;&nbsp;</template>{{ $t(item.key) }}
          </a>
        </RouterLink>

        <LanguageSwitcher class="border-l border-terminal-border pl-5 text-xs text-terminal-muted" />
      </div>

      <!-- Mobile toggle -->
      <DisclosureButton
        class="menu-btn flex items-center justify-center border border-terminal-border px-2 py-1 text-terminal-accent transition-colors hover:border-terminal-accent md:hidden"
        :aria-label="open ? 'Close menu' : 'Open menu'">
        <span class="text-lg leading-none">{{ open ? '×' : '☰' }}</span>
      </DisclosureButton>
    </div>

    <!-- Mobile panel -->
    <DisclosurePanel class="md:hidden">
      <div class="flex flex-col gap-5 border-t border-terminal-border px-6 py-5">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" custom
          v-slot="{ href, navigate, isActive, isExactActive }">
          <a :href="href" @click="(e) => { navigate(e); close(); }"
            class="nav-link text-sm tracking-[0.04em] text-terminal-muted transition-colors hover:text-terminal-accent"
            :class="{
              active: item.exact ? isExactActive : isActive,
            }">
            <template v-if="item.exact ? isExactActive : isActive">&gt;&nbsp;</template>{{ $t(item.key) }}
          </a>
        </RouterLink>

        <LanguageSwitcher class="border-t border-terminal-border pt-4 text-xs text-terminal-muted" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const navItems = [
  { to: '/', key: 'nav.home', exact: true },
  { to: '/projects', key: 'nav.projects', exact: false },
  { to: '/experience', key: 'nav.experience', exact: false },
  { to: '/contact', key: 'nav.contact', exact: false },
]
</script>

<style scoped>
.nav-link.active {
  color: var(--color-terminal-accent);
}
</style>
