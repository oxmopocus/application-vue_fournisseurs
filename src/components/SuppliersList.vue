<template>
    <div class="mt-4">
        <h1>Liste des fournisseurs</h1>

        <div v-for="element in suppliers.data" v-bind:key="element.id">
            <supplier v-bind:name="element.name" v-bind:status="element.status" v-bind:checkedAt="element.checkedAt"/>
        </div>

    </div>
</template>
<script>
    import Supplier from "./Supplier";
    // import {format} from 'timeago.js';
    const axios = require('axios');

    export default {
        name: "SupplierList",
        components: {
            Supplier,
        },
        data() {
            return {
                suppliers: [],
                loading: false,
                error: null,
            }
        },
        created() {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response))
        }

    }
</script>
<style scoped>

</style>

