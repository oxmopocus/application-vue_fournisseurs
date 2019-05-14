import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import Supplier from "./components/Supplier";
import addSupply from "./components/addSupply";

Vue.use(VueRouter);

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier},
    {path: '/addSupply', component: addSupply}
];

const router = new VueRouter({
    routes
});

//Vue.config.productionTip = false;

// bien charger l'import avant ma vue sinon il n'accède pas à la map !!!!!!!!

import * as VueGoogleMaps from 'vue2-google-maps'

import './registerServiceWorker'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAG7lTkCP8wsowucSS_YzzEy4PS4HnNejo',
    }
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');