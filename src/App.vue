<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld class="mb-4" msg="Que voulez-vous faire ?"/>
        <!-- <button v-on:click="onMapClick" class="carte">Afficher la carte des fournisseurs</button>
         <button v-on:click="onSuppliersListClick" class="liste">Consulter la liste des fournisseurs</button>

       <SuppliersList></SuppliersList>
         <SuppliersMap></SuppliersMap>
         <router-view></router-view>
         -->
        <router-link to="/suppliers">
            <button type="button" class="btn mr-2 mt-4">
                <strong>Afficher la liste</strong>
            </button>
        </router-link>

        <router-link to="/map">
            <button type="button" class="btn ml-2 mt-4">
               <strong>Afficher la map</strong>
            </button>
        </router-link>

        <router-link to="/supplier">
            <button type="button" class="btn ml-3 mt-4">
               <strong>Détail fournisseur</strong>
            </button>
        </router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import SuppliersList from './components/SuppliersList.vue'
    import SuppliersMap from './components/SuppliersMap.vue'
    import Supplier from './components/Supplier.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            SuppliersList,
            SuppliersMap,
            Supplier,
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
        margin-left: 10px;
    }

    .liste {
        margin-right: 10px;
    }

    .btn {
        color: #41B883;
        border-color: #41B883;
    }

    .btn:hover {
        color: #35495E;
        border-color : #35495E;
    }



</style>


