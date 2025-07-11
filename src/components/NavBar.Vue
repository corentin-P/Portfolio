<template>
    <div class="navbar">
        <div class="home">
            <a :href="`${$t('main.navbar.title.url')}`">{{ $t("main.navbar.title.text") }}</a>
        </div>
        <div class="links">
            <a v-for="link in $tm('main.navbar.links')" :href="link.url">{{ link.text }}</a>
            <!--<a href=".">{{ $t("main.navbar.page2") }}</a>
            <a href="about">{{ $t("main.navbar.page3") }}</a>-->
        </div>
    </div>
</template>

<style lang="css">
    @import '../assets/styles/components/navbar.css';
</style>
