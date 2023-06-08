import { createApp } from 'vue'
import App from './App.vue'
import { Button, Tabbar, TabbarItem } from 'vant'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

createApp(App).use(Button).use(Tabbar).use(TabbarItem).use(store).use(router).mount('#app')
