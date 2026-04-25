<template>
  <div class="inline-flex items-center gap-1 tracking-[0.05em]">
    <button type="button" class="switch-btn" :class="{ active: currentLocale === 'en' }"
      :aria-pressed="currentLocale === 'en'" @click="changeLocale('en')">
      EN
    </button>
    <span class="opacity-40" aria-hidden="true">/</span>
    <button type="button" class="switch-btn" :class="{ active: currentLocale === 'hu' }"
      :aria-pressed="currentLocale === 'hu'" @click="changeLocale('hu')">
      HU
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

function changeLocale(lang)
{
  locale.value = lang
  try
  {
    localStorage.setItem('locale', lang)
  } catch
  {
  }
  document.documentElement.setAttribute('lang', lang)
}
</script>

<style scoped>
.switch-btn {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  letter-spacing: inherit;
  padding: 0 2px;
  transition: color 0.2s ease;
}

.switch-btn:hover {
  color: var(--color-terminal-accent);
}

.switch-btn.active {
  color: var(--color-terminal-accent);
}
</style>
