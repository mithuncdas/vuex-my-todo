<template>
    <div>
        <div class="row mt-4">
            <TodoList v-for="todo in allTodos" :key="todo.id" :todo="todo"/>
        </div>
    </div>
</template>
<script>
import TodoList from '../todoList/TodoList.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'TodoLists',
    components:{
        TodoList
    },
    methods:{
        ...mapActions(['fetchTodos'])
    },
    computed:{
       ...mapGetters(['allTodos'])
    },
    created(){
        this.fetchTodos();
    }
}
</script>
<style lang="">
    
</style>