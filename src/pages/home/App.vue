<script setup lang="ts">
import langOption from '@/components/langOption.vue'
</script>

<template>
  <body>
    <div class="main">
      <langOption/>
      <div class="welcome">
        <h1 class="title">{{ $t("welcome.title") }}</h1>
        <p class="subtitle">{{ $t("welcome.subtitle") }}</p>
        <div class="discover">
          <a class="button-arrow" href="about">
            {{ $t("welcome.about") }}
          </a>
          <a class="button-arrow" href="projects">
            {{ $t("welcome.projects") }}
          </a>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/pages/home.css';
</style>
