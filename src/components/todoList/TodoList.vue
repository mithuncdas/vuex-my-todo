<template>
    <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2">
        <div class="card" @dblclick="onDoubleClick(todo)">
            <div class="card-body task-item" :class="{'task-item-green':todo.completed}">
                <p class="details">{{todo.title}}</p>
                <button @click="deleteTodo(todo.id)" class="delete-button btn btn-sm btn-danger mt-2">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'TodoList',
    props:['todo'],
    data(){
        return{

        }
    },
    methods:{
        ...mapActions(['deleteTodo','updateTodo']),
        onDoubleClick(todo){
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            this.updateTodo(updTodo)
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
    .task-item-green{
        background-color: green;
    }
    .delete-button{
        position: absolute;
        top: 88%;
        left: 95%;
        transform: translate(-88%,-90%);
    }
</style>