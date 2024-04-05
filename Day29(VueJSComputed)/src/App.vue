<template>
  <div>
    <h1>Original Message {{ originalMessage }}</h1>
    <h2>Uppercase Message {{ uppercaseMessage }}</h2>
  </div>
  <div>
    <input v-model="originalVal" type="text" />
    <h1>Squared Result{{ squared }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      originalMessage: "Hello World",
      originalVal: "",
    };
  },
  computed: {
    uppercaseMessage() {
      return this.originalMessage.toUpperCase();
    },
    squared() {
      return this.originalVal ** 2;
    },
  },
};
</script>
<style></style>
