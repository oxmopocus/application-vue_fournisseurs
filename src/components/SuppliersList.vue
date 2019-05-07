<template>
    <div class="mt-4">
        <h1>Liste des fournisseurs</h1>
        <div v-for="element in suppliers" v-bind:key="element.id">
            <supplier v-bind:name="element.name" v-bind:status="element.status" v-bind:checkedAt="element.checkedAt">
            </supplier>
    </div>
    </div>
</template>

<script>
    import Supplier from "./Supplier";
    import { format, render, cancel, register } from 'timeago.js';

    export default {
        name: "SupplierList",
        components: {
            Supplier,
        },
        data() {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "Fournisseur 1",
                        status: true,
                        checkedAt: format('2019-05-07') // new Date().toLocaleString('fr-FR', {timeZone:'UTC'})
                    },
                    {
                        id: 2,
                        name: "Fournisseur 2",
                        status: false,
                        checkedAt: format('2019-05-07') // new Date().toLocaleString('fr-FR', {timeZone:'UTC'})
                    }
                ]
            }
        }
    }


</script>


<style scoped>

</style>