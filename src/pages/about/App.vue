<script setup lang="ts">
    import langOption from '@/components/LangOption.vue'
    import NavBar from '@/components/NavBar.vue'
    import Sections from '@/components/Sections.vue'
    import Contact from '@/components/Contact.vue'

</script>

<template>
    <body>
        <div class="main">
        <NavBar/>
        <Contact/>
        <div class="content">
            <div class="sum-up">
                <img :src="$t('about.sumup.profile_image')" :alt="$t('about.sumup.profile_image_desc')">
                <div class="text">
                    <p v-for="text in $tm('about.sumup.text')">{{ text }}</p> 
                    <a class="button button-arrow button-right" :href="`${ $t('about.sumup.get-resume.url') }`">{{ $t("about.sumup.get-resume.text") }}</a>
                </div>
            </div>
            <Sections :sections="$tm('about.resume.sections')"/>
            <div class="center space">
                <a class="button button-arrow" :href="`${ $t('about.resume.projects.url') }`">{{ $t("about.resume.projects.text") }}</a>
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
