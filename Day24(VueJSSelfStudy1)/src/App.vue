<template>
  <div>
    <button @click="toggleMessage">Click Me</button>
    <p v-if="showMessage">Hello World</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMessage: false,
    };
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
  },
};
</script>
<style></style>
