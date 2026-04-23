<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isThemeLight = ref(true)

function changeThemeToLight () {
    isThemeLight.value = true
}

function changeThemeToDark () {
    isThemeLight.value = false
}
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
            <img src="/img/Search.svg" alt="кнопка поиска" class="header_right_btn">
            <img @click="changeThemeToDark" v-if="isThemeLight" src="/img/Moon.svg" alt="кнопка смены темы на темную" class="header_right_btn">
            <img @click="changeThemeToLight" v-if="!isThemeLight" src="/img/Sun.svg" alt="кнопка смены темы на светлую" class="header_right_btn">
            <RouterLink :to="{name: 'lobby'}" class="log_in_btn">Войти</RouterLink>
        </div>
    </header>

    <!--УДАЛИТЬ, ЕСЛИ НЕ НУЖНО <router-link :to="{name: 'build' }">test</router-link> -->
    <RouterView></RouterView>
</template>

<style scoped>
/* ВЕРСТКА ШАПКИ */
.header {
    padding: 10px 10px;
    height: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}

.header_menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 32px;
}

.header_right {
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
.header_right_btn {
    width: 35px;
    height: 35px;
    cursor: pointer;
}

.log_in_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--blue);
    color: var(--white);
    font-family: 'JetBrains_Mono';
    text-decoration: none;
    border-radius: 10px;
}
</style>