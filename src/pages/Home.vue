<template>
  <div class="home">
    <h1>Vuex Todo App</h1>
    <p>{{ numOfTodos }} todos and remaining {{ numOfRemainingTodos }} todos.</p>
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import store from '../store/index'
import TodoList from '../components/TodoList'
export default {
  name: 'Home',
  components: {
    TodoList
  },
  computed: {
    todos () {
      return store.state.todos
    },
    numOfTodos () {
      return store.getters.countTodos
    },
    numOfRemainingTodos () {
      return store.getters.countTodos - store.getters.countDoneTodos
    }
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