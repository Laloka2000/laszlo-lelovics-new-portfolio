<template>
    <main>
        <section>
            <div class="hero-text">
                <h1>Welcome to My Portfolio</h1>
                <p class="subtitle">
                    Aspiring Full-Stack Developer
                </p>
                <p class="about">
                    Hello, my name is Laszlo Lelovics, I am a software developer and this is my portfolio page.
                    Here you can find information about my projects, experience, and how to contact me.
                </p>
                <div class="cta">
                    <router-link to="/projects" class="btn btn--primary">View Projects</router-link>
                    <router-link to="/contact" class="btn btn--secondary">Contact Me</router-link>
                </div>

                <ul class="skills" aria-label="Technologies I use">
                    <li v-for="skill in skills" :key="skill">{{ skill }}</li>
                </ul>

                <nav class="socials" aria-label="Social Media Links">
                    <a 
                        v-for="s in socials"
                        :key="s.label"
                        :href="s.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="social-link"
                        :aria-label="s.label"
                        v-html="s.icon"
                    />
                </nav>
            </div>
        </section>
        <section class="highlights" aria-label="Highlights">
            <div class="start">
                <div class="start-num">{{ stats.years }}</div>
                <div class="start-label">Years of Experience</div>
            </div>
            <div class="start">
                <div class="start-num">{{ stats.projects }}</div>
                <div class="start-label">Projects Completed</div>
            </div>
        </section>
        
    </main>
</template>

<script setup>

</script>

<style>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}


section {
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #333
}
</style>