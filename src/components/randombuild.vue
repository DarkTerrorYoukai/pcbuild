<script setup>
import useComponents from '../composables/UseComponents';

const components = useComponents()

function randBuild() {
    let mainComp = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    switch (mainComp) {
        case 1: { 
            components.currentBuild.cpu = components.pcComponents.processors[Math.floor(Math.random() * components.pcComponents.processors.length)];
            let selectedCpu = components.currentBuild.cpu;

            let mbs = [];
            for (let index = 0; index < components.pcComponents.motherboards.length; index++) {
                const mother = components.pcComponents.motherboards[index];
                if (mother.socket == selectedCpu.socket && selectedCpu.ram_type.includes(mother.ram_type)) {
                    mbs.push(mother);
                }
            }
            components.currentBuild.mb = mbs[Math.floor(Math.random() * mbs.length)];

            let rams = [];
            for (let index = 0; index < components.pcComponents.ram.length; index++) {
                const ram = components.pcComponents.ram[index];
                if (selectedCpu.ram_type.includes(ram.type) && ram.type == components.currentBuild.mb.ram_type) {
                    rams.push(ram);
                }
            }
            components.currentBuild.ram = rams[Math.floor(Math.random() * rams.length)];

            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            components.currentBuild.psu = components.pcComponents.psu[Math.floor(Math.random() * components.pcComponents.psu.length)];
            components.currentBuild.gpu = components.pcComponents.gpu[Math.floor(Math.random() * components.pcComponents.gpu.length)];
            break;
        }
        case 2: {
            components.currentBuild.mb = components.pcComponents.motherboards[Math.floor(Math.random() * components.pcComponents.motherboards.length)];
            let selectedMb = components.currentBuild.mb;

            let cpus = [];
            for (let index = 0; index < components.pcComponents.processors.length; index++) {
                const cpu = components.pcComponents.processors[index];
               
                if (cpu.socket == selectedMb.socket && cpu.ram_type.includes(selectedMb.ram_type)) {
                    cpus.push(cpu);
                }
            }
             console.log(cpus)
            components.currentBuild.cpu = cpus[Math.floor(Math.random() * cpus.length)];

            let rams = [];
            for (let index = 0; index < components.pcComponents.ram.length; index++) {
                const ram = components.pcComponents.ram[index];
                if (ram.type == selectedMb.ram_type && components.currentBuild.cpu.ram_type.includes(ram.type)) {
                    rams.push(ram);
                }
            }
            components.currentBuild.ram = rams[Math.floor(Math.random() * rams.length)];

            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            components.currentBuild.psu = components.pcComponents.psu[Math.floor(Math.random() * components.pcComponents.psu.length)];
            components.currentBuild.gpu = components.pcComponents.gpu[Math.floor(Math.random() * components.pcComponents.gpu.length)];
            break;
        }
        case 3: { 
            components.currentBuild.ram = components.pcComponents.ram[Math.floor(Math.random() * components.pcComponents.ram.length)];
            let selectedRam = components.currentBuild.ram;

            
            let mbs = [];
            for (let index = 0; index < components.pcComponents.motherboards.length; index++) {
                const mother = components.pcComponents.motherboards[index];
                if (mother.ram_type === selectedRam.type) {
                    mbs.push(mother);
                }
            }
            components.currentBuild.mb = mbs[Math.floor(Math.random() * mbs.length)];

           
            let cpus = [];
            for (let index = 0; index < components.pcComponents.processors.length; index++) {
                const cpu = components.pcComponents.processors[index];
                if (cpu.socket === components.currentBuild.mb.socket && cpu.ram_type.includes(selectedRam.type)) {
                    cpus.push(cpu);
                }
            }
            components.currentBuild.cpu = cpus[Math.floor(Math.random() * cpus.length)];

            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            components.currentBuild.psu = components.pcComponents.psu[Math.floor(Math.random() * components.pcComponents.psu.length)];
            components.currentBuild.gpu = components.pcComponents.gpu[Math.floor(Math.random() * components.pcComponents.gpu.length)];
            break;
        }
        case 4: { 
            components.currentBuild.gpu = components.pcComponents.gpu[Math.floor(Math.random() * components.pcComponents.gpu.length)];
            let selectedGpu = components.currentBuild.gpu;

            
            components.currentBuild.cpu = components.pcComponents.processors[Math.floor(Math.random() * components.pcComponents.processors.length)];
            
            let mbs = [];
            for (let index = 0; index < components.pcComponents.motherboards.length; index++) {
                const mother = components.pcComponents.motherboards[index];
                if (mother.socket == components.currentBuild.cpu.socket && components.currentBuild.cpu.ram_type.includes(mother.ram_type)) {
                    mbs.push(mother);
                }
            }
            components.currentBuild.mb = mbs[Math.floor(Math.random() * mbs.length)];

            let rams = [];
            for (let index = 0; index < components.pcComponents.ram.length; index++) {
                const ram = components.pcComponents.ram[index];
                if (components.currentBuild.cpu.ram_type.includes(ram.type) && ram.type == components.currentBuild.mb.ram_type) {
                    rams.push(ram);
                }
            }
            components.currentBuild.ram = rams[Math.floor(Math.random() * rams.length)];
            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            
            
            let psus = [];
            for (let index = 0; index < components.pcComponents.psu.length; index++) {
                if (components.pcComponents.psu[index].wattage >= selectedGpu.recommended_psu_w) {
                    psus.push(components.pcComponents.psu[index]);
                }
            }
            
            if (psus.length === 0) psus = components.pcComponents.psu;
            components.currentBuild.psu = psus[Math.floor(Math.random() * psus.length)];
            break;
        }
        case 5: { 
            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            let selectedDisk = components.currentBuild.disk;

            components.currentBuild.cpu = components.pcComponents.processors[Math.floor(Math.random() * components.pcComponents.processors.length)];
            
            let mbs = [];
            for (let index = 0; index < components.pcComponents.motherboards.length; index++) {
                const mother = components.pcComponents.motherboards[index];
                
                let isDiskCompatible = true;
                if (selectedDisk.interface === 'NVMe' && !mother.m2_nvme_support) {
                    isDiskCompatible = false;
                }

                if (mother.socket == components.currentBuild.cpu.socket && components.currentBuild.cpu.ram_type.includes(mother.ram_type) && isDiskCompatible) {
                    mbs.push(mother);
                }
            }
            components.currentBuild.mb = mbs[Math.floor(Math.random() * mbs.length)];

            let rams = [];
            for (let index = 0; index < components.pcComponents.ram.length; index++) {
                const ram = components.pcComponents.ram[index];
                if (components.currentBuild.cpu.ram_type.includes(ram.type) && ram.type == components.currentBuild.mb.ram_type) {
                    rams.push(ram);
                }
            }
            components.currentBuild.ram = rams[Math.floor(Math.random() * rams.length)];

            components.currentBuild.gpu = components.pcComponents.gpu[Math.floor(Math.random() * components.pcComponents.gpu.length)];
            components.currentBuild.psu = components.pcComponents.psu[Math.floor(Math.random() * components.pcComponents.psu.length)];
            break;
        }
        case 6: { 
            components.currentBuild.psu = components.pcComponents.psu[Math.floor(Math.random() * components.pcComponents.psu.length)];
            let selectedPsu = components.currentBuild.psu;

            
            let gpus = [];
            for (let index = 0; index < components.pcComponents.gpu.length; index++) {
                if (components.pcComponents.gpu[index].recommended_psu_w <= selectedPsu.wattage) {
                    gpus.push(components.pcComponents.gpu[index]);
                }
            }
            if (gpus.length === 0) gpus = components.pcComponents.gpu;
            components.currentBuild.gpu = gpus[Math.floor(Math.random() * gpus.length)];

           
            components.currentBuild.cpu = components.pcComponents.processors[Math.floor(Math.random() * components.pcComponents.processors.length)];
            
            let mbs = [];
            for (let index = 0; index < components.pcComponents.motherboards.length; index++) {
                const mother = components.pcComponents.motherboards[index];
                if (mother.socket == components.currentBuild.cpu.socket && components.currentBuild.cpu.ram_type.includes(mother.ram_type)) {
                    mbs.push(mother);
                }
            }
            components.currentBuild.mb = mbs[Math.floor(Math.random() * mbs.length)];

            let rams = [];
            for (let index = 0; index < components.pcComponents.ram.length; index++) {
                const ram = components.pcComponents.ram[index];
                if (components.currentBuild.cpu.ram_type.includes(ram.type) && ram.type == components.currentBuild.mb.ram_type) {
                    rams.push(ram);
                }
            }
            components.currentBuild.ram = rams[Math.floor(Math.random() * rams.length)];
            components.currentBuild.disk = components.pcComponents.storage[Math.floor(Math.random() * components.pcComponents.storage.length)];
            break;
        }
    }
}



</script>

<template>
<button class="rnm-button" @click="randBuild">Let's go gambling! 🎰</button>
</template>

<style scoped>
.rnm-button{
  padding: 8px;
  margin: 5px;
  border: 2px solid #4797f3;
  background-color: #020b16;
  color: #4797f3;
  font-size: medium;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.4s ease;
  font-weight: bold;
}
.rnm-button:hover{
    border: 2px solid #bd47f3;
    color: #bd47f3;
}
.rnm-button.active{
   transform: translateY(3px);
}
</style>