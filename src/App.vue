<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
    <header class="header">
        <RouterLink :to="{name: 'main'}" class="logo"><span class="logo_first">PC</span><span class="logo_second">Builder</span></RouterLink>
        <div class="header_menu">
            <RouterLink :to="{name: 'main'}" class="header_menu_item">Главная</RouterLink>
            <RouterLink :to="{name: 'build'}" class="header_menu_item">Собрать ПК</RouterLink>
            <RouterLink :to="{name: 'madebuilds'}" class="header_menu_item">Готовые сборки</RouterLink>
            <RouterLink :to="{name: 'components'}" class="header_menu_item">Комплектующие</RouterLink>
            <RouterLink :to="{name: 'guides'}" class="header_menu_item">Гайды</RouterLink>
        </div>
        <div class="header_right">
            <img src="/img/Search.svg" alt="кнопка поиска" class="header_search_btn">
        </div>
    </header>

    <!--УДАЛИТЬ, ЕСЛИ НЕ НУЖНО <router-link :to="{name: 'build' }">test</router-link> -->
    <RouterView></RouterView>
</template>

<style scoped>
/* ВЕРСТКА ШАПКИ */
.header {
    height: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}

.header_menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 32px;
}

/* ЛОГОТИП */
.logo {
    text-decoration: none;
    font-family: 'Jura_Bold';
    font-size: 25px;
}

.logo_first{
    color: var(--blue);
}

.logo_second {
    color: var(--white);
}

/* МЕНЮ В ШАПКЕ */
.header_menu_item {
    color: var(--light-gray);
    text-decoration: none;
    font-family: 'JetBrains_Mono';
    padding: 20px 0;
}

.header_menu_item:hover {
    color: var(--blue);
    border-bottom: 1px solid var(--blue);
}

/* ПРАВАЯ ЧАСТЬ ШАПКИ */
.header_search_btn {
    width: 25px;
    height: 25px;
}
</style>