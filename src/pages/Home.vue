<template>
  <div id="top">
    <!-- ══════════ HERO ══════════ -->
    <section class="hero-wrap">
      <div class="float-bg" aria-hidden="true">
        <img v-for="(f, i) in floatIcons" :key="i" :src="f.icon" :alt="''" class="float-icon" :style="{
          top: f.top,
          left: f.left,
          width: f.size,
          height: f.size,
          animationDuration: f.duration,
          animationDelay: f.delay,
        }" />
      </div>
      <div class="glow" aria-hidden="true" />
      <div class="page hero-grid">
        <div class="hero-left">
          <span class="pill" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }">
            <span class="dot" />{{ $t('home.available') }}
          </span>

          <h1 class="name" v-motion :initial="{ opacity: 0, y: 24 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 80 } }">
            <span class="first">{{ $t('home.firstName') }}</span>
            <span class="last">{{ $t('home.lastName') }}</span>
          </h1>

          <div class="role" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 160 } }">
            <span class="sigil">// </span>{{ $t('home.roleLabel') }}: {{ $t('home.role') }}
          </div>

          <div class="bio" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 220 } }">
            <p>{{ $t('home.bioLine1') }}</p>
            <p>{{ $t('home.bioLine2') }}</p>
          </div>

          <div class="ctas" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }">
            <a href="#projects" @click="scrollTo($event, 'projects')" class="btn btn-primary">
              <FolderGit2 :size="16" />{{ $t('home.ctaProjects') }}
            </a>
            <a href="#contact" @click="scrollTo($event, 'contact')" class="btn btn-secondary">
              <Mail :size="16" />{{ $t('home.ctaContact') }}
            </a>
          </div>
        </div>

        <div class="hero-photo" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 160 } }">
          <img :src="photo" :alt="$t('home.profileAlt')" />
          <div class="scan" aria-hidden="true" />
          <div class="badge">
            <span class="label">{{ $t('home.location') }}</span>
            <span class="mono-accent">EN / HU</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ WORK / WHAT I DO ══════════ -->
    <section id="work" class="page">
      <div class="shead">
        <div>
          <div class="kicker">{{ $t('work.kicker') }}</div>
          <h2>{{ $t('work.title') }}</h2>
        </div>
      </div>

      <div class="bento">
        <div v-for="(item, i) in workItems" :key="item.title[locale]" class="card"
          :class="item.span" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 60 } }">
          <div class="ico"><component :is="item.icon" :size="18" /></div>
          <h3>{{ item.title[locale] }}</h3>
          <p>{{ item.desc[locale] }}</p>
        </div>

        <div class="card c2 stat-card" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: workItems.length * 60 } }">
          <div class="big">2<span class="accent">+</span></div>
          <p>{{ $t('work.statYears') }}</p>
        </div>
      </div>
    </section>

    <!-- ══════════ ABOUT ══════════ -->
    <section id="about" class="page">
      <div class="shead">
        <div>
          <div class="kicker">{{ $t('about.kicker') }}</div>
          <h2>{{ $t('about.title') }}</h2>
        </div>
      </div>

      <div class="about-grid">
        <div class="abody" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
          <p v-html="$t('about.p1')" />
          <p v-html="$t('about.p2')" />
          <p v-html="$t('about.p3')" />
        </div>

        <div class="facts" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }">
          <div class="frow">
            <MapPin :size="16" /><span class="v">{{ $t('home.location') }}</span>
            <span class="k">{{ $t('about.factLocation') }}</span>
          </div>
          <div class="frow">
            <Languages :size="16" /><span class="v">Hungarian · English</span>
            <span class="k">{{ $t('about.factLang') }}</span>
          </div>
          <div class="frow">
            <CodeXml :size="16" /><span class="v">{{ $t('about.factFocusValue') }}</span>
            <span class="k">{{ $t('about.factFocus') }}</span>
          </div>
          <div class="frow">
            <CircleCheck :size="16" /><span class="v">{{ $t('about.factStatusValue') }}</span>
            <span class="k">{{ $t('about.factStatus') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ STACK ══════════ -->
    <section id="stack" class="page">
      <div class="shead">
        <div>
          <div class="kicker">{{ $t('stack.kicker') }}</div>
          <h2>{{ $t('stack.title') }}</h2>
        </div>
      </div>

      <div class="card c4">
        <div class="label">{{ $t('stack.label') }}</div>
        <div class="stackgrid">
          <div v-for="(t, i) in techStack" :key="t.name" class="chip" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 350, delay: i * 30 } }">
            <img :src="t.icon" :alt="t.name" loading="lazy" />
            <span>{{ t.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ PROJECTS ══════════ -->
    <section id="projects" class="page">
      <div class="shead">
        <div>
          <div class="kicker">{{ $t('projects.kicker') }}</div>
          <h2>{{ $t('projects.title') }}</h2>
        </div>
      </div>

      <div class="proj-grid">
        <article v-for="(p, i) in projects" :key="p.title.en" class="pcard" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 70 } }">
          <div class="ptop">
            <span class="pnum">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="plinks">
              <a v-if="p.demoLink" :href="p.demoLink" target="_blank" rel="noopener noreferrer"
                :aria-label="$t('projects.liveDemo')">
                <ArrowUpRight :size="15" />
              </a>
              <a :href="p.codeLink" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github :size="15" />
              </a>
            </div>
          </div>
          <h3>{{ p.title[locale] }}</h3>
          <p>{{ p.description[locale] }}</p>
          <div class="tags">
            <span v-for="tag in p.tech" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- ══════════ PATH (EXPERIENCE + EDUCATION) ══════════ -->
    <section id="path" class="page">
      <div class="shead">
        <div>
          <div class="kicker">{{ $t('path.kicker') }}</div>
          <h2>{{ $t('path.title') }}</h2>
        </div>
      </div>

      <div class="tl">
        <div v-for="(job, i) in work" :key="job.company.en" class="trow" v-motion :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: i * 90 } }">
          <div>
            <div class="torg"><span class="ico"><Briefcase :size="16" /></span>{{ job.company[locale] }}</div>
            <div class="tper">{{ job.period }}</div>
          </div>
          <div>
            <h3>{{ job.title[locale] }}</h3>
            <ul>
              <li v-for="(point, j) in job.points" :key="j"><Check :size="15" />{{ point[locale] }}</li>
            </ul>
          </div>
        </div>

        <div v-for="(edu, i) in education" :key="edu.institution.en" class="trow" v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: (work.length + i) * 90 } }">
          <div>
            <div class="torg"><span class="ico"><GraduationCap :size="16" /></span>{{ edu.institution[locale] }}</div>
            <div class="tper">{{ edu.period }}</div>
          </div>
          <div>
            <h3>{{ edu.title[locale] }}</h3>
            <ul>
              <li v-for="(point, j) in edu.points" :key="j"><Check :size="15" />{{ point[locale] }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ CONTACT ══════════ -->
    <section id="contact" class="page">
      <div class="contact-card" v-motion :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <span class="kicker">{{ $t('contact.kicker') }}</span>
        <h2>{{ $t('contact.title') }}</h2>
        <p>{{ $t('contact.subtitle') }}</p>
        <div class="clist">
          <a v-for="link in contactLinks" :key="link.label" :href="link.href"
            :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined"
            class="clink">
            <component :is="link.icon" :size="16" />{{ link.value }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import photo from '../assets/images/photo.jpg'
import {
  FolderGit2,
  Mail,
  MapPin,
  Languages,
  CodeXml,
  CircleCheck,
  LayoutDashboard,
  Server,
  ShoppingCart,
  Gauge,
  Github,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Check,
} from 'lucide-vue-next'

const { locale } = useI18n()

function scrollTo(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/* ── what I do ── */
const workItems = [
  {
    icon: LayoutDashboard,
    span: 'c2',
    title: { en: 'Frontend engineering', hu: 'Frontend fejlesztés' },
    desc: {
      en: 'Component-driven interfaces in Vue 3 and React, styled with Tailwind. Accessible, responsive, and quick on real devices.',
      hu: 'Komponens-alapú felületek Vue 3-ban és React-ben, Tailwind stílussal. Akadálymentes, reszponzív és gyors valós eszközökön.',
    },
  },
  {
    icon: Server,
    span: 'c2',
    title: { en: 'Backend & APIs', hu: 'Backend és API-k' },
    desc: {
      en: 'PHP and Node services — REST endpoints, MySQL data modelling, auth flows and the glue that keeps a product running.',
      hu: 'PHP és Node szolgáltatások — REST végpontok, MySQL adatmodellezés, auth folyamatok és minden, ami egyben tartja a terméket.',
    },
  },
  {
    icon: ShoppingCart,
    span: '',
    title: { en: 'WordPress & WooCommerce', hu: 'WordPress és WooCommerce' },
    desc: {
      en: 'Custom themes and webshops built from design files.',
      hu: 'Egyedi témák és webshopok, design fájlokból megépítve.',
    },
  },
  {
    icon: Gauge,
    span: '',
    title: { en: 'Performance', hu: 'Teljesítmény' },
    desc: {
      en: 'Bundle trimming, lazy loading, and fewer round trips.',
      hu: 'Kisebb bundle, lusta betöltés, kevesebb felesleges kérés.',
    },
  },
]

/* ── stack ── */
const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'
const techStack = [
  { name: 'Vue.js', icon: D + 'vuejs/vuejs-original.svg' },
  { name: 'React', icon: D + 'react/react-original.svg' },
  { name: 'Laravel', icon: D + 'laravel/laravel-original.svg' },
  { name: 'Tailwind', icon: D + 'tailwindcss/tailwindcss-original.svg' },
  { name: 'JavaScript', icon: D + 'javascript/javascript-original.svg' },
  { name: 'Node.js', icon: D + 'nodejs/nodejs-original.svg' },
  { name: 'PHP', icon: D + 'php/php-original.svg' },
  { name: 'MySQL', icon: D + 'mysql/mysql-original.svg' },
  { name: 'WordPress', icon: D + 'wordpress/wordpress-plain.svg' },
  { name: 'Python', icon: D + 'python/python-original.svg' },
  { name: 'Git', icon: D + 'git/git-original.svg' },
]

/* ── hero floating background icons ── */
const floatIcons = [
  { icon: D + 'tailwindcss/tailwindcss-original.svg', top: '2%', left: '26%', size: '38px', duration: '9s', delay: '0s' },
  { icon: D + 'react/react-original.svg', top: '34%', left: '3%', size: '48px', duration: '11s', delay: '.6s' },
  { icon: D + 'wordpress/wordpress-plain.svg', top: '4%', left: '85%', size: '42px', duration: '10s', delay: '1.2s' },
  { icon: D + 'nodejs/nodejs-original.svg', top: '58%', left: '92%', size: '44px', duration: '8.5s', delay: '.3s' },
  { icon: D + 'php/php-original.svg', top: '20%', left: '49%', size: '34px', duration: '10.5s', delay: '1.8s' },
  { icon: D + 'javascript/javascript-original.svg', top: '52%', left: '54%', size: '36px', duration: '9.5s', delay: '.9s' },
  { icon: D + 'laravel/laravel-original.svg', top: '78%', left: '10%', size: '32px', duration: '11.5s', delay: '1.5s' },
  { icon: D + 'git/git-original.svg', top: '82%', left: '62%', size: '30px', duration: '9s', delay: '2.1s' },
  { icon: D + 'vuejs/vuejs-original.svg', top: '10%', left: '68%', size: '30px', duration: '10s', delay: '.4s' },
]

/* ── projects ── */
const projects = [
  {
    title: { en: 'Note Management App', hu: 'Jegyzetkezelő alkalmazás' },
    description: {
      en: 'Create, edit, and delete notes with a clean user-friendly interface.',
      hu: 'Jegyzetek létrehozása, szerkesztése és törlése letisztult felületen.',
    },
    tech: ['React.js', 'JavaScript', 'Vercel'],
    demoLink: 'https://keeperapp-beta.vercel.app/',
    codeLink: 'https://github.com/Laloka2000/keeperapp',
  },
  {
    title: { en: 'User Configuration Manager', hu: 'Felhasználói konfiguráció kezelő' },
    description: {
      en: 'A lightweight Python utility designed to manage application settings using a dictionary-based storage.',
      hu: 'Egy könnyű Python segédprogram alkalmazásbeállítások kezelésére szótár-alapú tárhely használatával.',
    },
    tech: ['Python'],
    demoLink: null,
    codeLink: 'https://github.com/Laloka2000/user-configuration-manager',
  },
  {
    title: { en: 'Your little library', hu: 'A kis könyvtárad' },
    description: {
      en: 'A personal book collection manager with an easy-to-use interface — add, edit and delete books, with login and cover display.',
      hu: 'Személyes könyvgyűjtemény kezelő könnyen használható felülettel — könyvek hozzáadása, szerkesztése, törlése, bejelentkezéssel és borítómegjelenítéssel.',
    },
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://litte-library.great-site.net',
    codeLink: 'https://github.com/Laloka2000/your-little-library',
  },
  {
    title: { en: 'Tech News Telegram Bot', hu: 'Technológiai hírek Telegram bot' },
    description: {
      en: 'Delivers the latest IT articles from RSS feeds directly via Telegram.',
      hu: 'RSS feedekből olvassa ki a legújabb IT cikkeket és küldi el Telegramon.',
    },
    tech: ['Node.js', 'SQLite', 'Railway'],
    demoLink: null,
    codeLink: 'https://github.com/Laloka2000/tech-news-bot',
  },
  {
    title: { en: 'Tech Stock Watcher', hu: 'Technológiai részvény figyelő' },
    description: {
      en: 'A real-time tech stock watchlist built with Next.js 14, Tailwind CSS, and two free-tier APIs. Installable as a PWA.',
      hu: 'Valós idejű tech részvényfigyelő lista Next.js 14-gyel, Tailwind CSS-sel és 2 ingyenes API-val, PWA-ként telepíthető.',
    },
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    demoLink: 'https://tech-stock-watcher.vercel.app/',
    codeLink: 'https://github.com/Laloka2000/tech-stock-watcher',
  },
]

/* ── experience & education ── */
const work = [
  {
    period: '2026 – 2026',
    company: { en: 'AppSolution LLC', hu: 'AppSolution Kft' },
    title: { en: 'Backend / Fullstack Developer', hu: 'Backend / fullstack fejlesztő' },
    points: [
      { en: 'Developing REST APIs for mobile applications in PHP', hu: 'REST API-k fejlesztése mobil applikációkhoz PHP-ban' },
      { en: 'Building administration and landing page interfaces', hu: 'Adminisztrációs és landing felületek fejlesztése' },
      { en: 'Managing and creating MySQL databases', hu: 'MySQL adatbázisok kezelése és létrehozása' },
    ],
  },
  {
    period: '2024 – 2025',
    company: { en: 'ITZen LLC', hu: 'ITZen Kft' },
    title: { en: 'Software Developer', hu: 'Szoftverfejlesztő' },
    points: [
      { en: 'Laravel + Vue.js web application development', hu: 'Laravel + Vue.js webalkalmazások fejlesztése' },
      { en: 'Collaborated with developers on business requirements', hu: 'Együttműködés fejlesztőkkel az üzleti követelmények alapján' },
      { en: 'Maintained existing applications, added new features', hu: 'Meglévő alkalmazások karbantartása, új funkciók fejlesztése' },
      { en: 'Built WordPress & WooCommerce websites and webshops', hu: 'WordPress és WooCommerce weboldalak, webshopok készítése' },
    ],
  },
]

const education = [
  {
    period: '2026 - ',
    institution: { en: 'University of Szeged', hu: 'Szegedi Tudományegyetem' },
    title: { en: 'Computer Science', hu: 'Programtervező Informatikus' },
    points: [
      { en: 'Bachelor degree', hu: 'Alapképzés (diploma)' },
      { en: 'Algorithms, databases, software dev methodologies', hu: 'Algoritmusok, adatbázisok, szoftverfejlesztési módszertanok' },
      { en: 'Multiple team projects, practical problem-solving', hu: 'Több csapatprojekt, problémamegoldás gyakorlatban' },
    ],
  },
  {
    period: '2021 – 2024',
    institution: { en: 'John von Neumann University', hu: 'Neumann János Egyetem' },
    title: { en: 'Software Information Technology', hu: 'Programtervező informatikus (Foszk)' },
    points: [
      { en: 'Associate degree', hu: 'Felsőfokú szakképzés' },
      { en: 'Algorithms, databases, software dev methodologies', hu: 'Algoritmusok, adatbázisok, szoftverfejlesztési módszertanok' },
      { en: 'Multiple team projects, practical problem-solving', hu: 'Több csapatprojekt, problémamegoldás gyakorlatban' },
    ],
  },
]

/* ── contact ── */
const contactLinks = [
  { label: 'EMAIL', value: 'lelovicslaszlo10@gmail.com', href: 'mailto:lelovicslaszlo10@gmail.com', external: false, icon: Mail },
  { label: 'GITHUB', value: 'github.com/Laloka2000', href: 'https://github.com/Laloka2000', external: true, icon: Github },
  { label: 'LINKEDIN', value: 'linkedin.com/in/laszlo-lelovics', href: 'https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/', external: true, icon: Linkedin },
  { label: 'BEACONS', value: 'beacons.ai/laszlolelovics', href: 'https://beacons.ai/laszlolelovics', external: true, icon: ArrowUpRight },
]
</script>

<style scoped>
.page {
  max-width: 1180px;
  margin: 0 auto;
  padding: 96px 28px;
}

.sigil {
  color: var(--color-terminal-accent);
}

/* ── hero ── */
.hero-wrap {
  position: relative;
  overflow: hidden;
}

.hero-wrap .page {
  padding-top: 72px;
  padding-bottom: 88px;
}

.glow {
  position: absolute;
  top: -22%;
  left: 54%;
  width: 760px;
  height: 760px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.1), transparent 66%);
  pointer-events: none;
}

.float-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.float-icon {
  position: absolute;
  opacity: 0.1;
  filter: grayscale(1) brightness(1.8);
  animation-name: float-drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes float-drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(14px, -20px) rotate(10deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .float-icon {
    animation: none;
  }
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  border: 1px solid var(--color-terminal-border);
  background: var(--color-terminal-accent-dim);
  padding: 7px 14px;
  border-radius: 100px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-terminal-muted);
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-terminal-accent);
  box-shadow: 0 0 10px var(--color-terminal-accent);
  flex-shrink: 0;
}

.name {
  font-size: clamp(48px, 7.4vw, 96px);
  font-weight: 900;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 22px 0 18px;
}

.name .first {
  color: var(--color-terminal-accent);
  display: block;
}

.name .last {
  display: block;
}

.role {
  color: var(--color-terminal-muted);
  font-size: 14px;
  margin-bottom: 14px;
}

.bio {
  color: var(--color-terminal-muted);
  font-size: 16px;
  line-height: 1.65;
  max-width: 44ch;
}

.bio p + p {
  margin-top: 6px;
}

.ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-terminal-accent);
  color: #06170e;
}

.btn-primary:hover {
  background: #7dffc0;
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--color-terminal-bg);
  border-color: var(--color-terminal-border);
  color: var(--color-terminal-fg);
}

.btn-secondary:hover {
  border-color: var(--color-terminal-accent);
  color: var(--color-terminal-accent);
  transform: translateY(-2px);
}

.hero-photo {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--color-terminal-border);
  background: rgba(255, 255, 255, 0.02);
  aspect-ratio: 4 / 5;
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.05);
}

.scan {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 255, 136, 0.03) 3px, rgba(0, 255, 136, 0.03) 6px);
  pointer-events: none;
  mix-blend-mode: screen;
}

.badge {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-terminal-border);
  border-radius: 13px;
  padding: 11px 14px;
}

.badge .label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-terminal-muted);
}

.mono-accent {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-terminal-accent);
}

/* ── section heading ── */
.shead {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  margin-bottom: 38px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-terminal-border);
}

.kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-terminal-accent);
  margin-bottom: 8px;
}

.shead h2 {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
}

/* ── bento cards (work) ── */
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 18px;
  padding: 24px;
  transition: 0.25s;
}

.card:hover {
  border-color: rgba(0, 255, 136, 0.28);
  background: var(--color-terminal-accent-dim);
  transform: translateY(-3px);
}

.card .ico {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  background: var(--color-terminal-accent-dim);
  border: 1px solid rgba(0, 255, 136, 0.2);
  color: var(--color-terminal-accent);
  margin-bottom: 16px;
}

.card h3 {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 7px;
}

.card p {
  color: var(--color-terminal-muted);
  font-size: 14px;
  line-height: 1.6;
}

.c2 {
  grid-column: span 2;
}

.c4 {
  grid-column: span 4;
}

.stat-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.big {
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
}

.big .accent {
  color: var(--color-terminal-accent);
}

.stat-card p {
  margin-top: 10px;
}

/* ── about ── */
.about-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 14px;
  align-items: stretch;
}

.abody {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 18px;
  padding: 34px;
}

.abody :deep(p) {
  color: var(--color-terminal-muted);
  font-size: 15.5px;
  line-height: 1.75;
}

.abody :deep(p + p) {
  margin-top: 16px;
}

.abody :deep(strong) {
  color: var(--color-terminal-fg);
  font-weight: 700;
}

.facts {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 18px;
  padding: 24px;
}

.frow {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-terminal-border);
  color: var(--color-terminal-accent);
}

.frow:first-child {
  padding-top: 0;
}

.frow:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.frow .v {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-terminal-fg);
}

.frow .k {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-terminal-muted);
  margin-left: auto;
}

/* ── stack ── */
.stackgrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 10px;
  margin-top: 20px;
}

.chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 16px 8px;
  border: 1px solid var(--color-terminal-border);
  border-radius: 13px;
  background: var(--color-terminal-bg);
  transition: 0.22s;
}

.chip:hover {
  border-color: rgba(0, 255, 136, 0.3);
  transform: translateY(-3px);
}

.chip img {
  width: 29px;
  height: 29px;
  filter: grayscale(1) brightness(1.6);
  transition: 0.22s;
}

.chip:hover img {
  filter: none;
}

.chip span {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--color-terminal-muted);
  letter-spacing: 0.02em;
}

/* ── projects ── */
.proj-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.pcard {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 18px;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: 0.25s;
}

.pcard:hover {
  border-color: rgba(0, 255, 136, 0.28);
  background: var(--color-terminal-accent-dim);
  transform: translateY(-3px);
}

.ptop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.pnum {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-terminal-accent);
  letter-spacing: 0.14em;
}

.plinks {
  display: flex;
  gap: 8px;
}

.plinks a {
  width: 33px;
  height: 33px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  border: 1px solid var(--color-terminal-border);
  color: var(--color-terminal-muted);
  background: var(--color-terminal-bg);
  transition: 0.2s;
}

.plinks a:hover {
  border-color: var(--color-terminal-accent);
  color: var(--color-terminal-accent);
}

.pcard h3 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.pcard p {
  color: var(--color-terminal-muted);
  font-size: 14px;
  line-height: 1.6;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--color-terminal-muted);
  border: 1px solid var(--color-terminal-border);
  padding: 4px 10px;
  border-radius: 7px;
}

/* ── path (timeline) ── */
.tl {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.trow {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 34px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 18px;
  padding: 28px;
  transition: 0.25s;
}

.trow:hover {
  border-color: rgba(0, 255, 136, 0.24);
  background: var(--color-terminal-accent-dim);
}

.torg {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
}

.torg .ico {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: var(--color-terminal-accent-dim);
  border: 1px solid rgba(0, 255, 136, 0.2);
  color: var(--color-terminal-accent);
  flex-shrink: 0;
}

.tper {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--color-terminal-accent);
  margin-top: 12px;
  letter-spacing: 0.06em;
}

.trow h3 {
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 14px;
}

.trow ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.trow li {
  display: flex;
  gap: 11px;
  color: var(--color-terminal-muted);
  font-size: 14.5px;
  line-height: 1.6;
}

.trow li svg {
  color: var(--color-terminal-accent);
  flex-shrink: 0;
  margin-top: 3px;
}

/* ── contact ── */
.contact-card {
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--color-terminal-border);
  border-radius: 26px;
  padding: 56px 44px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-card .kicker {
  display: block;
}

.contact-card h2 {
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 14px 0 12px;
}

.contact-card > p {
  color: var(--color-terminal-muted);
  font-size: 16px;
  line-height: 1.65;
  max-width: 46ch;
  margin: 0 auto;
}

.clist {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
}

.clink {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 13px 20px;
  border: 1px solid var(--color-terminal-border);
  border-radius: 12px;
  background: var(--color-terminal-bg);
  color: var(--color-terminal-fg);
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s;
}

.clink svg {
  color: var(--color-terminal-accent);
}

.clink:hover {
  border-color: var(--color-terminal-accent);
  color: var(--color-terminal-accent);
  transform: translateY(-2px);
}

/* ── responsive ── */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .bento,
  .proj-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .c4 {
    grid-column: span 2;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .trow {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 72px 20px;
  }

  .hero-wrap .page {
    padding-top: 56px;
  }

  .bento,
  .proj-grid {
    grid-template-columns: 1fr;
  }

  .c2,
  .c4 {
    grid-column: span 1;
  }

  .contact-card {
    padding: 40px 22px;
  }
}
</style>
