<script setup lang="ts">
  import Sections from '@/components/Sections.vue'
</script>

<template>
  <body>
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
        <RouterLink class="button button-arrow" :to="`${ $t('about.resume.projects.url') }`">{{ $t("about.resume.projects.text") }}</RouterLink>
      </div>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/pages/about.css';
</style>
