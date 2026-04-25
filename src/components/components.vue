<script setup>

</script>

<template>
    <div class="StylechokNormShtobKaifikByl">
    <router-link :to="{ name: 'sortCPU'}">Процессоры</router-link>
    <router-link :to="{ name: 'sortGPU'}">Видеокарты</router-link>
    <router-link :to="{ name: 'sortRAM'}">Оперативная память</router-link>
    <router-link :to="{ name: 'sortPSU'}">Блоки питания</router-link>
    <router-link :to="{ name: 'sortStorage'}">Накопители</router-link>
    <router-link :to="{ name: 'sortMother'}">Материнские платы</router-link>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.StylechokNormShtobKaifikByl{
    display: flex;
    margin: 10px;
    justify-content: center;
}
a{
    text-decoration: none;
    align-content: center;
    min-width: 210px;
    min-height: 30px;
    color: rgb(255, 255, 255);
}
</style>