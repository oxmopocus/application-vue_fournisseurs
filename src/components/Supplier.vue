<template>
    <div class=" container mt-4">
        <hr>
        <h1><strong>{{ name }}</strong></h1>

        <div class="KO" v-if="status === false">
            <h3><strong>A du stock ? KO</strong></h3>
        </div>

        <div class="OK" v-if="status  === true">
            <h3><strong>A du stock ? OK</strong></h3>
        </div>

        <h5>Date de dernière relevé des stocks : {{ checkedAt }} </h5>

        <div>
            <router-link to="/addSupply">
            <button type="button" class="btn col-md-2 mr-2 mt-4">
                <strong>Modifier</strong>
            </button>
            </router-link>
            
            <button @click="suppr" type="button" class="btn btn-izi col-md-2 mr-2 mt-4">
                <strong><a>Supprimer</a></strong>
            </button>
            
        </div>

        <hr>
    </div>
</template>

<script>
    const axios = require('axios')

    export default {
        name: 'Supplier',
        props: {
            name: String,
            status: Boolean,
            checkedAt: String,
            id : String,
        },
        methods: {
            suppr: function () {
                    axios
                        .delete('https://api-suppliers.herokuapp.com/api/suppliers/' + this.id)
                },
            }
    }

</script>


<style scoped>

    .btn-izi{
        color: red;
    }

    a{
        color: white;
    }

    .btn {
        color: red;
        border-color: red;
    }

    .btn:hover {
        color: #35495E;
        border-color: #35495E;
    }

    hr {
        width: 70%;
        border-width: 3px;
        border-color: #35495E;
    }

    .OK {
        color: #41B883;
    }

    .KO {
        color: red;
    }

</style>