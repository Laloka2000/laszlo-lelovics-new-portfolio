import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useCursorGlow() {
  const glowRef = ref(null)

  let rafId = null
  let tx = 0
  let ty = 0

  function applyBaseStyles(el) {
    Object.assign(el.style, {
      position:     'fixed',
      top:          '0',
      left:         '0',
      width:        '500px',
      height:       '500px',
      borderRadius: '50%',
      background:   'radial-gradient(circle, rgba(0,255,136,0.22) 0%, rgba(0,255,136,0.07) 45%, transparent 70%)',
      pointerEvents:'none',
      zIndex:       '9999',
      opacity:      '0',
      transition:   'opacity 0.25s ease',
      willChange:   'transform',
    })
  }

  const hide = () => {
    if (glowRef.value) glowRef.value.style.opacity ='0'
  }

  const onMove = (e) => {
    tx = e.clientX
    ty = e.clientY
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      const el = glowRef.value
      if (el) {
        el.style.opacity   = '1'
        el.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
      }
      rafId = null
    })
  }

  const onVisiblityChange = () => {
    if (document.hidden) hide()
  }

  const onLeave = () => {
    if (glowRef.value) glowRef.value.style.opacity = '0'
  }

  const onTouch = () => {
    if (glowRef.value) glowRef.value.style.display = 'none'
  }

  onMounted(() => {
    if (!glowRef.value) return
    applyBaseStyles(glowRef.value)

    if (window.matchMedia('(hover: none)').matches) {
      glowRef.value.style.display = 'none'
      return
    }

    window.addEventListener('mousemove',  onMove,  { passive: true })
    window.addEventListener('mouseleave',  hide)
    window.addEventListener('blur',  hide)
    window.addEventListener('touchstart', onTouch, { once: true, passive: true })
    document.addEventListener('visibilitychange', onVisiblityChange)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove',  onMove)
    window.removeEventListener('mouseleave',  hide)
    window.removeEventListener('blur',  hide)
    document.removeEventListener('visibilitychange', onVisiblityChange)
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { glowRef }
}