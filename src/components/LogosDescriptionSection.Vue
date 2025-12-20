<script setup lang="ts">
    defineProps(['content'])
</script>

<template>
    <div v-for="item in content" class="experience">
        <img class="symbol" :src="item.img" :alt="item.alt">
        <div>
            <h3>{{ item.name }}</h3>
            <div v-for="desc in item.description">
                <p v-if="typeof desc === 'string'">{{ desc }}</p>
                <a target="_blank" class="white" v-else :href="desc.link">{{ desc.text }}</a>
            </div>
        </div>
    </div>
</template>

<style>
    @import '@/assets/styles/components/sections.css';
</style>