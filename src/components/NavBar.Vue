<script setup lang="ts">
    import { ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    
    const show = ref(false)
    type Link = {
        url: string,
        text: string
    }

</script>

<template>
    <div class="navbar">
        <div class="home">
            <a :href="$t('main.navbar.title.url')">{{ $t("main.navbar.title.text") }}</a>
        </div>
        <nav>
            <ul class="desktop-pages">
                <li v-for="link in $tm('main.navbar.links') as Link[]">
                    <a class="pages" :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </nav>
        <button class="menu_button" @click="show = !show">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    </div>
    <Transition>
        <nav v-show="show" class="mobile-pages-menu">
            <ul>
                <li v-for="link in  $tm('main.navbar.links') as Link[]" class="mobile-pages">
                    <a class="pages" :href="link.url">{{ link.text }}</a>
                </li>
            </ul>
        </nav>
    </Transition>
</template>


<style lang="css">
    @import '../assets/styles/components/navbar.css';
</style>
