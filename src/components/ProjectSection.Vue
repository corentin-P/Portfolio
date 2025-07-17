<script setup lang="ts">
    defineProps(['projects'])
</script>

<template>
    <div v-for="project in projects" class="project">
        <h2 class="center">{{ project.title }}</h2>
        <p v-for="desc in project.description">{{ desc }}</p>

        <div class="links">
            <a v-if="project.links" v-for="link in project.links" :href="link.link" target="_blank">
                {{ link.text }}
            </a>
        </div>

        <div v-if="project.imgs" class="project-images">
            <a v-for="img in project.imgs" :href="img.link" target="_blank">
                <img class="project-image" :src="img.file" :alt="img.alt">
            </a>
        </div>
    </div>
</template>

<style>
    @import '@/assets/styles/components/sections.css';
</style>