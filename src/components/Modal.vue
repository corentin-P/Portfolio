<script setup lang="ts">
  import { ref } from 'vue'
  defineProps(['modalContent', 'isModalOpen'])
  const emit = defineEmits(['update:isModalOpen'])

  const closeModal = () => {
    emit('update:isModalOpen', false)
  }
</script>

<template>
  <div v-if="isModalOpen" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalContent.img" :alt="modalContent.alt" class="main-img">
      <hr>
      <h1>
        {{ modalContent.title }}
        <a :href="modalContent.main_link" target="_blank" class="main-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
          </svg>
        </a>
      </h1>
      <hr>
      <p v-for="line in modalContent.description">{{ line }}</p>
      <div class="tags">
        <span class="tag" v-for="tag in modalContent.tags">
          <div v-if="tag.includes('::')">
            <span class="tag-left">{{ tag.split('::')[0] }}</span>
            <span class="tag-right">{{ tag.split('::')[1] }}</span>
          </div>
          <div v-else>
            {{ tag }}
          </div>
        </span>
      </div>
      <div class="icon-links">
        <a v-for="link in modalContent.links" :href="link.link" target="_blank">
          <img :src="link.icon" alt="link.alt" class="icon"/>
        </a>
      </div>
    </div>
  </div>

</template>

<style>
  @import '@/assets/styles/components/modal.css';
</style>