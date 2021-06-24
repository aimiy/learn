import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false

let imageIsExist = function(url){
  return new Promise((resolve) => {
    let img = new Image();
    img.onload = function () {
      if(this.complete == true){
        resolve(true);
        img = null;
      }
    }
    img.onerror = function () {
      resolve(false);
      img = null;
    }
    img.src = url;
  });
}
Vue.directive('real-img',async function (el,binding) {
  let imgUrl = binding.value;
  if(imgUrl){
    let exist = await imageIsExist(imgUrl);
    if(exist){
      el.setAttribute('src',imgUrl);
    }
  }
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
