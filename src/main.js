import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.use(VueRouter);

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/card', component: Card, name: 'card', meta: { requiresAuth: true } },
    { path: '/', component: HelloWorldRouter },
    { path: '/buttons', component: Buttons }
  ]
});

router.beforeEach((to, from, next) => {
  let authenticated = false
  if (to.meta.requiresAuth && !authenticated) {
    next('/login')
  } else {
    next()
  }

})

new Vue({
  router,
  VueRouter,
  template: '<App/>',
  components: { App }
}).$mount('#app');