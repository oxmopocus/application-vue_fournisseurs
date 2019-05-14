<template>
    <div class="mt-4">

        <router-link to="/suppliers">
            <select v-model="selected" class="custom-select col-md-1">
                       <option v-for="option in availableSelected" v-bind:value="option">{{ option }}</option>
            </select>
        </router-link>

       <!-- <p>Selected: {{ selected }}</p> -->

        <h1>Liste des fournisseurs</h1>

        <div v-for="element in listFilter()" v-bind:key="element.id">
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
                supply: [],
                suppliers: [],
                loading: false,
                error: null,
                selected:'OK',
                availableSelected:[true, false, 'ALL']
            }  
        },

        created() {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response.data))
        },

        methods: {
            listFilter: function () {
                return this.suppliers.filter(supplier => {
                    // console.log(this.selected, supplier.status);
                    if (supplier.status == this.selected) {
                        return supplier;
                    } else if (this.selected === "ALL") {
                        return supplier;
                    }
                    else {
                        return false
                    }
                });
            }
        }
    }
</script>
<style scoped>

</style>

