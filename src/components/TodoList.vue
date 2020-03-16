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
    <p>
      <input type="text" placeholder="input todo..." v-model="newTodoTitle" @keyup.enter="addTodo">
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      newTodoTitle: '',
      todolist: this.todos,
      nextTodoId: this.nextId
    }
  },
  props: {
    todos: Array,
    nextId: Number
  },
  methods: {
    addTodo: function() {
      this.todolist.push({
        id: this.nextTodoId,
        title: this.newTodoTitle,
        isChecked: false
      })
      this.newTodoTitle = ''
      this.nextTodoId++
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