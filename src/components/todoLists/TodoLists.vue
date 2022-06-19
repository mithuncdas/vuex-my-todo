<template>
    <div>
        <div class="row mt-4">
            
                <TodoList/>
                <TodoList/>
                <TodoList/>
            
        </div>
    </div>
</template>
<script>
import TodoList from '../todoList/TodoList.vue'
export default {
    name: 'TodoLists',
    components:{
        TodoList
    }
}
</script>
<style lang="">
    
</style>