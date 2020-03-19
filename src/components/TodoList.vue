<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <label v-bind:class="{ checked: todo.isChecked }">
          <input type="checkbox" v-model="todo.isChecked">
          {{ todo.title }}
        </label>
        <input type="button" value="DELETE" @click="removeTodo(todo.id)">
      </li>
    </ul>
    <p>
      <input type="text" placeholder="input todo..." v-model="newTodoTitle" @keyup.enter="registerTodo">
    </p>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'TodoList',
  data () {
    return {
      newTodoTitle: ''
    }
  },
  props: {
    todos: Array
  },
  methods: {
    registerTodo: function () {
      store.commit('addTodo', {
        title: this.newTodoTitle,
        isChecked: false
      })
      this.newTodoTitle = ''
    },
    removeTodo: function ( todoId ) {
      store.commit('deleteTodo', {
        id: todoId
      })
    }
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