import { createRouter, createWebHistory } from "vue-router";

import Main from "./components/main.vue";

import Page404 from "./components/page404.vue";

import Components from "./components/components.vue";

import Autobuild from "./components/autobuild.vue";

import Build from "./components/build.vue";

import Buildsave from "./components/buildsave.vue";

import Editbuild from "./components/editbuild.vue";

import Payment from "./components/payment.vue";

import Randombuild from "./components/randombuild.vue";

const routes = [
    {path:'/main',component:Main,name:'main'},

    {path:'/:pathName(.*)', component: Page404, name:'404'},

    {path:'/components', component: Components, name:'components'},

    {path:'/build', component: Build, name:'build', children:[
        {path:'randombuild', component:Randombuild, name:'randombuild'},
        {path:'editbuild', component:Editbuild, name: 'editbuild'},
        {path:'autobuild', component:Autobuild, name: 'autobuild'},
        {path:'buildsave', component:Buildsave, name: 'buildsave'},
        {path:'payment', component:Payment, name: 'payment'}
    ] }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) =>{
    next()
})