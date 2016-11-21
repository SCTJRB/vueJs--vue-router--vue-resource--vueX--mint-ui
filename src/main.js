import Vue from 'vue';
import VueRouter from 'vue-router';
import Vueresource from 'vue-resource';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

//开启调试模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vueresource);
Vue.use(MintUI);

//引入状态管理
import store from './store/store'
//引入的模板文件
import home from './components/home.vue'
import shopping from './components/shopping.vue'
import action from './components/action.vue'
import my from './components/my.vue'
import detali from './components/public/detali.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[{
      path:'/',
      name:'home',
      component:home
  },{
      path:'/home',
      name:'home',
      component:home
    },{
      path:'/shopping',
      name:'shopping',
      component:shopping
  },{
      path:'/action',
      name:'action',
      component:action
  },{
      path:'/my',
      name:'my',
      component:my
  },{
      path:'/detali',
      name:'detali',
      component:detali
  }
  ]
});
new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app');
