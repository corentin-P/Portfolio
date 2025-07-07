<script setup lang="ts">
import langOption from './components/langOption.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <body>
    <div class="main">
      <NavBar/>
      <langOption/>
      <h1 class="welcome">{{ $t("main.welcome") }}</h1>
    </div>
  </body>
</template>

<style lang="css">
body {
  color: white;
  background-image: url('/images/background.jpg');
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.main {
  margin: 60px;
}

.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
