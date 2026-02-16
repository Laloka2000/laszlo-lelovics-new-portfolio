<template>
  <Disclosure as="nav" class="bg-navy text-white shadow-lg" v-slot="{ open }">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </DisclosureButton>
        </div>

        <!-- Logo - Left side -->
        <div class="flex items-center">
          <RouterLink to="/">
            <img :src="DevLogo" alt="Developer logo" class="h-12 w-12" />
          </RouterLink>
        </div>

        <!-- Desktop navigation links - Right side -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-4">
            <RouterLink 
              to="/" 
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 hover:text-gray-200"
              active-class="bg-white/20"
            >
              {{ $t('nav.home') }}
            </RouterLink>
            <RouterLink 
              to="/projects" 
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 hover:text-gray-200"
              active-class="bg-white/20"
            >
              {{ $t('nav.projects') }}
            </RouterLink>
            <RouterLink 
              to="/experience" 
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 hover:text-gray-200"
              active-class="bg-white/20"
            >
              {{ $t('nav.experience') }}
            </RouterLink>
            <RouterLink 
              to="/contact" 
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-white/10 hover:text-gray-200"
              active-class="bg-white/20"
            >
              {{ $t('nav.contact') }}
            </RouterLink>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <DisclosurePanel class="md:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton as="div">
          <RouterLink 
            to="/" 
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 hover:text-gray-200"
            active-class="bg-white/20"
          >
            {{ $t('nav.home') }}
          </RouterLink>
        </DisclosureButton>
        <DisclosureButton as="div">
          <RouterLink 
            to="/projects" 
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 hover:text-gray-200"
            active-class="bg-white/20"
          >
            {{ $t('nav.projects') }}
          </RouterLink>
        </DisclosureButton>
        <DisclosureButton as="div">
          <RouterLink 
            to="/experience" 
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 hover:text-gray-200"
            active-class="bg-white/20"
          >
            {{ $t('nav.experience') }}
          </RouterLink>
        </DisclosureButton>
        <DisclosureButton as="div">
          <RouterLink 
            to="/contact" 
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 hover:text-gray-200"
            active-class="bg-white/20"
          >
            {{ $t('nav.contact') }}
          </RouterLink>
        </DisclosureButton>
        <div class="px-3 py-2">
          <LanguageSwitcher />
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import DevLogo from "../assets/images/code.png"
import LanguageSwitcher from './LanguageSwitcher.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const isOpen = ref(false);
</script>
