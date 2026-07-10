<template>
    <div class="fixed inset-0 z-50 flex flex-col justify-center overflow-hidden bg-terminal-bg px-[8vw] pointer-events-none"
        :style="{
            opacity: wiping ? 0 : 1,
            transform: wiping ? 'scale(1.02)' : 'scale(1)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
        }" role="status" aria-live="polite" :aria-label="$t('boot.ariaLabel')">
        <div class="pointer-events-none absolute inset-0"
            style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.025) 2px, rgba(0,255,136,0.025) 4px);" />

        <div class="relative mx-auto w-full max-w-[640px]">
            <div class="mb-8 flex min-h-[220px] flex-col gap-2">
                <div v-for="(line, i) in visibleLines" :key="i" class="flex items-baseline gap-3"
                    style="font-size: 13px;">
                    <span v-if="line.tag"
                        style="min-width: 56px; flex-shrink: 0; font-size: 12px; font-weight: 700; color: var(--color-terminal-accent);">
                        [ {{ line.tag }} ]
                    </span>
                    <span :style="{
                        color: line.tag
                            ? 'var(--color-terminal-muted)'
                            : 'rgba(232,255,232,0.28)',
                        letterSpacing: '0.01em',
                    }">
                        {{ line.text }}
                    </span>
                </div>

                <div v-if="showPrompt" class="mt-3 flex items-baseline gap-2"
                    style="font-size: 13px; color: var(--color-terminal-fg);">
                    <span style="color: var(--color-terminal-accent);">root@portfolio</span>
                    <span style="color: rgba(232,255,232,0.25);">:</span>
                    <span style="color: #6ec6ff;">~$</span>
                    <span>./launch-portfolio.sh</span>
                    <span class="cursor-blink" style="color: var(--color-terminal-accent);">▍</span>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <div class="relative flex-1" style="height: 2px; background: rgba(232,255,232,0.08);">
                    <div class="absolute left-0 top-0 h-full" :style="{
                        width: progress + '%',
                        background: 'var(--color-terminal-accent)',
                        boxShadow: '0 0 8px var(--color-terminal-accent)',
                        transition: 'width 0.05s linear',
                    }" />
                </div>
                <span style="min-width: 42px; text-align: right; font-size: 11px; color: var(--color-terminal-muted);">
                    {{ Math.floor(progress) }}%
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['done'])

const bootLines = [
    { t: 0, text: 'laszlo-os v2.5.1 — booting...', tag: null },
    { t: 220, text: 'Initializing kernel', tag: 'OK' },
    { t: 420, text: 'Mounting filesystems', tag: 'OK' },
    { t: 640, text: 'Loading system modules: vue.js, tailwind.css, node.js', tag: 'OK' },
    { t: 900, text: 'Starting network interfaces', tag: 'OK' },
    { t: 1120, text: 'Loading user profile: Laszlo full-stack developer', tag: 'OK' },
    { t: 1340, text: 'Establishing secure connection', tag: 'OK' },
    { t: 1600, text: 'Access granted', tag: 'OK' },
]

const promptTimeLine = 1850
const wipeStart = 2350
const wipeDone = 2750

const visibleLines = ref([])
const showPrompt = ref(false)
const progress = ref(0)
const wiping = ref(false)

let timers = []
let progInterval = null

onMounted(() =>
{
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    {
        emit('done')
        return
    }
    

    bootLines.forEach((line, i) =>
    {
        timers.push(setTimeout(() =>
        {
            visibleLines.value = bootLines.slice(0, i + 1)
        }, line.t))
    })

    timers.push(setTimeout(() => { showPrompt.value = true }, promptTimeLine))
    timers.push(setTimeout(() => { wiping.value = true }, wipeStart))
    timers.push(setTimeout(() => emit('done'), wipeDone))

    progInterval = setInterval(() =>
    {
        progress.value = Math.min(100, progress.value + 100 / (wipeStart / 40))
    }, 40)
    timers.push(setTimeout(() => clearInterval(progInterval), wipeStart))
})

onBeforeUnmount(() =>
{
    timers.forEach(clearTimeout)
    if (progInterval) clearInterval(progInterval)
})
</script>

<style scoped>
@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.cursor-blink {
    display: inline-block;
    animation: blink 1s step-end infinite;
}
</style>