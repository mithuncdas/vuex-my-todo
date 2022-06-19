<template>
    <div>
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="row">
                        <div class="col-lg-10 col-md-8 col-sm-8 col-8">
                            <input type="text" class="form-control" v-model="text">
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
export default {
    data(){
        return {
            text:'',
        }
    },
    methods:{
        addTask(e){
            e.preventDefault();
            
        }
    }
}
</script>
<style lang="css" scoped>


</style>