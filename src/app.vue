<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue'
    import Contact from '@/components/Contact.vue'
    import langOption from '@/components/LangOption.vue'
</script>

<template>
  <main>
    <div class="main">
      <NavBar v-if="$route.path != '/'"/>
      <RouterView/>
    </div>
  </main>
  <footer>
    <Contact/>
    <langOption/>
  </footer>
</template>

<style lang="css">
  @import '@/assets/styles/main.css';
</style>