<template>
  <section class="page">
    <div class="home-grid">
      <!-- Left column: hero text -->
      <div class="home-hero">
        <!-- $ whoami -->
        <div class="prompt" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 0 } }">
          <span class="sigil">$</span> whoami
        </div>

        <!-- Name -->
        <h1 class="name" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
          <span class="first">{{ $t('home.firstName') }}</span>
          <span class="last">{{ $t('home.lastName') }}</span>
        </h1>

        <!-- // role: Software Developer -->
        <div class="role" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
          <span class="sigil">// </span>{{ $t('home.roleLabel') }}:
          {{ $t('home.role') }}
        </div>

        <!-- Bio -->
        <div class="bio" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
          <p>{{ $t('home.bioLine1') }}</p>
          <p>{{ $t('home.bioLine2') }}</p>
        </div>

        <!-- CTAs -->
        <div class="ctas" v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
          <RouterLink to="/projects" class="btn btn-primary">
            ./view-projects.sh
          </RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">
            ./contact.sh
          </RouterLink>
        </div>
      </div>

      <div class="home-photo-wrap" v-motion :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
        <div class="photo-frame">
          <img :src="photo" :alt="$t('home.profileAlt')" />
          <div class="photo-scanlines" aria-hidden="true" />
        </div>
        <span class="bracket bracket-tl" aria-hidden="true" />
        <span class="bracket bracket-br" aria-hidden="true" />
      </div>
    </div>

    <!-- Tech stack -->
    <div class="tech" v-motion :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
      <div class="tech-label">
        <span class="sigil">$</span> ls ./tech-stack/
      </div>
      <div class="tags">
        <span v-for="t in techStack" :key="t" class="tag">{{ t }}/</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import photo from '../assets/images/photo.jpg'

const techStack = [
  'Vue.js',
  'React',
  'Tailwind CSS',
  'JavaScript',
  'Node.js',
  'PHP',
  'WordPress',
  'Git',
  'MySQL',
  'Python'
]
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 48px 96px;
}

/* Hero layout — side-by-side on md+, stacked on mobile */
.home-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 900px) {
  .home-grid {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 80px;
  }
}

.home-hero {
  max-width: 560px;
}

/* $ prompt */
.prompt {
  color: var(--color-terminal-muted);
  font-size: 13px;
  margin-bottom: 16px;
}

.sigil {
  color: var(--color-terminal-accent);
}

/* Name */
.name {
  font-size: clamp(48px, 7vw, 80px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--color-terminal-fg);
  margin-bottom: 24px;
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
  margin-bottom: 8px;
}

.bio {
  color: var(--color-terminal-muted);
  font-size: 13px;
  line-height: 1.7;
  max-width: 520px;
  padding-left: 24px;
  border-left: 2px solid var(--color-terminal-border);
  margin-bottom: 40px;
}

/* CTAs */
.ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 64px;
}

.btn {
  padding: 12px 28px;
  font-size: 13px;
  letter-spacing: 0.04em;
  border: 1px solid var(--color-terminal-accent);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;
  display: inline-block;
  text-align: center;
}

.btn:active {
  transform: translateY(1px);
}

.btn-primary {
  background: var(--color-terminal-accent);
  color: #000;
  font-weight: 700;
}

.btn-primary:hover {
  box-shadow: 0 0 24px rgba(0, 255, 136, 0.35);
}

.btn-secondary {
  background: transparent;
  color: var(--color-terminal-accent);
  font-weight: 500;
}

.btn-secondary:hover {
  background: var(--color-terminal-accent-dim);
}

/* Photo — 260×260 square with corner brackets */
.home-photo-wrap {
  position: relative;
  width: 260px;
  height: 260px;
  flex-shrink: 0;
  justify-self: center;
}

.photo-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-terminal-border);
  overflow: hidden;
  background: #000;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.85) contrast(1.05);
}

.photo-scanlines {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 136, 0.05) 2px,
      rgba(0, 255, 136, 0.05) 4px);
  pointer-events: none;
  mix-blend-mode: screen;
}

.bracket {
  position: absolute;
  width: 24px;
  height: 24px;
}

.bracket-tl {
  top: -8px;
  left: -8px;
  border-top: 1px solid var(--color-terminal-accent);
  border-left: 1px solid var(--color-terminal-accent);
}

.bracket-br {
  bottom: -8px;
  right: -8px;
  border-bottom: 1px solid var(--color-terminal-accent);
  border-right: 1px solid var(--color-terminal-accent);
}

/* Tech stack */
.tech {
  margin-top: 16px;
  max-width: 900px;
}

.tech-label {
  color: var(--color-terminal-muted);
  font-size: 12px;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 5px 14px;
  border: 1px solid var(--color-terminal-border);
  color: var(--color-terminal-muted);
  font-size: 12px;
  letter-spacing: 0.04em;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
  cursor: default;
}

.tag:hover {
  color: var(--color-terminal-accent);
  border-color: var(--color-terminal-accent);
  background: var(--color-terminal-accent-dim);
}

@media (max-width: 899px) {
  .page {
    padding: 48px 24px 72px;
  }

  .home-photo-wrap {
    order: -1;
    /* photo above text on mobile */
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 48px;
  }

  .bio {
    padding-left: 16px;
  }

  .ctas {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }
}
</style>
