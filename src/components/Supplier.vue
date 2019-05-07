<template>
    <div class=" container mt-4">
        <hr>
        <h1><strong>
            {{ name }}
        </strong></h1>

        <div class="KO" v-if="status === false">
            <h3><strong>
                A du stock ? KO
            </strong></h3>
        </div>
        <div class = "OK" v-if="status  === true">
            <h3><strong>
                A du stock ? OK
            </strong></h3>
        </div>

        <h5>Date de dernière relevé des stocks :
            {{ checkedAt }}
        </h5>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Supplier',
        data() {
            return {
                name: 'Fournisseur 92I',
                status: true, // est ce qu'il y a du stock
                checkedAt: new Date().toLocaleString() // date de la dernière mise à jour du stock
            }
        }
    }

</script>



<style scoped>

    hr {
        width: 55%;
        border-width: 3px;
        border-color: #35495E;
    }

    .OK{
        color: #41B883;
    }

    .KO{
        color: red;
    }

</style>