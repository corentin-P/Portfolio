<script setup lang="ts">
  import { ref } from 'vue'
  defineProps(['items'])

  const isModalOpen = ref<boolean>(true)
  var currentItem = {}

  const closeModal = () => {
    isModalOpen.value = false
  }
  const openModal = (item: {}) => {
    isModalOpen.value = true
    currentItem = item
  }

</script>

<template>
  <div class="cards">
    <div v-for="item in items" class="card" v-on:click="openModal(item)" :id="item.id">
      <div class="card-content">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2>{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <div class="tags">
          <span class="tag" v-for="tag in item.tags">
          <div v-if="tag.includes('::')">
            <span class="tag-left">{{ tag.split('::')[0] }}</span>
            <span class="tag-right">{{ tag.split('::')[1] }}</span>
          </div>
          <div v-else>
            {{ tag }}
          </div>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isModalOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="currentItem.img" :alt="currentItem.alt">
      <hr>
      <h1>
        {{ currentItem.title }}
        <a :href="currentItem.github" target="_blank" class="git-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
          </svg>
        </a>
      </h1>
      <hr>
      <p>{{ currentItem.description }}</p>
      <div class="tags">
        <span class="tag" v-for="tag in currentItem.tags">
          <div v-if="tag.includes('::')">
            <span class="tag-left">{{ tag.split('::')[0] }}</span>
            <span class="tag-right">{{ tag.split('::')[1] }}</span>
          </div>
          <div v-else>
            {{ tag }}
          </div>
          </span>
      </div>
    </div>
  </div>
</template>

<style>
  @import '@/assets/styles/components/gallery_section.css';
</style>