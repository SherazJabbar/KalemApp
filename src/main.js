import './assets/main.css'
import { createApp, inject, reactive } from 'vue'
import { createPinia } from 'pinia'
import plugins from "./plugins"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueTelInput from 'vue-tel-input';




import App from './App.vue'
import router from './router'

// const GStore = reactive({ flashMessage: '' })

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// pinia.use(inject('GStore'))

// app.provide('GStore', GStore)
app.use(pinia)
app.use(router)
app.use(VueTelInput);
app.use(plugins);

app.mount('#app')
