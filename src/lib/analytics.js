// Google Analytics 4 — only loaded after the visitor accepts analytics cookies.
const GA_ID = 'G-TS53KENSP5'

let loaded = false

export function loadAnalytics() {
  window[`ga-disable-${GA_ID}`] = false
  if (loaded) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

export function disableAnalytics() {
  // stops an already loaded gtag.js from sending anything else
  window[`ga-disable-${GA_ID}`] = true
  deleteGaCookies()
}

function deleteGaCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  if (!names.length) return

  // GA sets its cookies on the top-level domain (e.g. .example.hu), so try every parent domain
  const parts = location.hostname.split('.')
  const domains = ['']
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push('.' + parts.slice(i).join('.'))
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/` + (domain ? `; domain=${domain}` : '')
    }
  }
}
