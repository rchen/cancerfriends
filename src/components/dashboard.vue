<style scoped>
    /*.container {*/
        /*background-color: red;*/
    /*}*/
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>
                <foodrecords></foodrecords>
            </div>
        </div>
    </div>
</template>

<script>
    import foodrecords from './foodrecords.vue'

    export default {
        mounted: function () {
        },
        methods: {
            foodRecordsAction: function () {
                $('#myModal').on('shown.bs.modal', function () {
                    $('#myInput').focus()
                })
                console.log('food Recrods')
            }
        },
        components: {
            foodrecords,
        }
    }
</script>
