import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icons/iconfont.css";
import axios from "axios";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.prototype.router = router; //路由配置
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next(); //noed.js  next函数主要负责将控制权交给下一个中间件
});

Vue.config.productionTip = false;
Vue.use(ElementUI, axios);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
