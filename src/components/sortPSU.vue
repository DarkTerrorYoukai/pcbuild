<script setup>
import useComponents from '../composables/UseComponents';
import { reactive } from 'vue';
const components = useComponents()
</script>

<template>
    <div class="es" v-for="value in components.pcComponents.psu">
    {{ value.brand }}
    {{ value.name }}
    {{ value.price }}р
<router-link :to="{name: 'build'}">
    <button class="boton-elegante" @click="components.psuAddToBuild(value.id)">Добавить в сборку</button>
</router-link>    
    </div>
</template>

<style scoped>
.es{
    font-family: 'Roboto-local', sans-serif;
    font-size: larger;
    align-items: center;
    width: 850px;
    height: 80px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    border-bottom:  2px solid #272d35;
    justify-self: center;
    justify-content: space-between;
    flex-direction: row;
    color: aliceblue;
}

.boton-elegante {
  padding: 15px 30px;
  border: 2px solid #072d57;
  background-color: #031427;
  color: #ffffffcc;
  font-size: medium;
  font-family:'Roboto-local', sans-serif;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
}

.boton-elegante::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(91, 53, 182, 0.25) 0%,
    rgba(250, 17, 17, 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease;
}

.boton-elegante:hover {
  border-color: #0d4e99;
  background: #031427;
}
</style>