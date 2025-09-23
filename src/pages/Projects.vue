<template>
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Heading -->
            <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12" v-motion
                :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }">
                My Projects
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
                            Live Demo
                        </a>
                        <a :href="project.codeLink" target="_blank"
                            class="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                            Code
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
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Vue.js and Tailwind CSS to showcase my projects and skills.',
        tech: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
        demoLink: 'https://myportfolio.com',
        codeLink: 'https://github.com/laszlolelo/Portfolio'
    },
    {
        title: 'Task Manager App',
        description: 'A task management application that allows users to create, edit, and delete tasks with a user-friendly interface.',
        tech: ['Vue.js', 'Vuex', 'Firebase'],
        demoLink: 'https://taskmanager.com',
        codeLink: 'https://github.com/laszlolelo/TaskManager'
    },
    {
        title: 'E-commerce Website',
        description: 'An e-commerce website built with Vue.js and Tailwind CSS to sell products online.',
        tech: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
        demoLink: 'https://ecommerce.com',
        codeLink: 'https://github.com/laszlolelo/Ecommerce'
    },
    {
        title: 'Blog Platform',
        description: 'A blogging platform that allows users to create and share blog posts with a clean and modern design.',
        tech: ['Vue.js', 'Nuxt.js', 'Contentful'],
        demoLink: 'https://blogplatform.com',
        codeLink: 'https://github.com/laszlolelo/BlogPlatform'
    }
])

















</script>

<style>
section {
    padding: 2rem;
}
</style>