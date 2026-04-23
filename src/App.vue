<script setup>

</script>

<template>
    <div class="test1">jetbrains</div>
    <div class="test2">jura</div>
    <router-link :to="{name: 'build' }">test</router-link>
    <router-view></router-view>
</template>

<style scoped>
.test1 {
    font-family: 'JetBrains_Mono';
}

.test2 {
    font-family: 'Jura';
}
</style>