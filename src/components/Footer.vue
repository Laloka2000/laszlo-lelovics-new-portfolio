<template>
    <footer class="bg-gray-900 text-gray-300 py-8">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <!-- Footer copyright -->
            <div class="text-sm text-center md:text-left">
                @ {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
            </div>

            <!-- Nav links -->
            <nav class="flex flex-wrap justify-center gap-6 text-sm">
                <RouterLink to="/" class="hover:text-white transition">{{ $t('footer.home') }}</RouterLink>
                <RouterLink to="/projects" class="hover:text-white transition">{{ $t('footer.projects') }}</RouterLink>
                <RouterLink to="/experience" class="hover:text-white transition">{{ $t('footer.experience') }}</RouterLink>
                <RouterLink to="/contact" class="hover:text-white transition">{{ $t('footer.contact') }}</RouterLink>
            </nav>

            <!-- Social icons -->
            <div class="flex gap-5">
                <a href="https://github.com/Laloka2000" target="_blank" aria-label="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        class="w-6 h-6 invert" />
                </a>
                <a href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/" target="_blank" aria-label="LinkedIn">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                        class="w-6 h-6" />
                </a>
                <a href="mailto:lelovicslaszlo10@gmail.com" aria-label="Gmail">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" class="w-6 h-6" />
                </a>
            </div>
        </div>

    </footer>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>