<script setup lang="ts">
  defineProps(['items'])
  function open_modal() {
    alert('touché ;)')
  }
</script>

<template>
  <div class="cards">
    <div v-for="item in items" class="card" v-on:click="open_modal">
      <div class="card-content">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2>{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <div class="tags">
          <span class="tag" v-for="tag in item.tags">
            <template v-if="tag.includes('::')">
              <span class="tag-left">{{ tag.split('::')[0] }}</span>
              <span class="tag-right">{{ tag.split('::')[1] }}</span>
            </template>
            <template v-else>
              {{ tag }}
            </template>
            </span>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  @import '@/assets/styles/components/gallery_section.css';
</style>