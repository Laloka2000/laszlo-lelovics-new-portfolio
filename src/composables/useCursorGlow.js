import {ref, onMounted, onBeforeUnmount} from 'vue';

export function useCursorGlow() {
    const cursorGlowRef = ref(null);
    const visibleEl = ref(false);

    let rafId = null;
    let mouseTx = 0;
    let mouseTy = 0;

    const onMouseMove = (e) => {
        mouseTx = e.clientX;
        mouseTy = e.clientY;
        if (!visibleEl.value) visibleEl.value = true;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            if (cursorGlowRef.value) {
                cursorGlowRef.value.style.transform = `translate(${mouseTx}px, ${mouseTy}px translate(-50%, -50%))`;
            }
            rafId = null;
        })
    }

    const onMouseLeave = () => {
        visibleEl.value = false;
    }

    const onMouseTouch = () => {
        if (cursorGlowRef.value) cursorGlowRef.value.style.display = 'none';
    }

    onMounted(() => {
        window.addEventListener('mousemove', onMouseMove, {passive: true});
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('touchstart', onMouseTouch, {passive: true});
    })

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseleave', onMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
    })

    return {cursorGlowRef, visibleEl}
}