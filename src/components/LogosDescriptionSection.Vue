<script setup>
    defineProps(['content'])
</script>

<template>
    <div v-for="item in content" class="experience">
        <img class="symbol" :src="item.img" :alt="item.alt">
        <div>
            <h3>{{ item.name }}</h3>
            <p v-for="desc in item.description">{{ desc }}</p>
        </div>
    </div>
</template>

<style>
    @import '@/assets/styles/components/sections.css';
</style>