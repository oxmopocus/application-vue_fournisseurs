<template>
    <div class="container mt-5 mb-5 border border-success rounded">
        <h1 class="mt-3 mb-4"><strong>Ajouter un fournisseur</strong></h1>
        <form @submit="addSupply">

            <div class="form-group">
                <label>Name</label>
                <input v-model="nameSupplier" type="text" class="form-control" id="name" placeholder="Supplier name">
            </div>

            <div class="form-group">
                <label>Stock</label>
                <input v-model="statusSupplier" type="text" class="form-control" id="status"
                       placeholder="True or false">
            </div>

            <div class="form-group">
                <label>Latitude</label>
                <input v-model="latSupplier" type="text" class="form-control" id="lat" placeholder="10.10">
            </div>

            <div class="form-group">
                <label>Longitude</label>
                <input v-model="lngSupplier" type="text" class="form-control" id="lng" placeholder="11.11">
            </div>

            <button type="submit" class="btn btn-secondary mb-3">Valider</button>

        </form>
    </div>
</template>

<script>
    const axios = require('axios')
    export default {
        name: 'addSupplyList',
        data: function () {
            return {
                suppliers: [],
                nameSupplier: '',
                statusSupplier: '',
                latSupplier: '',
                lngSupplier: '',
            }
        },
        methods: {
            addSupply: function () {

                let date = new Date().toISOString();

                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name: this.nameSupplier,
                    checkedAt: date,
                    status: this.statusSupplier,
                    latitude: this.latSupplier,
                    longitude: this.lngSupplier,
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
                event.preventDefault();
            }
        },
    }
</script>

<style scoped>

    label{
        font-style: italic;
        color: white;
    }

    .container {
        border-color: #41B883;
        width: 30%;
    }

    .border {
        background-color: #41B883;
    }

    h1 {
        color: white;
    }

    .btn-secondary {
        background-color: #35495E;
        color: white;
    }

</style>