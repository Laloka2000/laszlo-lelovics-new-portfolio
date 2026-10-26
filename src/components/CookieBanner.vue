<template>
  <Transition name="cc">
    <section v-if="isOpen" class="cc" role="dialog" aria-modal="false" :aria-label="$t('cookies.dialogLabel')"
      @keydown.esc="back">
      <Transition name="cc-view" mode="out-in">
        <!-- base view -->
        <div v-if="view === 'base'" key="base" class="cc-view">
          <span class="cc-kicker">$ cat ./cookies.txt</span>
          <h2 class="cc-title">{{ $t('cookies.title') }}<span class="cursor-blink">_</span></h2>
          <p class="cc-body">{{ $t('cookies.body') }}</p>

          <div class="cc-actions">
            <button type="button" class="cc-btn cc-btn-line" :aria-label="$t('cookies.rejectAria')" @click="reject">
              ./reject.sh
            </button>
            <button type="button" class="cc-btn cc-btn-solid" :aria-label="$t('cookies.acceptAria')" @click="accept">
              ./accept.sh
            </button>
          </div>

          <button type="button" class="cc-more" @click="toSettings">
            <span class="sigil">$ </span>{{ $t('cookies.settings') }}
          </button>
        </div>

        <!-- settings view -->
        <div v-else key="settings" class="cc-view">
          <span class="cc-kicker">$ ./cookies --configure</span>
          <h2 class="cc-title">{{ $t('cookies.settingsTitle') }}<span class="cursor-blink">_</span></h2>

          <div class="cc-rows">
            <label class="cc-opt locked" for="cc-necessary">
              <input id="cc-necessary" type="checkbox" checked disabled>
              <span class="cc-box" aria-hidden="true">[✓]</span>
              <span class="cc-opt-name">{{ $t('cookies.necessary.title') }}</span>
              <span class="cc-opt-tag">{{ $t('cookies.necessary.badge') }}</span>
              <span class="cc-opt-desc">{{ $t('cookies.necessary.desc') }}</span>
            </label>

            <label class="cc-opt" for="cc-analytics">
              <input id="cc-analytics" ref="analyticsInput" v-model="analyticsChecked" type="checkbox">
              <span class="cc-box" aria-hidden="true">{{ analyticsChecked ? '[✓]' : '[ ]' }}</span>
              <span class="cc-opt-name">{{ $t('cookies.analytics.title') }}</span>
              <span class="cc-opt-tag">{{ $t('cookies.analytics.badge') }}</span>
              <span class="cc-opt-desc">{{ $t('cookies.analytics.desc') }}</span>
            </label>
          </div>

          <div class="cc-actions">
            <button type="button" class="cc-btn cc-btn-line" :aria-label="$t('cookies.rejectAllAria')" @click="reject">
              ./reject-all.sh
            </button>
            <button type="button" class="cc-btn cc-btn-solid" :aria-label="$t('cookies.saveAria')"
              @click="save(analyticsChecked)">
              ./save.sh
            </button>
          </div>

          <button type="button" class="cc-more" @click="back">
            <span class="sigil">← </span>{{ $t('cookies.back') }}
          </button>
        </div>
      </Transition>
    </section>
  </Transition>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useConsent } from '../composables/useConsent.js'

const { consent, isOpen, view, accept, reject, save, close, openSettings, showBase } = useConsent()

const analyticsChecked = ref(false)
const analyticsInput = ref(null)

// every time the settings view opens, start from the stored choice and focus the toggle
watch(
  () => isOpen.value && view.value === 'settings',
  async (inSettings) => {
    if (!inSettings) return
    analyticsChecked.value = !!consent.value?.analytics
    await nextTick()
    analyticsInput.value?.focus({ preventScroll: true })
  },
  { immediate: true }
)

function toSettings() {
  openSettings()
}

// Esc / "back" never counts as consent: it returns to the first view, or closes if a choice already exists
function back() {
  if (view.value !== 'settings') return
  if (consent.value) close()
  else showBase()
}
</script>

<style scoped>
.cc {
  position: fixed;
  z-index: 40;
  left: 24px;
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  width: calc(100% - 48px);
  max-width: 440px;
  padding: 22px 22px 18px;
  border: 1px solid var(--color-terminal-border);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.6),
    0 0 32px rgba(0, 255, 136, 0.05);
}

/* faint scanlines, same as the boot screen */
.cc::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.015) 2px, rgba(0, 255, 136, 0.015) 4px);
}

.cc-view {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cc-kicker {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--color-terminal-accent);
}

.cc-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: var(--color-terminal-fg);
}

.cc-title .cursor-blink {
  color: var(--color-terminal-accent);
}

.cc-body {
  margin: 0;
  font-size: 12.5px;
  line-height: 1.65;
  color: var(--color-terminal-muted);
}

/* both buttons share one size, so rejecting is as easy as accepting */
.cc-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 2px;
}

.cc-btn {
  padding: 10px 14px;
  border: 1px solid var(--color-terminal-accent);
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.cc-btn-solid {
  background: var(--color-terminal-accent);
  color: #000;
}

.cc-btn-solid:hover {
  background: #7dffc0;
  border-color: #7dffc0;
}

.cc-btn-line {
  background: transparent;
  color: var(--color-terminal-accent);
}

.cc-btn-line:hover {
  background: var(--color-terminal-accent-dim);
}

.cc-more {
  align-self: flex-start;
  padding: 2px 0;
  background: none;
  border: 0;
  font: inherit;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--color-terminal-muted);
  cursor: pointer;
  transition: color 0.2s ease;
}

.cc-more:hover {
  color: var(--color-terminal-accent);
}

.sigil {
  color: var(--color-terminal-accent);
}

/* ── settings rows ── */
.cc-rows {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-terminal-border);
}

.cc-opt {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: 4px 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-terminal-border);
  font-size: 13px;
  cursor: pointer;
}

.cc-opt input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.cc-opt:has(input:focus-visible) {
  outline: 1px solid var(--color-terminal-accent);
  outline-offset: 2px;
  border-radius: 4px;
}

.cc-box {
  font-weight: 700;
  white-space: pre;
  color: var(--color-terminal-accent);
}

.cc-opt-name {
  font-weight: 500;
  color: var(--color-terminal-fg);
  transition: color 0.2s ease;
}

.cc-opt:not(.locked):hover .cc-opt-name {
  color: var(--color-terminal-accent);
}

.cc-opt-tag {
  font-size: 11px;
  text-align: right;
  color: var(--color-terminal-muted);
}

.cc-opt-desc {
  grid-column: 2 / 4;
  font-size: 11.5px;
  line-height: 1.55;
  color: var(--color-terminal-muted);
}

.cc-opt.locked {
  opacity: 0.55;
  cursor: not-allowed;
}

/* ── transitions ── */
.cc-enter-active,
.cc-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.cc-enter-from,
.cc-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.cc-view-enter-active,
.cc-view-leave-active {
  transition: opacity 0.15s ease;
}

.cc-view-enter-from,
.cc-view-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .cc {
    left: 16px;
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    width: calc(100% - 32px);
    padding: 18px 16px 14px;
  }

  .cc-actions {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cc-enter-from,
  .cc-leave-to {
    transform: none;
  }
}
</style>
