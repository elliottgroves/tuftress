import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'

import './scss/base.scss'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Button', Button)
app.component('Card', Card)
app.component('Menubar', Menubar)

app.mount('#app')
