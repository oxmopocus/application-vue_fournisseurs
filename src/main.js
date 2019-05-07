import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import Supplier from "./components/Supplier";

Vue.use(VueRouter);

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier}
];

const router = new VueRouter({
    routes
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');