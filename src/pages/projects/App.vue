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
        <div class="categories">
          <a v-for="(section, categorieName) in $tm('projects.sections')" :href="'#' + categorieName">
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
