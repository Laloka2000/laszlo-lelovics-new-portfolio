<template>
  <section class="page">
    <header class="page-heading" v-motion :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }">
      <div class="kicker">$ echo "{{ $t('contact.kicker') }}"</div>
      <h2>{{ $t('contact.title') }}</h2>
      <p class="subtitle">{{ $t('contact.subtitle') }}</p>
    </header>

    <div class="contact-list" v-motion :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 } }">
      <a v-for="(link, i) in links" :key="link.label" :href="link.href" :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined" class="contact-row">
        <span class="contact-label">{{ link.label }}</span>
        <span class="contact-value">
          {{ link.value }}
          <span class="arrow" aria-hidden="true">↗</span>
        </span>
      </a>
    </div>
  </section>
</template>

<script setup>
const links = [
  {
    label: 'EMAIL',
    value: 'lelovicslaszlo10@gmail.com',
    href: 'mailto:lelovicslaszlo10@gmail.com',
    external: false,
  },
  {
    label: 'GITHUB',
    value: 'github.com/Laloka2000',
    href: 'https://github.com/Laloka2000',
    external: true,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/laszlo-lelovics',
    href: 'https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/',
    external: true,
  },
]
</script>

<style scoped>
.page {
  max-width: 700px;
  margin: 0 auto;
  padding: 56px 48px 96px;
}

.page-heading {
  margin-bottom: 16px;
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
  margin-bottom: 16px;
}

.subtitle {
  color: var(--color-terminal-muted);
  font-size: 15px;
  line-height: 1.7;
}

.contact-list {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
}

.contact-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid var(--color-terminal-border);
  transition:
    padding-left 0.2s ease,
    color 0.2s ease;
}

.contact-row:hover {
  padding-left: 12px;
}

.contact-label {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--color-terminal-muted);
  text-transform: uppercase;
  flex-shrink: 0;
}

.contact-value {
  font-size: 14px;
  color: var(--color-terminal-muted);
  text-align: right;
  word-break: break-all;
  transition: color 0.2s ease;
}

.arrow {
  color: var(--color-terminal-accent);
  margin-left: 4px;
}

.contact-row:hover .contact-value {
  color: var(--color-terminal-fg);
}

@media (max-width: 640px) {
  .page {
    padding: 48px 24px 80px;
  }

  .contact-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .contact-value {
    text-align: left;
  }
}
</style>
