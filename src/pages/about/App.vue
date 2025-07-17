<script setup lang="ts">
    import langOption from '@/components/langOption.vue'
    import NavBar from '@/components/NavBar.vue'
    import Sections from '@/components/Sections.vue'
</script>

<template>
    <body>
        <div class="main">
        <NavBar/>
        <div class="content">
            <div class="sum-up">
                <img src="/images/moi.jpeg" alt="Photo de Corentin Piquerez">
                <div class="text">
                    <p v-for="text in $tm('about.sumup.text')">{{ text }}</p> 
                    <a class="button-arrow button-right" :href="`${ $t('about.sumup.projects.url') }`">{{ $t("about.sumup.projects.text") }}</a>
                </div>
            </div>
            <Sections :sections="$tm('about.resume.sections')"/>
            <div class="center space">
                <a class="button-arrow" :href="`${ $t('about.resume.get-resume.file') }`" download>{{ $t("about.resume.get-resume.text") }}</a>
            </div>
            <!---->
        </div>
        <langOption/>
        </div>
    </body>
</template>

<style lang="css">
    @import '@/assets/styles/pages/about.css';
</style>
