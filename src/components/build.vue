<script setup>

</script>

<template>
    <router-link :to="{ name: 'randombuild'}">Случайный билд</router-link>
    <router-link :to="{ name: 'editbuild'}">свой билд</router-link>
    <router-link :to="{ name: 'autobuild'}">по бюджету билд</router-link>
    <router-link :to="{ name: 'buildsave'}">Сохранение/выгрузка билд</router-link>
    <router-link :to="{ name: 'payment'}">Страница оплаты</router-link>
<router-view></router-view>
</template>

<style scoped>

</style>