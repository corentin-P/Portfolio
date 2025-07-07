<template>
    <div class="lang-switcher">
        <button
        v-for="locale in $i18n.availableLocales"
        :key="locale"
        :class="['lang-button', { active: $i18n.locale === locale }]"
        @click="$i18n.locale = locale">
            {{ locale.toUpperCase() }}
        </button>
    </div>
</template>

<style lang="css">
    @import '../assets/styles/components/langOption.css';
</style>