<template>
  <div>
    <h1>To-Do List</h1>
    <input
      v-model="newTask"
      type="text"
      @keyup.enter="addTask"
      placeholder="Enter a task"
    />
    <button v-on:click="addTask">Add Task</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input
          v-model="tasks[index]"
          type="text"
          @keyup.enter="saveTask(index)"
        />
        <button v-on:click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  mounted() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask);
        this.saveToLocal();
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveToLocal();
    },
    saveTask(index) {
      if (this.tasks[index]) {
        this.tasks[index] = this.tasks[index];
        this.saveToLocal();
      }
    },
    saveToLocal() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>
<style>
ul {
  list-style-type: decimal;
}
ul li input {
  border: none;
}
ul li input:focus {
  outline: none;
  border-bottom: 2px dashed black;
}
ul li button {
  margin-left: 10px;
}
</style>
