<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<template>
  <head></head>
  <body>
    <div>
      <p>Count : {{ count }}</p>
      <button @click="increment">Increase</button>
      <button @click="decrement">Decrease</button>
    </div>
  </body>
</template>

<style></style>
