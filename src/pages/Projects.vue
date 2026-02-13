<template>
    <section class="min-h-[calc(67vh-6rem)] bg-gray-50 dark:bg-gray-900 py-16">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Heading -->
            <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12" v-motion
                :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }">
                {{ $t('projects.title') }}
            </h2>

            <!-- Projects Grid -->
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="(project, index) in projects" :key="index"
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
                    v-motion :initial="{ opacity: 0, y: 40 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }">
                    <!-- Title -->
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        {{ project.title[$i18n.locale] }}
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        {{ project.description[$i18n.locale] }}
                    </p>

                    <!-- Tech Stack -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span v-for="(tech, idx) in project.tech" :key="idx"
                            class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full">
                            {{ tech }}
                        </span>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 mt-auto">
                        <a v-if="project.demoLink" :href="project.demoLink" target="_blank"
                            class="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            {{ $t('projects.liveDemo') }}
                        </a>
                        <a :href="project.codeLink" target="_blank"
                            class="flex-1 text-center px-4 py-2 border border-gray-600 text-gray-600 dark:border-gray-400 dark:text-gray-300 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                            {{ $t('projects.codeBase') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
    {
        title: {
            hu: 'Jegyzet kezelő alkalmazás',
            en: 'Note Management App'
        },
        description: {
            hu: 'Egy egyszerű jegyzet alkalmazás, amely lehetővé teszi a felhasználók számára, hogy létrehozzanak, szerkesszenek és töröljenek jegyzeteket egy felhasználóbarát felületen.',
            en: 'A simple note-taking app that allows users to create, edit, and delete notes with a user-friendly interface.'
        },
        tech: ['React.js', 'JavaScript', 'Vercel'],
        demoLink: 'https://keeperapp-beta.vercel.app/',
        codeLink: 'https://github.com/Laloka2000/keeperapp'
    },
    {
        title: {
            hu: 'Kockajáték',
            en: 'Dice Game'
        },
        description: {
            hu: 'Egy egyszerű kockajáték, ahol a felhasználók dobhatnak két kockával, és a cél a lehető legmagasabb pontszám elérése.',
            en: 'A simple dice game where users can roll two dice, with the goal of achieving the highest possible score.'
        },
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        demoLink: 'https://github.com/Laloka2000/PigGame',
        codeLink: 'https://github.com/Laloka2000/PigGame'
    },
    {
        title: {
            hu: 'Időjárás alkalmazás',
            en: 'Weather App'
        },
        description: {
            hu: 'Egy időjárás alkalmazás, amely valós idejű időjárási adatokat szolgáltat a felhasználók számára egy letisztult és modern felületen.',
            en: 'A weather application that provides real-time weather data to users through a clean and modern interface.'
        },
        tech: ['Vue.js', 'OpenWeatherMap API', 'Netlify'],
        demoLink: 'https://vue-weather-app-3aedb.netlify.app/',
        codeLink: 'https://github.com/Laloka2000/weather-app'
    },
    {
        title: {
            hu: 'Technológiai hírek telegram bot',
            en: 'Tech News Telegram Bot'
        },
        description: {
            hu: 'RSS feedekből olvassa ki a legújabb cikkeket Informatikai jellegű témákban és küldi el a telegramon keresztül a felhasználónak. A megvalósításhoz a Telegram Bot API szolgáltatást használtam.',
            en: 'Reads the latest articles from RSS feeds on IT-related topics and sends them to users via Telegram. Built using the Telegram Bot API.'
        },
        tech: ['Node.js', 'SQLite', 'Railway', 'JavaScript'],
        codeLink: 'https://github.com/Laloka2000/tech-news-bot'
    }
])
</script>

<style>
section {
    padding: 2rem;
}
</style>