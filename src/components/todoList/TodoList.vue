<template>
    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
        <div class="card">
            <div class="card-body task-item">
                <p class="details">This is text for meeting, asdfksd asdflsad fasdfsdf</p>
                <button class="delete-button btn btn-sm btn-danger mt-2">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TodoList',
    data(){
        return{

        }
    }
}
</script>
<style lang="css" scoped>
    .task-item{
        position: relative;
        color: white;
        background-color: rgb(27, 29, 28);
    }
    .delete-button{
        position: absolute;
        top: 88%;
        left: 95%;
        transform: translate(-88%,-90%);
    }
</style>