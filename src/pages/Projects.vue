<template>
    <section class="min-h-[calc(67vh-6rem)]  bg-gray-50 dark:bg-gray-900 py-16">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Heading -->
            <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12" v-motion
                :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }">
                Projektek 🚀
            </h2>

            <!-- Projects Grid -->
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="(project, index) in projects" :key="index"
                    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
                    v-motion :initial="{ opacity: 0, y: 40 }"
                    :enter="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }">
                    <!-- Title -->
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        {{ project.title }}
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                        {{ project.description }}
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
                        <a :href="project.demoLink" target="_blank"
                            class="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Élő demó
                        </a>
                        <a :href="project.codeLink" target="_blank"
                            class="flex-1 text-center px-4 py-2 border border-white-600 text-white-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                            Kódbázis
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
        title: 'Jegyzet kezelő alkalmazás',
        description: 'Egy egyszerű jegyzet alkalmazás, amely lehetővé teszi a felhasználók számára, hogy létrehozzanak, szerkesszenek és töröljenek jegyzeteket egy felhasználóbarát felületen.',
        tech: ['React.js', 'JavaScript', 'Vercel'],
        demoLink: 'https://keeperapp-beta.vercel.app/',
        codeLink: 'https://github.com/Laloka2000/keeperapp'
    },
    {
        title: 'Kockajáték',
        description: 'Egy egyszerű kockajáték, ahol a felhasználók dobhatnak két kockával, és a cél a lehető legmagasabb pontszám elérése.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        demoLink: 'https://github.com/Laloka2000/PigGame',
        codeLink: 'https://github.com/Laloka2000/PigGame'
    },
    {
        title: 'Időjárás alkalmazás',
        description: 'Egy időjárás alkalmazás, amely valós idejű időjárási adatokat szolgáltat a felhasználók számára egy letisztult és modern felületen.',
        tech: ['Vue.js', 'OpenWeatherMap API', 'Netlify'],
        demoLink: 'https://vue-weather-app-3aedb.netlify.app/',
        codeLink: 'https://github.com/Laloka2000/weather-app'
    },
    {
        title: 'Technológiai hírek telegram bot',
        description: 'RSS feedekből olvassa ki a legújabb cikkeket Informatikai jellegű témákban és küldi el a telegramon keresztül a felhasználónak. A megvalósításhoz a Telegram Bot API szolgáltatást használtam',
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