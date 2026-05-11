<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useComponents from '../composables/UseComponents'
import { useRouter } from 'vue-router';

const router = useRouter();
const components = useComponents();
const max = ref(0)
let timer = null

function startSlider() {
  timer = setInterval(() => {
    max.value = (max.value + 1) % 3
    document.documentElement.style.setProperty('--offset', `${max.value * -1900}px`)
  }, 3500)
}

onMounted(() => startSlider())
onUnmounted(() => clearInterval(timer))

const StarterGigaGaymer = {
  code: "c3nm18ng1nr1nd8np7n"
};
const ExperiencedGigaGaymer = {
  code: "c3nm15ng18nr2nd8np15n"
};
const MegaGigaGaymer = {
  code: "c13nm5ng18nr8nd6np15n"
};
const ProfessionalGaymer = {
  code: "c6nm16ng9nr17nd5np13n"
};
const WorkFor3DGaymer = {
  code: "c13nm16ng13nr14nd5np13n"
};
const OnlyWork = {
  code: "c1nm3ng20nr1nd2np5n"
};
const openPreset = (code) => {
    if (!code) return; 
    components.setPendingCode(code); 
    router.push({ name: 'build' });  
};

</script>

<template>
<div class="Parent-div">
  <div class="slider-container">
    <div class="slides-inner">
      <img class="slide-item" src="/img/PromotionPC.png" @click="openPreset(MegaGigaGaymer.code)" alt="1">
      <img class="slide-item" src="/img/Promotion5080.png" @click="openPreset(ProfessionalGaymer.code)" alt="2">
      <img class="slide-item" src="/img/Promotion3D.png" @click="openPreset(WorkFor3DGaymer.code)" alt="3">
    </div>
  </div>
    <div class="PromoDiv">
        <div class="Promo-txt">
            <label style="font-size: 45px;">Собери свой идеальный ПК</label>
            <label class="inner-txt">Автоматический подбор, совместимость, топ сборки и полный контроль над твоей системой.</label>
            <div class="btnMain">    
                <RouterLink class="BuildButton" :to="{name: 'build'}">Собрать ПК</RouterLink>
            </div>              
        </div>
    </div>
    <!-- Можно добавить что то типа кнопки "смотреть все" с переходом на страницу сборок -->
    <label class="Nazv-Sborok" >Популярные сборки</label>
    <div class="PC-row"> 
        <div class="PC-card" @click="openPreset(StarterGigaGaymer.code)">
            <h2>Начальный гигагеймер</h2>
            <img style="height: 320px;" max-width="300px" src="/img/StarterPC.webp" alt="">
            <label class="PC-price">77 300 ₽</label>
            <label class="PC-Descr">Бюджетная сборка для входа</label>
        </div>

        <div class="PC-card" @click="openPreset(ExperiencedGigaGaymer.code)">
            <h2>Опытный гигагеймер</h2>
            <img style="height: 320px;" max-width="300px" src="/img/MediumPC.webp" alt="">
            <label class="PC-price">108 500 ₽ </label>
            <label class="PC-Descr">Лучшее соотношение цены и производительности</label>
        </div>

        <div class="PC-card" @click="openPreset(OnlyWork.code)">
            <h2>Для Работы</h2>
            <img style="height: 320px;" max-width="300px" src="/img/BudgetPC.png" alt="">
            <label class="PC-price">56 500 ₽ </label>
            <label class="PC-Descr">Офисная сборка для рабочих задач</label>
        </div>        

    </div>
        <div class="btn-rowMain">
            <div >    
                <RouterLink class="BuildButton" :to="{name: 'components'}">Комплектующие</RouterLink>
            </div> 
        </div>    
</div> 
</template>

<style scoped>
.btn-rowMain{
    justify-self: center;
    justify-content: center;
    min-width: 1550px;
    min-height: 110px;
    display: flex;
}
.Nazv-Sborok{
    font-size: 32px;
    font-family: 'Jura_Bold';
    min-height: 45px;
    margin-left: 245px;
}
.PC-Descr{
    padding-top: 8px;
    font-size: 16px;
    color: #bcc8d4;
}
.PC-price{
    font-size: 30px;
    font-weight: 400;
}
.PC-card{
    border-radius: 10px;
    padding: 25px;
    flex-direction: column;
    display: flex;
    min-width: 400px;
    background-color: #031122;
    max-height: 500px;
    cursor: pointer;

}
.PC-row{
    margin-top: 25px;
    margin-bottom: 60px;
    justify-self: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    min-height: 500px;
    min-width: 1400px;
}
.btnMain{
    display: flex;
    min-height: 50px;
    min-width: 250px;
}
.BuildButton{
justify-content: center;
    text-decoration: none;
  padding: 15px;
  margin-top: 20px;
  max-height: 50px;
  max-width: 160px;
  background-color: #135eb4;
  color: #bcc8d4;
  font-size: medium;
    font-family: 'Jura_Bold';
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.4s ease;
  font-weight: bolder;
}
.inner-txt{
    max-width: 520px;
    color: rgba(240, 248, 255, 0.767);
    margin-top: 12px;
    font-size: 18px;
    font-weight: 500;
}
.Promo-txt{
    flex-direction: column;
    display: flex;
    max-width: 600px;
    margin-right: 450px;
}
.PromoDiv{
    background-image: url(/img/CoolPC2.png);
    display: flex;
    justify-content: center;
    padding: 35px;
    width: 1880px;
    margin-bottom: 25px;
    height: 400px;
    background-color: #010810;
}
.Parent-div{
    font-family: 'Roboto-local', sans-serif;
    color: aliceblue;
}
.slide-item {
  width: 1900px;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
.slider-container {
display: flex;
justify-self: center;
  max-width: 1870px; 
  height: 500px; 
  overflow: hidden;
  position: relative; 
  border-radius: 0;
  margin-bottom: 25px; 
}

.slides-inner {
cursor: pointer;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(var(--offset, 0px));
}
</style>