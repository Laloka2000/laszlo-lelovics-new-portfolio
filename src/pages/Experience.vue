<template>
  <section class="page">
    <header class="page-heading" v-motion :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }">
      <div class="kicker">$ cat ./experience.md</div>
      <h2>{{ $t('experience.title') }}</h2>
    </header>

    <div class="exp-list">
      <article v-for="(job, i) in work" :key="'work-' + i" class="exp-item" v-motion :initial="{ opacity: 0, y: 20 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 500, delay: 120 + i * 120 },
        }">
        <div class="exp-meta">
          <div class="exp-period">{{ job.period }}</div>
          <div class="exp-org">{{ job.company[$i18n.locale] }}</div>
        </div>
        <div class="exp-body">
          <h3 class="exp-role">{{ job.title[$i18n.locale] }}</h3>
          <ul class="exp-points">
            <li v-for="(point, j) in job.points" :key="j">
              {{ point[$i18n.locale] }}
            </li>
          </ul>
        </div>
      </article>

      <article v-for="(edu, i) in education" :key="'edu-' + i" class="exp-item" v-motion
        :initial="{ opacity: 0, y: 20 }" :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            delay: 120 + work.length * 120 + i * 120,
          },
        }">
        <div class="exp-meta">
          <div class="exp-period">{{ edu.period }}</div>
          <div class="exp-org">{{ edu.institution[$i18n.locale] }}</div>
        </div>
        <div class="exp-body">
          <h3 class="exp-role">{{ edu.title[$i18n.locale] }}</h3>
          <ul class="exp-points">
            <li v-for="(point, j) in edu.points" :key="j">
              {{ point[$i18n.locale] }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue';

const work = ref([
  {
    period: '2026 - ',
    company: {
      en: "AppSolution (LLC)",
      hu: "AppSolution Kft",
    },
    title: {
      en: "Backend/fullstack developer",
      hu: "Backend/fullstack fejlesztő",
    },
    points: [
      {
        en: "Developing REST APIs for mobile applications in PHP",
        hu: "REST API-k fejlesztése mobil applikációkhoz PHP-ban",
      },
      {
        en: "Development of administration and landing page interfaces",
        hu: "Adminisztrációs és landing felületek fejlesztése",
      },
      {
        en: "Managing and creating MySQL databases",
        hu: "MySQL adatbázisok kezelése és létrehozása",
      },
    ]
  },
  {
    period: '2024 – 2025',
    company: {
      en: 'ITZen LLC',
      hu: 'ITZen Kft',
    },
    title: {
      en: 'Software developer',
      hu: 'Szoftverfejlesztő',
    },
    points: [
      {
        en: 'Laravel + Vue.js web application development',
        hu: 'Laravel + Vue.js webalkalmazások fejlesztése',
      },
      {
        en: 'Collaborated with developers on business requirements',
        hu: 'Együttműködés fejlesztőkkel az üzleti követelmények alapján',
      },
      {
        en: 'Maintained existing applications, added new features',
        hu: 'Meglévő alkalmazások karbantartása, új funkciók fejlesztése',
      },
      {
        en: 'Creating WordPress & WooCommerce websites and webshops',
        hu: 'WordPress és WooCommerce weboldalak, webshopok készítése',
      },
    ],
  },
])


const education = ref([
  {
    period: '2021 – 2024',
    institution: {
      en: 'John von Neumann University',
      hu: 'Neumann János Egyetem',
    },
    title: {
      en: 'Software Information Technology',
      hu: 'Programtervező informatikus',
    },
    points: [
      {
        en: 'Associate Degree, Computer Programming',
        hu: 'Felsőfokú szakképzés, programozó',
      },
      {
        en: 'Algorithms, databases, software dev methodologies',
        hu: 'Algoritmusok, adatbázisok, szoftverfejlesztési módszertanok',
      },
      {
        en: 'Multiple team projects, problem-solving in practice',
        hu: 'Több csapatprojekt, problémamegoldás gyakorlatban',
      },
    ],
  },
])


</script>

<style scoped>
.page {
  max-width: 800px;
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

.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 40px;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--color-terminal-border);
}

.exp-item:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}

.exp-period {
  color: var(--color-terminal-accent);
  font-size: 12px;
  letter-spacing: 0.06em;
  margin-bottom: 4px;
}

.exp-org {
  color: var(--color-terminal-muted);
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.5;
}

.exp-role {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-terminal-fg);
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

.exp-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.exp-points li {
  color: var(--color-terminal-muted);
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.exp-points li::before {
  content: '—';
  color: var(--color-terminal-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 640px) {
  .page {
    padding: 48px 24px 80px;
  }

  .exp-item {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-bottom: 32px;
    margin-bottom: 32px;
  }

  .exp-org {
    margin-top: 4px;
  }
}
</style>
