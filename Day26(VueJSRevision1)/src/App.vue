<template>
  <section>
    <div v-show="display" class="modal">
      <h1>{{ greet }} {{ name }}</h1>
      <div v-text="channel"></div>
      <div v-html="element"></div>
      <div v-html="link"></div>
      <h2 v-if="val >= 5">val is greater than or equal 5</h2>
      <h2 v-else="val < 5">val is less than 5</h2>
    </div>
  </section>
  <section>
    <button @click="showDisplay">Toggle</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      greet: "Hello",
      name: "ZLM",
      channel: "Genesis",
      element: "<b><p>Hello World</p></b>",
      link: "<a href='#'>This is a link</a>",
      val: 4,
      display: false,
    };
  },
  methods: {
    showDisplay() {
      this.display = !this.display;
    },
  },
};
</script>

<style>
section {
  display: grid;
  justify-content: center;
  margin-bottom: 30px;
}
.modal {
  width: 400px;
  box-shadow: 0px 0px 10px black;
  display: grid;
  justify-content: center;
  text-align: center;
}
button {
  padding: 10px;
  width: 100px;
  border-radius: 30px;
  border: 1px solid black;
  background-color: black;
  color: white;
}
</style>
