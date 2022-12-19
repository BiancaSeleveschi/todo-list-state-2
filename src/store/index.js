import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "curatenie",
        isDone: false,
      },
      {
        title: "spalat haine",
        isDone: false,
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_NEW_TODO(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    addNewTodo(context, todo) {
      if (todo.title !== "") {
        context.commit("ADD_NEW_TODO", todo);
      }
    },
  },
  modules: {},
});
