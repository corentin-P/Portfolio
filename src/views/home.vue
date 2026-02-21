<template>
  <body>
    <div class="welcome">
      <h1 class="title">{{ $t("welcome.title") }}</h1>
      <p class="subtitle">{{ $t("welcome.subtitle") }}</p>
      <div class="discover">
      <RouterLink class="button button-arrow" to="/about" go>
        {{ $t("welcome.about") }}
      </RouterLink>
      <RouterLink class="button button-arrow" to="/projects" go>
        {{ $t("welcome.projects") }}
      </RouterLink>
      </div>
    </div>
  </body>
</template>

<style lang="css">
  @import '@/assets/styles/pages/home.css';
</style>
