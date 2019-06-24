import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Slider,
  SliderItem
} from 'vue-ydui/dist/lib.rem/slider'
import Axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
Vue.use(VueCookies)
Vue.use(VueLazyLoad)
Vue.prototype.$ajax = Axios
let instance = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
instance.cancelQueue = [];
Vue.prototype.$ajax.interceptors.request.use(config => {
  config.cancelToken = new Axios.CancelToken((cancel) => {
    instance.cancelQueue.push({
      cancel
    })
  })
  return config
})
router.beforeEach(async (to, from, next) => {
  instance.cancelQueue.forEach((ele, index) => {
    ele.cancel()
    delete instance.cancelQueue[index];
  })
  instance.searchQuery = ''
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})