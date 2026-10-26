import { ref, readonly } from 'vue'
import { loadAnalytics, disableAnalytics } from '../lib/analytics.js'

const STORAGE_KEY = 'cookieConsent'
// bump this when the cookie policy changes, so everyone is asked again
const CONSENT_VERSION = 1
const MAX_AGE = 365 * 24 * 60 * 60 * 1000

function readStored() {
  try {
    const c = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!c || c.v !== CONSENT_VERSION || typeof c.analytics !== 'boolean') return null
    if (Date.now() - c.ts > MAX_AGE) return null
    return c
  } catch {
    return null
  }
}

// module-level state: shared by the banner and the footer button
const consent = ref(readStored())
const isOpen = ref(!consent.value)
const view = ref('base') // 'base' | 'settings'

let returnFocusEl = null

if (consent.value?.analytics) loadAnalytics()

function save(analytics) {
  const value = { v: CONSENT_VERSION, analytics, ts: Date.now() }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
  }
  consent.value = value

  if (analytics) loadAnalytics()
  else disableAnalytics()

  close()
}

function close() {
  isOpen.value = false
  if (returnFocusEl && document.contains(returnFocusEl)) returnFocusEl.focus()
  returnFocusEl = null
}

function openSettings() {
  returnFocusEl = document.activeElement
  view.value = 'settings'
  isOpen.value = true
}

function showBase() {
  view.value = 'base'
}

export function useConsent() {
  return {
    consent: readonly(consent),
    isOpen: readonly(isOpen),
    view: readonly(view),
    accept: () => save(true),
    reject: () => save(false),
    save,
    close,
    openSettings,
    showBase,
  }
}
