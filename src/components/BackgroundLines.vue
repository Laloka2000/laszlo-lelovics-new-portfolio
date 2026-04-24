<template>
    <div class="bg-lines pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div v-for="i in 12" :key="i" class="absolute inset-x-0 h-px bg-[rgba(0,255,136,0.03)]" :style="{ top: `${((i - 1) / 12) * 100}`}"/>
    </div>
    <div
        class="scanlines pointer-events-none fixed inset-0 z-[15]"
        aria-hidden="true"
    />
</template>

<script setup>

</script>

<style scoped>
.scanlines {
    background-image: repeating-linear-gradient(
        0deg, 
        transparent,
        transparent 2px,
        rgba(0, 255, 136, 0.03) 2px,
        rgba(0, 255, 136, 0.03) 4px
    );
}
</style>