import Vue from 'vue';
import Vuelidate from 'vuelidate';
import vSelect from 'vue-select'
import PrettyCheckbox from 'pretty-checkbox-vue';
import App from "./App.vue";

Vue.component('v-select', vSelect);
Vue.use(PrettyCheckbox);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
import './assets/css/bootstrap.scss';
import './assets/css/style.scss';
new Vue({
  render: h => h(App)
}).$mount("#app");