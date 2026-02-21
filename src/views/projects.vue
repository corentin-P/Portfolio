<script setup lang="ts">
  import Sections from '@/components/Sections.vue'

interface Section {
  [index: string]: {
    type: string,
    title: string,
    content: {
    [index: string]: {}
    }
  }
}
</script>

<template>
  <body>
    <div class="content">
      <div class="categories">
        <a v-for="(section, categorieName) in $tm('projects.sections') as Section" :href="'#' + categorieName">
          {{ section.title }}
        </a>
      </div>
      <Sections :sections="$tm('projects.sections')"/>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/pages/projects.css';
</style>
