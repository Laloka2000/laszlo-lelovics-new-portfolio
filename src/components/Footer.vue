<template>
    <footer class="bg-gray-900 text-gray-300 py-8">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <!-- Footer copyright -->
            <div class="text-sm text-center md:text-left">
                @ {{ new Date().getFullYear() }} Laszlo Lelovics. All rights reserved.
            </div>

            <!-- Nav links -->
            <nav class="flex flex-wrap justify-center gap-6 text-sm">
                <RouterLink to="/" class="hover:text-white transition">Home</RouterLink>
                <RouterLink to="/projects" class="hover:text-white transition">Projects</RouterLink>
                <RouterLink to="/experience" class="hover:text-white transition">Experience</RouterLink>
                <RouterLink to="/contact" class="hover:text-white transition">Contact</RouterLink>
            </nav>

            <!-- Social icons -->
            <div class="flex gap-5">
                <a href="https://github.com/yourgithub" target="_blank" aria-label="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        class="w-6 h-6 invert" />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" aria-label="LinkedIn">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        class="w-6 h-6" />
                </a>
                <a href="mailto:youremail@gmail.com" aria-label="Gmail">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" class="w-6 h-6" />
                </a>
            </div>

        </div>

    </footer>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>