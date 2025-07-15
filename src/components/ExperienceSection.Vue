<script setup lang="ts">
    defineProps(['experience'])
</script>

<template>
    <h3>{{ experience.date }} :</h3>
    <div class="experience">
        <img class="symbol" :src="`${ experience.img }`" :alt="`${ experience.img-description }`">
        <div>
            <h3 v-if="experience.title">{{ experience.title }}</h3>
            <p v-for="desc in experience.description">{{ desc }}</p>
        </div>
    </div>
</template>

<style>
    @import '@/assets/styles/components/sections.css';
</style>