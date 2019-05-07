<template>
    <div class="mt-4 mb-4 container">
        <h1> Map des fournisseurs </h1>
        <gmap-map
                :center="{lat:46, lng:2}"
                :zoom="6"
                style="width: 100%; height: 700px"
        >
        </gmap-map>

    </div>


</template>

<script>
    export default {
        name: "SuppliersMap.vue"
    }
</script>



<style scoped>

</style>