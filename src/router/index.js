import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Discover',
    component: () => import("../views/Discover.vue")

  },
  {
    path: '/songlist',
    name: 'Songlist',
    component: () => import("../views/Songlist.vue")

  },
  {
    path: '/searchout',
    name: 'Searchout',
    component: () => import("../views/Searchout.vue")

  },
  {
    path: '/toplist',
    name: 'Toplist',
    component: () => import("../views/Toplist.vue")

  },
  {
    path: "/songlistdetail/:id",
    name: "Songlistdetail",
    component: () => import("../views/Songlistdetail.vue"),
    props: true
  },
  {
    path:"/searchresult/:id",
    name:"Searchresult",
    component: () => import("../views/Searchresult.vue"),
    props: true
  },
  {
    path:"/albumdetail/:id",
    name:"Albumdetail",
    component: () => import("../views/Albumdetail.vue"),
    props: true
  },
  {
    path:"/singer/:id",
    name:"Singer",
    component: () => import("../views/Singer.vue"),
    props: true,
    children:[
      {
        path:"/singer/:id",
        name: "Singersong",
        component: () => import("../views/Singer/Singersong.vue"),
        props: true,
      },
      {
        path: "/singer/:id/album",
        name: "Singeralbum",
        component: () => import("../views/Singer/Singeralbum.vue"),
        props: true,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
