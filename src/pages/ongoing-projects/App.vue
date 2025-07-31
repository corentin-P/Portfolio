<script setup lang="ts">
import langOption from '@/components/LangOption.vue'
import NavBar from '@/components/NavBar.vue'
import Sections from '@/components/Sections.vue'
</script>

<template>
  <body>
    <div class="main">
      <NavBar/>
      <div class="content">
        <Sections :sections="$tm('ongoing-projects.sections')"/>
      </div>
      <langOption/>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>
