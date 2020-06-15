import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from './views/Game.vue'
import Win from './views/Win.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
