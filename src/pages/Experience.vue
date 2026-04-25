<template>
  <section class="page">
    <header
      class="page-heading"
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }"
    >
      <div class="kicker">$ cat ./experience.md</div>
      <h2>{{ $t('experience.title') }}</h2>
    </header>

    <div class="exp-list">
      <!-- Work -->
      <article
        class="exp-item"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 120 } }"
      >
        <div class="exp-meta">
          <div class="exp-period">{{ $t('experience.workPeriod') }}</div>
          <div class="exp-org">{{ $t('experience.company') }}</div>
        </div>
        <div class="exp-body">
          <h3 class="exp-role">{{ $t('experience.jobTitle') }}</h3>
          <ul class="exp-points">
            <li>{{ $t('experience.jobDescription1') }}</li>
            <li>{{ $t('experience.jobDescription2') }}</li>
            <li>{{ $t('experience.jobDescription3') }}</li>
            <li>{{ $t('experience.jobDescription4') }}</li>
          </ul>
        </div>
      </article>

      <!-- Education -->
      <article
        class="exp-item"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 240 } }"
      >
        <div class="exp-meta">
          <div class="exp-period">{{ $t('experience.educationPeriod') }}</div>
          <div class="exp-org">{{ $t('experience.educationInstitution') }}</div>
        </div>
        <div class="exp-body">
          <h3 class="exp-role">{{ $t('experience.educationTitle') }}</h3>
          <ul class="exp-points">
            <li>{{ $t('experience.educationPoint1') }}</li>
            <li>{{ $t('experience.educationPoint2') }}</li>
            <li>{{ $t('experience.educationPoint3') }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// Presentational; all copy lives in locales.
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
