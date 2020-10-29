import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import Dong from './components/Dong.vue'
import Dong2 from './components/Dong2.vue'


const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Dong},
        {path:'/xxx',component:Dong2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
