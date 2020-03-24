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
      <input type="text" placeholder="input todo..." class="input-form" v-model="newTodoTitle" @keyup.enter="registerTodo">
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
li {
  list-style: none;
}
.checked {
  text-decoration: line-through;
}
.input-form {
  border: 0;
  padding: 10px;
  font-size:1.2em;
  color:#2c3e50;
  border:solid 1px #2c3e50;
  margin:0 0 20px;
  width:300px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -moz-box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.input-form:focus {
  border:solid 1px #FFD41D;
}
</style>