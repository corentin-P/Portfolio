<script setup lang="ts">
  import { ref } from 'vue'
  import Modal from '@/components/Modal.vue'
  import Tags from '@/components/Tags.vue'

  defineProps(['items'])

  const isModalOpen = ref<boolean>(false)
  var currentItem = ref<{}>({})

  const openModal = (item: {}) => {
    currentItem.value = item
    isModalOpen.value = true
  }
</script>

<template>
  <div class="cards">
    <div v-for="item in items" class="card" v-on:click="openModal(item)">
      <div class="card-content">
        <img :src="item.img" :alt="item.alt">
        <hr>
        <h2>{{ item.title }}</h2>
        <hr>
        <p>{{ item.sum_up }}</p>
        <Tags :tags="item.tags"/>
      </div>
    </div>
  </div>

  <Modal :modalContent="currentItem" v-model:isModalOpen="isModalOpen"/>

</template>

<style>
  @import '@/assets/styles/components/gallery_section.css';
</style>