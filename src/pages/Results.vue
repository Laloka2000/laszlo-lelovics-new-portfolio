<template>
  <section class="page">
    <header class="page-heading" v-motion :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 0 } }">
      <div class="kicker">$ cat ./results.md</div>
      <h2>{{ $t('nav.results') }}</h2>
    </header>

    <div class="placeholder" v-motion :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 150 } }">
      <p class="sigil-line">
        <span class="sigil">//</span> {{ $t('results.comingSoon') }}
      </p>
    </div>
  </section>
</template>

<script setup>
// Placeholder page — kept on /results route; not part of the terminal redesign spec.
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

.placeholder {
  padding: 24px;
  border-left: 2px solid var(--color-terminal-border);
}

.sigil-line {
  color: var(--color-terminal-muted);
  font-size: 14px;
  line-height: 1.7;
}

.sigil {
  color: var(--color-terminal-accent);
}

@media (max-width: 640px) {
  .page {
    padding: 48px 24px 80px;
  }
}
</style>
