<template>
  <div class="home">
    <h1>todo</h1>
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