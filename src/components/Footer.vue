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
                <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" class="footer-link">
                    {{ $t(item.key) }}
                </RouterLink>
            </nav>
            <div class="footer-socials">
                <a href="https://github.com/Laloka2000" target="_blank" rel="noopener noreferrer"
                    class="social-link">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lelovics-987046274/" target="_blank"
                    rel="noopener noreferrer" class="social-link">LinkedIn ↗</a>
                <a href="mailto:lelovicslaszlo10@gmail.com" class="social-link">Email ↗</a>
            </div>
            <div class="footer-bottom">
                <span class="copy">
                    <span class="sigil">$</span> echo "© {{ year }} Lelovics László"
                </span>
                <span class="built">
                    <span class="sigil">// </span>{{ $t('footer.builtWith') }}
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const navItems = [
    { to: '/', key: 'nav.home' },
    { to: '/projects', key: 'nav.projects' },
    { to: '/experience', key: 'nav.experience' },
    { to: '/contact', key: 'nav.contact' },
]
</script>

<style scoped>
.footer {
    position: relative;
    z-index: 10;
    border-top: 1px solid var(--color-terminal-border);
    padding: 40px 48px 32px;
    margin-top: auto;
}

.footer-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 32px;
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

@media (max-width: 600px) {
    .footer {
        padding: 32px 24px 24px;
    }
    .footer-inner {
        flex-direction: column;
        gap: 28px;
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