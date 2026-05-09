<script setup>
import { reactive, ref } from 'vue';
import useComponents from '../composables/UseComponents';

const components = useComponents()
const budget = ref()

const budget_percentage = reactive({
    cpu: 0,
    gpu: 0,
    psu: 0,
    ram: 0,
    disk: 0,
    mb: 0 
}) // проценты бюджета для комплектующих

// Универсальная функция для поиска самой дорогой детали, которая влезает в бюджет
// filterCondition - функция, которая позволяет отсеять несовместимые детали
function findBestComponent(list, targetPrice, filterCondition = () => true) {
    return list.reduce((best, current) => {
        // Если деталь не подходит по совместимости ИЛИ она дороже бюджета - пропускаем
        if (!filterCondition(current) || current.price > targetPrice) {
            return best;
        }
        
        // Если у нас еще нет лучшего варианта ИЛИ текущая деталь ближе к бюджету
        if (!best || (targetPrice - current.price < targetPrice - best.price)) {
            return current;
        }
        
        return best;
    }, null); // null возвращается, если ничего не подошло
}

function build_form(build_type) {
    // 1. Распределяем проценты
    switch (build_type) {
        case 'work':
            budget_percentage.cpu = 0.45;
            budget_percentage.mb = 0.14;
            budget_percentage.disk = 0.15;
            budget_percentage.ram = 0.19;
            budget_percentage.psu = 0.07;
            budget_percentage.gpu = 0.0;
            break;
    
        case 'gaming':
            budget_percentage.cpu = 0.20;
            budget_percentage.mb = 0.10;
            budget_percentage.disk = 0.07;
            budget_percentage.ram = 0.16;
            budget_percentage.psu = 0.07;
            budget_percentage.gpu = 0.40;
            break;

        case 'dev':
            budget_percentage.cpu = 0.25;
            budget_percentage.mb = 0.10;
            budget_percentage.disk = 0.07;
            budget_percentage.ram = 0.20;
            budget_percentage.psu = 0.08;
            budget_percentage.gpu = 0.30;
            break;
        
        case 'pro':
            budget_percentage.cpu = 0.15;
            budget_percentage.mb = 0.12;
            budget_percentage.disk = 0.07;
            budget_percentage.ram = 0.13;
            budget_percentage.psu = 0.08;
            budget_percentage.gpu = 0.45;
            break;  
    }

    // 2. Рассчитываем целевой бюджет для каждой детали
    const targetMb = budget.value * budget_percentage.mb;
    const targetRam = budget.value * budget_percentage.ram;
    const targetCpu = budget.value * budget_percentage.cpu;
    const targetDisk = budget.value * budget_percentage.disk;
    const targetGpu = budget.value * budget_percentage.gpu;
    const targetPsu = budget.value * budget_percentage.psu;

    // 3. Подбираем комплектующие по порядку (важна последовательность для совместимости)

    // МАТЕРИНСКАЯ ПЛАТА
    components.currentBuild.mb = findBestComponent(
        components.pcComponents.motherboards, 
        targetMb
    );

    // Если на материнку не хватило денег, сборка невозможна
    if (!components.currentBuild.mb) {
        console.log("Бюджет слишком мал: невозможно подобрать материнскую плату.");
        return; 
    }

    // ОПЕРАТИВНАЯ ПАМЯТЬ (должна подходить к материнке)
    components.currentBuild.ram = findBestComponent(
        components.pcComponents.ram, 
        targetRam,
        (ram) => ram.type === components.currentBuild.mb.ram_type
    );

    // ПРОЦЕССОР (сокет, память, и встроенная графика, если это рабочий ПК)
    const needsIGPU = build_type === 'work'; 
    components.currentBuild.cpu = findBestComponent(
        components.pcComponents.processors, 
        targetCpu,
        (cpu) => {
            const socketMatch = cpu.socket === components.currentBuild.mb.socket;
            const ramMatch = cpu.ram_type.includes(components.currentBuild.mb.ram_type);
            const gpuMatch = needsIGPU ? cpu.has_graphics === true : true; // Если GPU нет, ищем только со встройкой
            return socketMatch && ramMatch && gpuMatch;
        }
    );

    // НАКОПИТЕЛЬ (проверяем поддержку NVMe, если диск M.2)
    components.currentBuild.disk = findBestComponent(
        components.pcComponents.storage, 
        targetDisk,
        (disk) => {
            if (disk.interface === 'NVMe' && !components.currentBuild.mb.m2_nvme_support) return false;
            return true;
        }
    );

    // ВИДЕОКАРТА
    if (targetGpu > 0) {
        components.currentBuild.gpu = findBestComponent(
            components.pcComponents.gpu, 
            targetGpu
        );
    } else {
        components.currentBuild.gpu = null;
    }

    // БЛОК ПИТАНИЯ (рассчитываем потребление с запасом 20%)
    const cpuTdp = components.currentBuild.cpu?.tdp_w || 0;
    const gpuTdp = components.currentBuild.gpu?.tdp_w || 0;
    const requiredWattage = (cpuTdp + gpuTdp + 70) * 1.2;

    components.currentBuild.psu = findBestComponent(
        components.pcComponents.psu, 
        targetPsu,
        (psu) => psu.wattage >= requiredWattage
    );
    
}
</script>

<template>
    <div>
        Автосборка по бюджету:
        <input type="number"
        min="0"
        max="1000000"
        step="10000"
        v-model="budget">
        <div v-if="budget >= 28800 && budget < 50000"> <!-- при определенном бюджете должны поялвяться кнопки для выбора цели сборки -->
            <button @click="build_form('work')">Для работы</button>
        </div>
        <div v-if="budget >= 50000">
            <button @click="build_form('gaming')">Для игр</button>
        </div>
        <div v-if="budget >= 50000">
            <button @click="build_form('dev')">Для работы с видео/3д моделями</button>
        </div>
        <div v-if="budget >= 300000">
            <button @click="build_form('pro')">Профессиональный</button>
        </div>
    </div>
</template>

<style scoped>
button{
    cursor: pointer;
    padding: 10px;
    margin-top: 5px;
    font-size: medium;
    font-family:'Roboto-local', sans-serif;
    border-radius: 5px;
    border: 1px solid #4797f3;
    background-color: #020b16;
    color: #4797f3;
}
input{
    font-size: larger;
    border-radius: 5px;
    margin-top: 15px;
    min-height: 25px;
    min-width: none;
    color: #eef0f3;
    border: 1px solid #4797f3;
    background-color: #020b16;
}
div{
    color:white;
}
</style>