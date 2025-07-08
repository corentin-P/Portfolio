<template>
    <div class="navbar">
        <div class="home">
            <a href=".">{{ $t("main.navbar.title") }}</a>
        </div>
        <div class="links">
            <a href="projects">{{ $t("main.navbar.page1") }}</a>
            <a href=".">{{ $t("main.navbar.page2") }}</a>
            <a href="about">{{ $t("main.navbar.page3") }}</a>
        </div>
    </div>
</template>

<style lang="css">
    @import '../assets/styles/components/navbar.css';
</style>