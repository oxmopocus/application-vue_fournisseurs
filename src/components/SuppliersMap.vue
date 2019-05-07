<template>
    <div class="mt-4 mb-4 container">
        <h1> Map des fournisseurs </h1>
        <gmap-map
                :center="{lat:46, lng:2}"
                :zoom="6"
                style="width: 100%; height: 700px"
        >
            <GmapMarker
                    :key="id"
                    v-for="(m, id) in suppliers"
                    :position='({lat:m.latitude, lng:m.longitude})'
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            />

        </gmap-map>

    </div>


</template>

<script>
    export default {
        name: "SuppliersMap.vue",

        data() {
            return {
                suppliers: [
                    {
                        id: 1,
                        latitude: 44.93333,
                        longitude: 4.9
                    },
                    {
                        id: 2,
                        latitude:  45.764,
                        longitude: 4.8357
                    }
                ]
            }
        }
    }


</script>


<style scoped>

</style>