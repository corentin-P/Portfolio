<script setup lang="ts">
import langOption from '@/components/LangOption.vue'
import NavBar from '@/components/NavBar.vue'
import Sections from '@/components/Sections.vue'
import { useI18n } from 'vue-i18n'

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
    <div class="main">
      <NavBar/>
      <div class="content">
        <div class="categories">
          <a v-for="(section, categorieName) in $tm('projects.sections') as Section" :href="'#' + categorieName">
            {{ section.title }}
          </a>
        </div>
        <Sections :sections="$tm('projects.sections')"/>
      </div>
      <langOption/>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/pages/projects.css';
</style>
