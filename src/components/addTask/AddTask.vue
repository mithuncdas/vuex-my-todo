<template>
    <div>
        <div class="row">
            <div class="col-12">
                <form @submit="onSubmit">
                    <div class="row">
                        <div class="col-lg-10 col-md-8 col-sm-8 col-8">
                            <input type="text" class="form-control" v-model="title">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-4 col-4 text-end">
                            <button type="submit" class="btn btn-md btn-primary">Add Task</button>
                        </div>
                    </div>
                 </form>
            </div>
        </div>
       
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            title:'',
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.title);
            this.title= ''
        }
    }
}
</script>
<style lang="css" scoped>


</style>