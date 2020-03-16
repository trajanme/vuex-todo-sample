<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label v-bind:class="{ checked: todo.isChecked }">
          <input type="checkbox" v-model="todo.isChecked">
          {{ todo.title }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array
  }
}
</script>

<style scoped>
ul {
  text-align: left;
}
.checked {
  text-decoration: line-through;
}
</style>