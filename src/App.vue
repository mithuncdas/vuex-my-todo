<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 m-auto">
          <div class="card">
            <div class="card-header">
                <Header />
            </div>
            <div class="card-body">
             <AddTask />
             <TodoLists/>
            </div>
            <div class="card-footer">
               <Footer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import AddTask from './components/addTask/AddTask.vue'
import TodoLists from './components/todoLists/TodoLists.vue'
import Footer from './components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    AddTask,
    TodoLists,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
