<script setup lang="ts">
  defineProps(['items'])
  function open_modal() {
    alert('touché ;)')
  }
</script>

<template>
  <div class="cards">
    <div v-for="item in items" class="card">
      <div class="card-content" v-on:click="open_modal">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2 class="center">{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <span class="tag" v-for="tag in item.tags">{{ tag }}</span>
      </div>
    </div>

  </div>
</template>

<style>
  @import '@/assets/styles/components/sections.css';
</style>