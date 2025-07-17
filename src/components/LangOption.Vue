<script setup>
    import { useI18n } from 'vue-i18n'

    const { locale, availableLocales } = useI18n()

    function changeLang(lang) {
        locale.value = lang
        localStorage.setItem('lang', lang)
    }
</script>

<template>
  <div class="lang-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc"
      :class="['lang-button', { active: locale === loc }]"
      @click="changeLang(loc)"
    >
      {{ loc.toUpperCase() }}
    </button>
  </div>
</template>

<style lang="css">
    @import '../assets/styles/components/langOption.css';
</style>