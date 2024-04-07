<template>
  <section class="flex justify-center w-screen h-screen items-center bg-black">
    <div class="flex shadow-2xl shadow-cyan-300 w-[90vw] h-[90vh]">
      <div
        class="flex flex-col justify-center border-r-[2px] border-r-cyan-200 overflow-x-hidden w-[50vw] items-center"
      >
        <h1 class="text-cyan-200 text-[40px] text-center">To-Do List 2.0</h1>
        <input
          v-model="addedTask"
          @keydown.enter="HandleEvent"
          type="text"
          placeholder="Enter a task"
          class="border-b-[3px] border-cyan-200 bg-transparent text-cyan-200 focus:outline-none text-center items-center mt-3 w-[210px] text-xl"
        />
      </div>
      <ul
        class="overflow-y-scroll overflow-x-hidden w-[82vw] customscrollbar pl-5 pt-3"
      >
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="text-cyan-200 text-xl"
        >
          {{ task }}
          <button v-on:click="editTask(index)" class="ml-3 mr-3">Edit</button>
          <button v-on:click="deleteTask(index)">Delete</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      addedTask: "",
      tasks: [],
    };
  },
  methods: {
    HandleEvent() {
      if (this.addedTask != "") {
        this.tasks.push(this.addedTask);
        this.addedTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      const editedTask = prompt("Edit the Task", this.tasks[index]);
      if (editedTask.trim() !== "" && editedTask !== null) {
        this.tasks[index] = editedTask;
      }
    },
  },
};
</script>
<style>
.customscrollbar::-webkit-scrollbar {
  width: 0px;
}
</style>
