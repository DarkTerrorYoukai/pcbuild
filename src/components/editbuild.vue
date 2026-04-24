<script setup>
import useComponents from '../composables/UseComponents';

const components = useComponents()
</script>

<template>
    <div class="container">
        <div class="forcpu" v-for="value in components.pcComponents.processors">
            {{ value.name }}
            {{ value.ram_type }}
            {{ value.socket }}
            <button @click="components.cpuAddToBuild(value.id)">Добавить в сборку</button>
        </div>
        <div class="forgpu" v-for="value in components.pcComponents.gpu">
            {{ value.name }}
            <button @click="components.gpuAddToBuild(value.id)">Добавить в сборку</button>
        </div>
        <div class="fordisk" v-for="value in components.pcComponents.storage">
            {{ value.name }}
            <button @click="components.diskAddToBuild(value.id)">Добавить в сборку</button>
        </div>
        <div class="forram" v-for="value in components.pcComponents.ram">
            {{ value.name }}
            {{ value.type }}
            <button @click="components.ramAddToBuild(value.id)">Добавить в сборку</button>
        </div>
        <div class="forpsu" v-for="value in components.pcComponents.psu">
            {{ value.name }}
            <button @click="components.psuAddToBuild(value.id)">Добавить в сборку</button>
        </div>
        <div class="formb" v-for="value in components.pcComponents.motherboards">
            {{ value.name }}
            {{ value.ram_type }}
            {{ value.socket }}
            <button @click="components.mbAddToBuild(value.id)">Добавить в сборку</button>
        </div>
    </div>
</template>

<style scoped>
.container{
    color: white;
    display: flex;
    flex-direction: column;
}
</style>