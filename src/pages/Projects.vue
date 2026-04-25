<template>
  <section class="page">
    <header
      class="page-heading"
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }"
    >
      <div class="kicker">$ ls ./projects/</div>
      <h2>{{ $t('projects.title') }}</h2>
    </header>

    <div class="projects-list">
      <article
        v-for="(p, i) in projects"
        :key="i"
        class="proj-row"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: 100 + i * 100 },
        }"
      >
        <span class="proj-num">{{ String(i + 1).padStart(2, '0') }}</span>

        <div class="proj-content">
          <h3 class="proj-title">{{ p.title[$i18n.locale] }}</h3>
          <p class="proj-desc">{{ p.description[$i18n.locale] }}</p>
          <div class="proj-tech">
            <span v-for="t in p.tech" :key="t" class="t">{{ t }}</span>
          </div>
        </div>

        <div class="proj-links">
          <a
            v-if="p.demoLink"
            :href="p.demoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('projects.liveDemo') }} ↗
          </a>
          <span v-else class="disabled">{{ $t('projects.liveDemo') }} ↗</span>
          <a :href="p.codeLink" target="_blank" rel="noopener noreferrer">
            {{ $t('projects.codeBase') }} ↗
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: {
      en: 'Note Management App',
      hu: 'Jegyzetkezelő alkalmazás',
    },
    description: {
      en: 'Create, edit, and delete notes with a clean user-friendly interface.',
      hu: 'Jegyzetek létrehozása, szerkesztése és törlése letisztult felületen.',
    },
    tech: ['React.js', 'JavaScript', 'Vercel'],
    demoLink: 'https://keeperapp-beta.vercel.app/',
    codeLink: 'https://github.com/Laloka2000/keeperapp',
  },
  {
    title: {
      en: 'Dice Game',
      hu: 'Kockajáték',
    },
    description: {
      en: 'Roll two dice — first to 100 points wins. Simple, sharp JS game.',
      hu: 'Dobj két kockával — aki először eléri a 100 pontot, nyer. Egyszerű JS játék.',
    },
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    demoLink: 'https://github.com/Laloka2000/PigGame',
    codeLink: 'https://github.com/Laloka2000/PigGame',
  },
  {
    title: {
      en: 'Weather App',
      hu: 'Időjárás alkalmazás',
    },
    description: {
      en: 'Real-time weather data through a clean and modern interface.',
      hu: 'Valós idejű időjárási adatok modern és letisztult felületen.',
    },
    tech: ['Vue.js', 'OpenWeatherMap API', 'Netlify'],
    demoLink: 'https://vue-weather-app-3aedb.netlify.app/',
    codeLink: 'https://github.com/Laloka2000/weather-app',
  },
  {
    title: {
      en: 'Tech News Telegram Bot',
      hu: 'Technológiai hírek Telegram bot',
    },
    description: {
      en: 'Delivers latest IT articles from RSS feeds directly via Telegram.',
      hu: 'RSS feedekből olvassa ki a legújabb IT cikkeket és küldi el Telegramon.',
    },
    tech: ['Node.js', 'SQLite', 'Railway'],
    demoLink: null,
    codeLink: 'https://github.com/Laloka2000/tech-news-bot',
  },
])
</script>

<style scoped>
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 56px 48px 96px;
}

.page-heading {
  margin-bottom: 40px;
}
.kicker {
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--color-terminal-accent);
  text-transform: uppercase;
  margin-bottom: 12px;
  font-weight: 600;
}
.page-heading h2 {
  font-size: 40px;
  font-weight: 700;
  color: var(--color-terminal-fg);
  letter-spacing: -0.03em;
  line-height: 1;
}

.projects-list {
  display: flex;
  flex-direction: column;
}
.proj-row {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 28px 0;
  border-bottom: 1px solid var(--color-terminal-border);
  transition: padding-left 0.2s ease;
}
.proj-row:hover {
  padding-left: 12px;
}
.proj-num {
  color: var(--color-terminal-accent);
  font-size: 12px;
  letter-spacing: 0.06em;
  opacity: 0.7;
  min-width: 32px;
  padding-top: 4px;
  flex-shrink: 0;
}
.proj-content {
  flex: 1;
  min-width: 0;
}
.proj-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-terminal-fg);
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}
.proj-desc {
  color: var(--color-terminal-muted);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
}
.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.proj-tech .t {
  padding: 3px 10px;
  border: 1px solid var(--color-terminal-border);
  color: var(--color-terminal-muted);
  font-size: 12px;
}
.proj-links {
  display: flex;
  gap: 16px;
  padding-top: 4px;
  flex-shrink: 0;
}
.proj-links a {
  font-size: 12px;
  color: var(--color-terminal-muted);
  border-bottom: 1px solid var(--color-terminal-border);
  padding-bottom: 1px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}
.proj-links a:hover {
  color: var(--color-terminal-accent);
  border-bottom-color: var(--color-terminal-accent);
}
.proj-links .disabled {
  font-size: 12px;
  opacity: 0.25;
  color: var(--color-terminal-muted);
  border-bottom: 1px solid var(--color-terminal-border);
  padding-bottom: 1px;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .page {
    padding: 48px 24px 80px;
  }
  .proj-row {
    flex-direction: column;
    gap: 16px;
  }
  .proj-row:hover {
    padding-left: 8px;
  }
  .proj-links {
    padding-top: 0;
  }
}
</style>
