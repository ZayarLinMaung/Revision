<template>
  <section class="flex justify-center w-screen h-screen items-center">
    <div
      class="flex flex-col items-center w-[400px] h-[400px] overflow-x-hidden border-[3px]-black"
    >
      <input
        v-model="addedTask"
        @keydown.enter="HandleEvent"
        type="text"
        placeholder="Enter a task"
        class="border-t-[3px] border-b-[3px] border-black text-black focus:outline-none text-center"
      />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }} <button v-on:click="deleteTask">Delete</button>
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
      if (this.addedTask) {
        this.tasks.push(this.addedTask);
        this.addedTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>
