<script setup lang="ts">
    import Sections from '@/components/Sections.vue'
</script>

<template>
  <body>
    <div class="content">
      <Sections :sections="$tm('ongoing-projects.sections')"/>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>
