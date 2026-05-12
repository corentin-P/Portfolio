<script setup lang="ts">
    defineProps(['tags'])
</script>

<template>
    <div class="tags">
        <span class="tag" v-for="tag in tags">
            <div v-if="tag.includes('::')">
                <span class="tag-left">{{ tag.split('::')[0] }}</span>
                <span class="tag-right">{{ tag.split('::')[1] }}</span>
            </div>
            <template v-else>
                {{ tag }}
            </template>
        </span>
    </div>
</template>

<style>
    @import '@/assets/styles/components/tags.css';
</style>