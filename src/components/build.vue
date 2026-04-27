<script setup>
import { reactive, ref, watch } from 'vue';
import useComponents from '../composables/UseComponents';

const components = useComponents()

const warning_msg = ref('')

watch(components.currentBuild, () => {
    warning_msg.value = ''

    if(components.currentBuild.cpu?.socket != components.currentBuild.mb?.socket && components.currentBuild.cpu?.socket && components.currentBuild.mb?.socket){
        warning_msg.value += '\n Сокет процессора не совпадает с сокетом материнской платы '
    }

    if(!components.currentBuild.cpu?.ram_type.includes(components.currentBuild.ram?.type) && components.currentBuild.ram?.type){
        warning_msg.value += '\n Тип оперативной памяти не совпадает с типом памяти процессора '
    }

    if(components.currentBuild.mb?.ram_type && components.currentBuild.ram?.type && components.currentBuild.mb?.ram_type != components.currentBuild.ram?.type){
        warning_msg.value += '\n Тип оперативной памяти не совпадает с типом памяти материнской платы '
    }
    
    if((components.currentBuild.cpu?.tdp_w + components.currentBuild.gpu?.tdp_w + 50) > components.currentBuild.psu?.wattage ){
        warning_msg.value += '\n Недостатачная мощность блока питания '
    }

    if(components.currentBuild.disk?.interface == "NVMe" && components.currentBuild.mb?.m2_nvme_support == false){
        warning_msg.value += '\n Материнская плата не поддерживает NVMe ' //по факту у нас таких плат нет но на будущее если планируем добавлять еще
    }

})
</script>

<template>
    <div class="pc_build">
        <div class="gpu">
            Видеокарта
            {{ components.currentBuild.gpu?.name }}
        </div>
        <div class="cpu">
            Процессор
            {{ components.currentBuild.cpu?.name }}
        </div>
        <div class="mb">
            Материнская плата
            {{ components.currentBuild.mb?.name }}
        </div>
        <div class="ram">
            Оперативная память
            {{ components.currentBuild.ram?.name }}
        </div>
        <div class="psu">
            Блок питания
            {{ components.currentBuild.psu?.name}}
        </div>
        <div class="disk">
            Хранилище
            {{ components.currentBuild.disk?.name }}
        </div>
        <div class="warning">{{ warning_msg }}</div>
    </div>
    <div class="buildLinks">
        <router-link :to="{ name: 'randombuild'}" class="buildbtn">Случайный билд</router-link>
        <router-link :to="{ name: 'editbuild'}" class="buildbtn">свой билд</router-link>
        <router-link :to="{ name: 'autobuild'}" class="buildbtn">по бюджету билд</router-link>
        <router-link :to="{ name: 'buildsave'}" class="buildbtn">Сохранение/выгрузка билд</router-link>
        <router-link :to="{ name: 'payment'}" class="buildbtn">Страница оплаты</router-link>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.buildbtn{
    color:white;
}
.buildLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
}
.pc_build{
    height: 800px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
    gap:20px
}

.warning{
    color: yellow;
}
</style>