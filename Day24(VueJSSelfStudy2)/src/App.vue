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
  },
};
</script>

<template>
  <head></head>
  <body>
    <div>
      <button @click="increment">Increase</button>
      <p>Count : {{ count }}</p>
    </div>
  </body>
</template>

<style></style>
