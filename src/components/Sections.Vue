<script setup lang="ts">
    import ExperienceSection from '@/components/ExperienceSection.vue'
    import LogosDescriptionsSection from '@/components/LogosDescriptionSection.vue'
    import ProjectSection from '@/components/ProjectSection.vue'
    defineProps(['sections'])
</script>

<template>
    <div v-for="(section, name) in sections" :id="name">
        <h1 v-if="!section.titleInBox" class="center green">{{ section.title }}</h1>
        <div class="text">
            <h1 v-if="section.titleInBox" class="center">{{ section.title }}</h1>
            <p v-if="section.sumup" v-for="text in section.sumup" class="center">{{ text }}</p>
            <div v-if="section.type == 'experience'" v-for="experience in section.content">
                <experience-section :experience="experience"/>
            </div>
            <div v-if="section.type == 'logos-list'" class="logos-list">
                <img v-for="logo in section.logos" class="logo" :src="logo.img" :alt="logo.alt">
            </div>
            <div v-if="section.type == 'logos-description'" class="logos-list">
                <logos-descriptions-section :content="section.content"/>
            </div>
            <div v-if="section.type == 'projects'">
                <project-section :projects="section.content"/>
            </div>
        </div>
    </div>
</template>

<style>
    @import '@/assets/styles/components/sections.css';
</style>