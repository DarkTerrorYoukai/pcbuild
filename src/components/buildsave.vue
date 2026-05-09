<script setup>
import { ref } from 'vue';
import useComponents from '../composables/UseComponents';

const components = useComponents()

const savedcode = ref('')

const loadcode = ref('')
function savebuild(){
    savedcode.value = ''
    if (components.currentBuild.cpu != null){
        const c = components.currentBuild.cpu.id.split('_')
        savedcode.value += 'c' + c[1] + 'n'
    }

    if (components.currentBuild.mb != null){
        const m = components.currentBuild.mb.id.split('_')
        savedcode.value += 'm' + m[1] + 'n'
    }

    if (components.currentBuild.gpu != null){
        const g = components.currentBuild.gpu.id.split('_')
        savedcode.value += 'g' + g[1] + 'n'
    }

    if (components.currentBuild.ram != null){
        const r = components.currentBuild.ram.id.split('_')
        savedcode.value += 'r' + r[1] + 'n'
    }

    if (components.currentBuild.disk != null){
        const d = components.currentBuild.disk.id.split('_')
        savedcode.value += 'd' + d[1] + 'n'
    }

    if (components.currentBuild.psu != null){
        const p = components.currentBuild.psu.id.split('_')
        savedcode.value += 'p' + p[1] + 'n'
    }
}

function loadbuild(){
    const ids = loadcode.value.split('n')

    if (loadcode.value.includes('c')){
        const cf = ids.find((comp)=>comp.includes('c'))
        components.currentBuild.cpu = components.pcComponents.processors.find((cpu)=>cpu.id.includes(cf.replace('c','cpu_')))
    }

    if (loadcode.value.includes('m')){
        const mf = ids.find((comp)=>comp.includes('m'))
        components.currentBuild.mb = components.pcComponents.motherboards.find((mb)=>mb.id.includes(mf.replace('m','mb_')))
    }

    if (loadcode.value.includes('g')){
        const gf = ids.find((comp)=>comp.includes('g'))
        components.currentBuild.gpu = components.pcComponents.gpu.find((gp)=>gp.id.includes(gf.replace('g','gpu_')))
    }

    if (loadcode.value.includes('r')){
        const rf = ids.find((comp)=>comp.includes('r'))
        components.currentBuild.ram = components.pcComponents.ram.find((ram)=>ram.id.includes(rf.replace('r','ram_')))
    }

    if (loadcode.value.includes('d')){
        const df = ids.find((comp)=>comp.includes('d'))
        components.currentBuild.disk = components.pcComponents.storage.find((dsk)=>dsk.id.includes(df.replace('d','disk_')))
    }

    if (loadcode.value.includes('p')){
        const pf = ids.find((comp)=>comp.includes('p'))
        components.currentBuild.psu = components.pcComponents.psu.find((psu)=>psu.id.includes(pf.replace('p','psu_')))
    }
    
}
</script>

<template>
    <div class="Save-load">
        <button @click="savebuild">Сохранить сборку</button>
        <div class="code">Код сборки: {{ savedcode }} Сохраните его и вставьте в поле загрузки сборки</div>
        <button @click="loadbuild">Загрузить сборку</button>
        <input placeholder="Ваш код" type="text" v-model="loadcode">
    </div>
</template>

<style scoped>
.Save-load{
    min-width: 550px;
    min-height: 130px;
}
.code{
    margin-left: 10px;
}
input{
    font-size: larger;
    border-radius: 5px;
    margin-top: 16px;
    min-height: 43px;
    min-width: none;
    color: #eef0f3;
    border: 1px solid #4797f3;
    background-color: #020b16;
}
button{
    cursor: pointer;
    padding: 10px;
    margin: 8px;
    font-size: medium;
    font-family:'Roboto-local', sans-serif;
    border-radius: 5px;
    border: 2px solid #4797f3;
    background-color: #020b16;
    color: #4797f3;
}
button:hover{
    border: 2px solid #919ead;
    color: #919ead;
}
.code{
    color: white;
}
</style>