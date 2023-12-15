import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App'


//componentes
import DetailComponent from '../src/components/DetailComponent'
import EditComponent from '../src/components/EditComponent'
import CreateComponent from '../src/components/CreateComponent'
import ListComponent from '../src/components/ListComponent'
import BasePrueba from '../src/components/BaseRuta'


// definir objeto de rutas -- configuracion de las rutas 
const routes = [

    {
        path: '/dashboard',
        component: BasePrueba,
        children: [
            {
                path: '', component: ListComponent,
            },
            {
                path: 'detalle/:anime', component: DetailComponent, name: 'detail'
            },
            {
                path: 'edit/:position', component: EditComponent, name: 'edit'
            },
            {
                path: 'create/', component: CreateComponent, name: 'create'
            }
        ]
    },
]

// crear objeto de rutas de VueRouter -- Objeto de vuerouter
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
