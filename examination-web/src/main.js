import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './element.scss'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'


import App from './App.vue'

Vue.use(ElementUI, {size: 'medium'});

new Vue({
    el: '#app',
    render: h => h(App)
})
