<template>
  <div class="home">
    <h1>todo</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from '../components/TodoList'
export default {
  name: 'Home',
  components: {
    TodoList
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