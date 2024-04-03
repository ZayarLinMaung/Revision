<template>
  <h1>{{ name }}</h1>
  <button v-on:click="changeName">Click Me to Change Name</button>
  <h1>{{ count }}</h1>
  <button v-on:click="incrementBy1">Increase By 1</button>
  <button v-on:click="incrementBy10">Increase By 10</button>
  <button v-on:click="decrementBy1">Decrease By 1</button>
  <button v-on:click="decrementBy10">Decrease By 10</button>
</template>
<script>
export default {
  data() {
    return {
      name: "ZLM",
      count: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Jesus";
    },
    incrementBy1() {
      this.count += 1;
    },
    incrementBy10() {
      this.count += 10;
    },
    decrementBy1() {
      this.count -= 1;
    },
    decrementBy10() {
      this.count -= 10;
    },
  },
};
</script>
