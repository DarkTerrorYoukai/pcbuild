<script setup>
import useComponents from '../composables/UseComponents';
import { reactive } from 'vue';
const components = useComponents()
</script>

<template>
    <div class="es" v-for="value in components.pcComponents.gpu">
    {{ value.brand }}
    {{ value.name }}
    {{ value.price }}р
<router-link :to="{name: 'build'}">
    <button @click="components.gpuAddToBuild(value.id)">Добавить в сборку</button>
</router-link>
    </div>
</template>

<style scoped>
.es{
    background-color: rgb(46, 46, 46);
    align-items: center;
    width: 750px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-self: center;
    flex-direction: column;
    color: aliceblue;
}
</style>