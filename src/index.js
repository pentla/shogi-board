import Vue from 'vue';
import Vuex from 'vuex';
import store from './store'
import './assets/css/style.css';

Vue.use(Vuex);

window.onload = () => {
  new Vue({
    el: '#app',
    store
  })
}