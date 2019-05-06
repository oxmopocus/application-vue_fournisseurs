<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Que voulez-vous faire ?"/>
        <button v-on:click="onMapClick" class="carte">Afficher la carte des fournisseurs</button>
        <button v-on:click="onSuppliersListClick" class="liste">Consulter la liste des fournisseurs</button>
    </div>
</template>

<script>

    import HelloWorld from './components/HelloWorld.vue'
    import SuppliersList from './components/SuppliersList.vue'
    import SuppliersMap from './components/SuppliersMap.vue'
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter);



    export default {
        name: 'app',
        components: {
            HelloWorld,
            SuppliersList,
            SuppliersMap,
        },

        methods: {
            onMapClick: function () {
                alert('Affiche carte')
            },

            onSuppliersListClick: function () {
                alert('Affiche liste')
            },
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .carte {
        margin-right: 10px;
    }

    .liste {
        margin-left: 10px;
    }


</style>
