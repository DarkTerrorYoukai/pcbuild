import { createRouter, createWebHistory } from "vue-router";

import Main from "./components/main.vue";

import page404 from "./components/page404.vue";


const routes = [
    {path:'/main',component:Main,name:'main'},
    
    {path:'/:pathName(.*)', component: page404, name:'404'}

    
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    next()
})