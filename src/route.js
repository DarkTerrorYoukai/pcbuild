import { createRouter, createWebHistory } from "vue-router";

import Main from "./components/main.vue";

import Page404 from "./components/page404.vue";

import Components from "./components/components.vue";

import Autobuild from "./components/autobuild.vue";

import Build from "./components/build.vue";

import Buildsave from "./components/buildsave.vue";

import Payment from "./components/payment.vue";

import Randombuild from "./components/randombuild.vue";

import Madebuilds from "./components/madebuilds.vue";

import Guides from './components/guides.vue'

import Lobby from "./components/lobby.vue";

import sortCPU from "./components/sortCPU.vue";

import sortGPU from "./components/sortGPU.vue";

import sortPSU from "./components/sortPSU.vue";

import sortRAM from "./components/sortRAM.vue";

import sortStorage from "./components/sortStorage.vue";

import sortMother from "./components/sortMother.vue";

const routes = [
    {path:'/',component:Main,name:'main'},

    {path:'/:pathName(.*)', component: Page404, name:'404'},

    {path:'/components', component: Components, name:'components', children:[
        {path:'sortCPU', component:sortCPU, name:'sortCPU'},
        {path:'sortGPU', component:sortGPU, name:'sortGPU'},
        {path:'sortRAM', component:sortRAM, name:'sortRAM'},
        {path:'sortPSU', component:sortPSU, name:'sortPSU'},
        {path:'sortStorage', component:sortStorage, name:'sortStorage'},
        {path:'sortMother', component:sortMother, name:'sortMother'}
    ] },

    {path:'/madebuilds', component: Madebuilds, name:'madebuilds'},

    {path:'/guides', component: Guides, name:'guides'},

    {path:'/lobby', component: Lobby, name:'lobby'},

    {path:'/build', component: Build, name:'build', children:[
        {path:'randombuild', component:Randombuild, name:'randombuild'},
        {path:'autobuild', component:Autobuild, name: 'autobuild'},
        {path:'buildsave', component:Buildsave, name: 'buildsave'},
        {path:'payment', component:Payment, name: 'payment'}
    ] }
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) =>{
    next()
})