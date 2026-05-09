<script setup>
import { reactive, ref, watch } from 'vue';
import useComponents from '../composables/UseComponents';
import randombuild from './randombuild.vue';
import { computed } from 'vue';

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
        warning_msg.value += '\n Недостаточная мощность блока питания '
    }

    if(components.currentBuild.disk?.interface == "NVMe" && components.currentBuild.mb?.m2_nvme_support == false){
        warning_msg.value += '\n  Материнская плата не поддерживает NVMe ' //по факту у нас таких плат нет но на будущее если планируем добавлять еще
    }

})
const totalPrice = computed(() => {
    return (components.currentBuild.cpu?.price || 0) +
           (components.currentBuild.gpu?.price || 0) +
           (components.currentBuild.mb?.price || 0) +
           (components.currentBuild.psu?.price || 0) +
           (components.currentBuild.ram?.price || 0) +
           (components.currentBuild.disk?.price || 0);
});
</script>

<template>
    <div class="pc_build">
        <div class="ColumnLeft">
            <div class="selGroup">
                <p>Процессор</p>
                    <select v-model="components.currentBuild.cpu">
                        <option v-for="value in components.pcComponents.processors" :value="value">{{value.name}}</option>                
                    </select>
                    <span class="select-price">{{ components.currentBuild.cpu?.price.toLocaleString() }} ₽</span>
            </div>
            <div class="selGroup">        
                <p>Видеокарты</p>
                    <select v-model="components.currentBuild.gpu">
                        <option v-for="value in components.pcComponents.gpu" :value="value">{{value.name}}</option>                
                    </select>
                    <span class="select-price">{{ components.currentBuild.gpu?.price.toLocaleString() }} ₽</span>
            </div>
            <div class="selGroup">        
                <p>Материнские платы</p>
                    <select v-model="components.currentBuild.mb">
                        <option v-for="value in components.pcComponents.motherboards" :value="value">{{value.name}}</option>                
                </select>
                <span class="select-price">{{ components.currentBuild.mb?.price.toLocaleString() }} ₽</span>
            </div>
        </div>

        <div class="columnCenter">
            <img src="/img/pc.png" style="max-width: 550px;" alt="">
        </div>

        <div class="ColumnRight">
            <div class="selGroup">
                <p>Питание</p> 
                    <select v-model="components.currentBuild.psu">
                        <option v-for="value in components.pcComponents.psu" :value="value">{{value.name}}</option>                
                    </select>
                    <span class="select-price">{{ components.currentBuild.psu?.price.toLocaleString() }} ₽</span>   
            </div>
            <div class="selGroup">
                <p>Оперативная память</p>
                    <select v-model="components.currentBuild.ram">
                        <option v-for="value in components.pcComponents.ram" :value="value">{{value.name}}</option>                
                    </select>
                    <span class="select-price">{{ components.currentBuild.ram?.price.toLocaleString() }} ₽</span>
                </div>
            <div class="selGroup">
                <p>Хранилище</p>
                    <select v-model="components.currentBuild.disk">
                        <option v-for="value in components.pcComponents.storage" :value="value">{{value.name}}</option>                
                    </select>
                    <span class="select-price">{{ components.currentBuild.disk?.price.toLocaleString() }} ₽</span>                
             </div>
        </div> 
                <div class="ColumnComponents">
                    <div class="Name-Price" >
                    <p class="Sborka">Ваша сборка</p>
                    <div class="TotalPrice">{{ totalPrice.toLocaleString() }} ₽</div>
                <div class="links">
                    <router-link :class="botonElg" :to="{ name: 'randombuild'}" class="buildbtn">Случайная сборка</router-link>
                    <router-link :to="{ name: 'autobuild'}" class="buildbtn">по бюджету билд</router-link>
                    <router-link :to="{ name: 'buildsave'}" class="buildbtn">Сохранение сборки</router-link>
                </div>
                </div>
                    <router-view></router-view>
                    <div class="Specs">
                        <div class="SpecNames">
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
                            <div class="gpu">
                                Видеокарта
                                {{ components.currentBuild.gpu?.name }}
                            </div>
                            <div class="cpu">
                                Процессор
                                {{ components.currentBuild.cpu?.name }}
                            </div>
                            <div class="mb">
                                <span>Материнская плата</span>
                                {{ components.currentBuild.mb?.name }}
                            </div>
                        </div>
                        <div class="SpecPrices">
                            <span class="price">{{ components.currentBuild.ram?.price.toLocaleString() }}  </span>
                            <span class="price">{{ components.currentBuild.psu?.price.toLocaleString() }}  </span>
                            <span class="price">{{ components.currentBuild.disk?.price.toLocaleString() }}  </span>
                            <span class="price">{{ components.currentBuild.gpu?.price.toLocaleString() }}  </span>
                            <span class="price">{{ components.currentBuild.cpu?.price.toLocaleString() }}  </span>
                            <span class="price">{{ components.currentBuild.mb?.price.toLocaleString() }}  </span>
                        </div>
                    </div>
        <div class="warning">{{ warning_msg }}</div>
        <button class="boton-elegante">Купить все сразу</button>
        </div>
    </div>
    <!-- ВЯЧЕСЛАВ СДЕЛАЙ СТРАНИЦУ ОПЛАТЫ -->
    <div class="buildLinks">
        <router-link :to="{ name: 'payment'}" class="buildbtn">Страница оплаты</router-link>
    </div>
</template>

<style scoped>
.links{
    padding: 5px;
    min-height: 50px;
    min-width: 600px;
}
.buildbtn{
    text-decoration: none;
  padding: 15px;
  border: 2px solid #1678e9;
  background-color: #020b16;
  color: #4797f3;
  font-size: medium;
  font-family:'Roboto-local', sans-serif;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.4s ease;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: bold;
  margin-right: 7px;
}
.TotalPrice{
    font-size: 40px;
    margin-bottom: 20px;
}
.SpecPrices{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    min-width: 100px;
}
.Specs{
    display: flex;
    justify-content: space-between;    
    flex-direction: row ;
    background-color: #05254770;
    padding: 10px;
    border-radius: 5px;
    height: 400px;
    max-width: 100%;
}
.SpecNames{
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: space-around;
    min-width: 290px;
    max-width: 100px;
}
.Sborka{
    font-family: 'JetBrains_Mono';
    color: white;
    display: flex;
    justify-content: start;
    font-size: 25px;
}
.buildLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;
}
.pc_build{
    align-items: center;
    justify-content: space-around;
    height: 800px;
    width: 100%;
    display: flex;
    color: white;
    flex-direction: row;
    padding: 20px;
}
.ColumnLeft, .ColumnRight {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-direction: column;
    height: 640px;
    width: 300px;
}
.selGroup {
    display: flex;
    flex-direction: column;
    gap: 8px; 
    align-items: flex-start; 
}
.ColumnCenter{
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-family: 'JetBrains_Mono';
    color: #085fc4;
    font-size: 18px;
}
.ColumnComponents{
    background-color: #031427 ;
    border-radius: 10px;
    display: flex;
    border: 1px solid #0d4e9986;
    flex-direction: column;
    font-family: 'Roboto-local', sans-serif;
    font-size: larger;
    gap: 15px;
    justify-content: space-around;
    padding: 20px;
    height: 850px;
    width: 600px;
    margin-bottom: 50px;
}
.selGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.boton-elegante {
  padding: 15px 30px;
  border: 2px solid #1678e9;
  background-color: #020b16;
  color: #4797f3;
  font-size: medium;
  font-family:'Roboto-local', sans-serif;
  cursor: pointer;
  border-radius: 10px;
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
}

.boton-elegante:hover {
  border-color: #0d4e99;
  color: #0d4e99;

}
select {
    font-family:'Roboto-local', sans-serif;
    background: #031427;
    color: white;
    height: 60px;
    width: 280px;
    border: 1px solid #cccdce81;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.4s}
select:hover, select:focus {
    background-color: #052547;
    border-color: #1a73e8;
    box-shadow: 0 0 8px rgba(13, 78, 153, 0.5);
}
.select-price {
    font-family:'Roboto-local', sans-serif;
    color: #cccdce;
    font-size: 20px;
}
.price {
    margin-left: 50px;
    font-family:'Roboto-local', sans-serif;
    font-weight: bold;
    font-size: 20px;
}
.warning{
    color: yellow;
}
</style>