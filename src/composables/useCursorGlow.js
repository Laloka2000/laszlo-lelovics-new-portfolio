import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Mouse-follow green glow. Mount once in App.vue.
 * Usage:
 *   const { glowRef, visible } = useCursorGlow()
 *   <div ref="glowRef" class="cursor-glow" :class="{ visible }" />
 */
export function useCursorGlow() {
  const glowRef = ref(null)
  const visible = ref(false)

  let rafId = null
  let tx = 0
  let ty = 0

  const onMove = (e) => {
    tx = e.clientX
    ty = e.clientY
    if (!visible.value) visible.value = true
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      if (glowRef.value) {
        glowRef.value.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
      }
      rafId = null
    })
  }

  const onLeave = () => {
    visible.value = false
  }

  // Once a touch happens, hide the glow permanently — it's a desktop affordance.
  const onTouch = () => {
    if (glowRef.value) glowRef.value.style.display = 'none'
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    window.addEventListener('touchstart', onTouch, { once: true, passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseleave', onLeave)
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { glowRef, visible }
}
