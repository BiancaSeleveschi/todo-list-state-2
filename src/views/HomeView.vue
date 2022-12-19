<template>
  <div>
    <!--    componenta TodoForm se foloseste de actiunea addToDo ca sa adauge todo-ul in store-->
    <div>
      <input v-model="newTodo.title" placeholder="to do" type="text" />
      <button @click="addNewTodo">Add</button>
    </div>
    <div v-for="(todo, index) in todos" v-bind:key="index">
      <!--      componenta Todo se foloseste de store ca sa modifice starea unui todo: isDone, done-->
      <h3>{{ todo.title }}</h3>
      <button>{{ todo.isDone ? "Undone" : "Done" }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      todos: [],
      newTodo: { title: "", isDone: false },
    };
  },
  mounted() {
    this.todos = this.$store.state.todos;
  },
  methods: {
    addNewTodo() {
      // this.todos.push(this.newTodo);
      this.$store.dispatch("addNewTodo", this.newTodo);
      this.newTodo = { title: "", isDone: false };
    },
  },
};
</script>

<style></style>
