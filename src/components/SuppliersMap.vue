<template>
    <div class="mt-4 mb-4 container">
        <h1 class="mb-4"> Map des fournisseurs </h1>
        <GmapMap
                :center="geoloc"
                :zoom="9"
                style="width: 100%; height: 700px"
        >
            <GmapMarker
                    :key="id"
                    v-for="(m, id) in suppliers"
                    :position="({lng: parseFloat(m.longitude), lat: parseFloat(m.latitude)})"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />

        </GmapMap>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        name: "SuppliersMap.vue",
        data() {
            return {
                suppliers: [],
                loading: false,
                error: null,
                geoloc: {lat: null, lng: null}
            }
        },
        created() {
            axios
                .get('https://api-suppliers.herokuapp.com/api/suppliers')
                .then(response => (this.suppliers = response.data))
        },
        mounted() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    // console.log(position);0
                    this.geoloc = {lat: position.coords.latitude, lng: position.coords.longitude};
                });
            }
        }
    }

</script>

<style scoped>

</style>