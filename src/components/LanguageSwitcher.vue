<template>
    <div class="flex gap-2 items-center">
        <button @click="changeLocale('hu')" :class="[
            'text-1xl transition-all duration-200',
            currentLocale === 'hu'
                ? 'scale-90 opacity-100'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
        ]" title="Magyar">
            HU
        </button>
        <button @click="changeLocale('en')" :class="[
            'text-1xl transition-all duration-200',
            currentLocale === 'en'
                ? 'scale-90 opacity-100'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
        ]" title="English">
            EN
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const currentLocale = ref(locale.vue)


const changeLocale = (lang) => {
    currentLocale.value = lang
    locale.value = lang
    localStorage.setItem('locale', lang)
}


</script>
