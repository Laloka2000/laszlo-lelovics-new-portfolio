<script setup>
import profilePic from "../assets/images/photo.jpg"

// Tech stack logos
const techStacks = [
  { name: "Vue.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Bootstrap", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { name: "WordPress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg" },
  { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
]
</script>

<template>
  <section
    class="min-h-[calc(60vh-6rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-12"
  >
    <!-- LEFT: Text Content -->
    <div
      class="text-center md:text-left space-y-6"
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
        Üdv, <span class="text-blue-600">Lelovics László</span> vagyok👋
      </h1>

      <p class="text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
        Motivált és céltudatos <span class="font-semibold text">Szoftverfejlesztő</span> vagyok, aki szeret modern és felhasználóbarát webalkalmazásokat építeni. Folyamatosan tanulok és fejlődök, hogy naprakész maradjak a legújabb technológiákkal és trendekkel.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <RouterLink
          to="/projects"
          class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Tekintsd meg a projektjeim
        </RouterLink>
        <RouterLink
          to="/contact"
          class="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Vedd fel velem a kapcsolatot
        </RouterLink>
      </div>
    </div>

    <!-- RIGHT: Profile Picture -->
    <div
      class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg"
      v-motion
      :initial="{ opacity: 0, x: 40 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }"
    >
      <img
        :src="profilePic"
        alt="Profile Picture"
        class="w-full h-full object-cover"
      />
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section class="py-16 text-center">
    <h2
      class="text-3xl md:text-4xl font-bold mb-8"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
    >
      Technológiák ⚡
    </h2>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 0.2, duration: 1 } }"
    >
      <div
        v-for="tech in techStacks"
        :key="tech.name"
        class="flex flex-col items-center space-y-2 hover:scale-110 transition-transform"
      >
        <img :src="tech.logo" :alt="tech.name" class="w-16 h-16" />
        <span class="text-sm font-medium">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>
