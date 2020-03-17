import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Todoリストを作成する", isChecked: true },
      { id: 2, title: "StoreでToDoリストを管理する", isChecked: false }
    ],
    nextTodoId: 3
  },
  getters: {
    countTodos (state) {
      return state.todos.length()
    }
  },
  mutations: {
    addTodo (state, payload) {
      payload.id = state.nextTodoId
      state.todos.push(payload)
      state.nextTodoId++
      console.log(state.todos)
    },
    deleteTodo (state, payload) {
      state.todos = state.todos.filter( todo => todo.id != payload.id )
    }
  },
  actions: {
  },
  modules: {
  }
})
