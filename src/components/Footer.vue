<template>
    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-left">
                <span class="brand">~/laszlo<span class="cursor-blink">_</span></span>
                <span class="status" aria-hidden="true">
                    {{ $t('footer.available') }}
                </span>
            </div>
            <nav class="footer-links" :aria-label="$t('footer.navLabel')">
                <RouterLink v-for="item in navItems" :key="item.id" :to="{ path: '/', hash: '#' + item.id }"
                    class="footer-link">
                    {{ $t(item.key) }}
                </RouterLink>
            </nav>
            <div class="footer-socials">
                <a href="https://github.com/Laloka2000" target="_blank" rel="noopener noreferrer"
                    class="social-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/" target="_blank"
                    rel="noopener noreferrer" class="social-link">LinkedIn ↗</a>
                <a href="mailto:lelovicslaszlo10@gmail.com" class="social-link">Email ↗</a>
                <a href="https://beacons.ai/laszlolelovics" target="_blank" 
                    rel="noopener noreferrer" class="social-link">Beacons ↗</a>
            </div>
            <div class="footer-bottom">
                <span class="copy">
                    <span class="sigil">$</span> echo "© {{ currentYear }} Lelovics László"
                </span>
                <span class="built">
                    <span class="sigil">// </span>{{ $t('footer.builtWith') }}
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { navItems } from '../navItems.js'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
    position: relative;
    z-index: 10;
    border-top: 1px solid var(--color-terminal-border);
    padding: 40px 28px 32px;
    margin-top: auto;
}

.footer-inner {
    max-width: 1124px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
}

.footer-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.brand {
    color: var(--color-terminal-accent);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05em;
}

.status {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--color-terminal-muted);
    letter-spacing: 0.04em;
}

.dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-terminal-accent);
    box-shadow: 0 0 6px rgba(0, 255, 136, 0.7);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-link {
    font-size: 13px;
    color: var(--color-terminal-muted);
    letter-spacing: 0.04em;
    transition: color 0.2s ease;
}

.footer-link:hover {
    color: var(--color-terminal-accent);
}

.footer-socials {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.social-link {
    font-size: 13px;
    color: var(--color-terminal-muted);
    letter-spacing: 0.04em;
    transition: color 0.2s ease;
}

.social-link:hover {
    color: var(--color-terminal-accent);
}

.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-basis: 100%;
    gap: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--color-terminal-border);
    font-size: 12px;
    color: var(--color-terminal-muted);
    letter-spacing: 0.04em;
}

.sigil {
    color: var(--color-terminal-accent);
}

@media (max-width: 640px) {
    .footer {
        padding: 32px 20px 24px;
    }
    .footer-inner {
        gap: 28px 48px;
    }
    .footer-left {
        flex-basis: 100%;
    }
    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px; 
    }
}

@keyframes blink {
    0% ,100% { opacity: 1 }
    50% { opacity: 0 }
}

.cursor-blink {
    display: inline-block;
    animation: blink 1s step-end infinite;
}

</style>