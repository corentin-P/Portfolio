<script setup lang="ts">
    import langOption from '@/components/langOption.vue'
    import NavBar from '@/components/NavBar.vue'
</script>

<template>
    <body>
        <div class="main">
        <NavBar/>
        <div class="content">
            <div class="sum-up">
                <img src="/images/moi.jpeg" alt="Photo de Corentin Piquerez">
                <div class="text">
                    <p v-for="text in $tm('about.sum-up.text')">{{ text }}</p> 
                    <a class="button-arrow button-right" :href="`${ $t('about.sum-up.projects.url') }`">{{ $t("about.sum-up.projects.text") }}</a>
                </div>
            </div>
            <div class="text" v-for="section in $tm('about.resume.sections')">
                <h1 class="center">{{ section.title }}</h1>
                <p>{{ section.text }}</p>
            </div>
            <div class="center">
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
