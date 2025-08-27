<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to ="/experience">Experience</router-link></li>
        </ul>
    </nav>
</template>

<script setup>

</script>

<style>
.navbar {
    background-color: #2563eb;
    padding: 1rem;
}

ul{
    list-style:none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

a {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

a.router-link-active{
    text-decoration: underline;
}

</style>
    