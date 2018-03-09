import Vue from 'vue';
window.Vue = require('vue');

require('jquery');
require('bootstrap');

Vue.component('dashboard', require('./components/dashboard.vue'));

const app = new Vue({
    el: '#app'
});
