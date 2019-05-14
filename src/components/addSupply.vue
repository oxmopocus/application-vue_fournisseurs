<template>
    <div class="container mt-5 border border-success rounded">
        <h1 class="mt-3 mb-4">Ajouter un fournisseur</h1>
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" id="name" placeholder="Supplier name">
            </div>

            <div class="form-group">
                <label>Stock</label>
                <input type="text" class="form-control" id="status" placeholder="True or false">
            </div>

            <div class="form-group">
                <label>Latitude</label>
                <input type="text" class="form-control" id="lat" placeholder="10.10">
            </div>

            <div class="form-group">
                <label>Longitude</label>
                <input type="text" class="form-control" id="lng" placeholder="11.11">
            </div>
            <button type="submit" class="btn btn-secondary mb-3">Valider</button>
        </form>
    </div>
</template>

<script>

    export default {
        name: "addSupply"
    }
</script>

<style scoped>
    .container {
        border-color: #41B883;
        width: 30%;
    }

    .border{
        background-color: #41B883;
    }

    h1{
        color: white;
    }

    .btn-secondary{
        background-color: #35495E;
        color: white;
    }
</style>