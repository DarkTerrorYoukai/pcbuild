<script setup>
import useComponents from '../composables/UseComponents'
import { useRouter } from 'vue-router';


const components = useComponents();
const router = useRouter();

const presetBuilds = [
  {
    title: "Мам, я просто в браузер",
    code: "c19nm10ng0nr1nd8np14n",
    price: "36 846 ₽",
    description: "Учёба, YouTube, браузер, простые игры и спокойная жизнь без дискретной видеокарты.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Бюджетник, но не овощ",
    code: "c12nm3ng20nr1nd1np17n",
    price: "58 996 ₽",
    description: "Недорогая Full HD сборка, которая уже умеет запускать игры, а не только калькулятор.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Потянет КС, потянет жизнь",
    code: "c1nm18ng3nr10nd3np9n",
    price: "79 395 ₽",
    description: "Киберспортивная сборка для CS2, Dota 2, Valorant и прочих игр, где важен FPS.",
    image: "img/StarterPC.webp"
  },
  {
    title: "RTX есть — уважение есть",
    code: "c8nm6ng1nr2nd1np4n",
    price: "98 397 ₽",
    description: "Хороший игровой вариант с RTX 3060 для Full HD и аккуратного захода в 2K.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Синий трактор Intel Edition",
    code: "c17nm12ng14nr9nd7np17n",
    price: "90 694 ₽",
    description: "Intel-сборка для работы, игр и уверенного вида человека, который всё рассчитал.",
    image: "img/StarterPC.webp"
  },
  {
    title: "AM5, потому что я на будущем",
    code: "c14nm13ng6nr13nd3np2n",
    price: "94 595 ₽",
    description: "Стартовая современная DDR5-сборка на AM5 с заделом на будущие апгрейды.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Кредитный дракон 2K",
    code: "c4nm5ng10nr11nd5np9n",
    price: "147 495 ₽",
    description: "Сбалансированная 2K-сборка для тех, кто хотел просто посмотреть комплектующие, но случайно собрал мощь.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Папа, это для учёбы 2.0",
    code: "c16nm14ng4nr18nd1np10n",
    price: "114 396 ₽",
    description: "Мощная Intel-сборка для игр, работы, монтажа и очень убедительных объяснений родителям.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Печка Судного дня",
    code: "c10nm19ng2nr12nd4np3n",
    price: "190 495 ₽",
    description: "Серьёзная сборка под 2K/4K, тяжёлые игры и моменты, когда хочется выкрутить настройки вправо.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Не ПК, а ипотека с RGB",
    code: "c13nm16ng9nr15nd4np13n",
    price: "400 094 ₽",
    description: "Флагманская сборка для игр, тяжёлой работы и осознания, что видеокарта стоит как отпуск.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Начальный гигагеймер",
    code: "c3nm18ng1nr1nd8np7n",
    price: "77 300 ₽",
    description: "Бюджетная сборка для входа в мир гейминга: без понтов, но уже можно играть.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Опытный гигагеймер",
    code: "c3nm15ng18nr2nd8np15n",
    price: "108 500 ₽",
    description: "Сбалансированная сборка для тех, кто уже понял, что встроенная графика — это не судьба.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Мега гигагеймер",
    code: "c13nm5ng18nr8nd6np15n",
    price: "150 000 ₽",
    description: "Мощная игровая сборка для тех, кто хочет высокий FPS и красивую картинку без грусти.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Профессиональный геймер",
    code: "c6nm16ng9nr17nd5np13n",
    price: "220 000 ₽",
    description: "Сборка для серьёзных игр, стримов и ощущения, что компьютер смотрит на тебя свысока.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Для 3D работяги",
    code: "c13nm16ng13nr14nd5np13n",
    price: "260 000 ₽",
    description: "Сборка для 3D, рендера, тяжёлых задач и моментов, когда компьютер реально работает, а не делает вид.",
    image: "img/StarterPC.webp"
  },
  {
    title: "Только работа, никаких игр",
    code: "c1nm3ng20nr1nd2np5n",
    price: "56 500 ₽",
    description: "Офисная сборка для рабочих задач. Игры, конечно, случайно тоже могут запуститься, но мы никому не скажем.",
    image: "img/StarterPC.webp"
  }
];

// БАЗА

const openPreset = (code) => {
    if (!code) return; 
    components.setPendingCode(code); 
    router.push({ name: 'build' });  
};
</script>

<template>
<label class="Nazv-Sborok">Популярные сборки</label>

<div class="PC-row"> 
  <div 
    class="PC-card" 
    v-for="build in presetBuilds" 
    :key="build.code"
    @click="openPreset(build.code)"
  >
    <h2 class="PC-title">{{ build.title }}</h2>

    <img 
      class="PC-image"
      :src="build.image" 
      :alt="build.title"
    >

    <label class="PC-price">{{ build.price }}</label>
    <label class="PC-Descr">{{ build.description }}</label>
  </div>
</div>
</template>

<style scoped>
.PC-row {
  margin-top: 25px;
  margin-bottom: 60px;
  justify-self: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 500px;
  max-width: 1400px;
}

.PC-image {
  height: 320px;
  max-width: 300px;
  object-fit: contain;
  align-self: center;
}

.PC-title {
    font-family: 'Jura';
    color: var(--white);
}

.PC-price {
    font-family: 'Jura';
    color: var(--white);
  font-size: 30px;
  font-weight: 400;
}

.PC-Descr {
    font-family: 'JetBrains_Mono';
  padding-top: 8px;
  font-size: 12px;
  color: #bcc8d4;
}

.PC-card {
  border-radius: 10px;
  padding: 25px;
  flex-direction: column;
  display: flex;
  width: 400px;
  background-color: #031122;
  max-height: 600px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.PC-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 25px rgba(19, 94, 180, 0.45);
}
</style>