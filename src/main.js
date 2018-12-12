import Vue from 'vue';
import App from './App';
import router from './router';
import Message from './components/message';

Vue.config.productionTip = false;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
