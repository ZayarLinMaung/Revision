<template>
  <body>
    <div class="container">
      <h1>Random Quote Generator</h1>
      <h2>{{ quote }}</h2>
      <button v-on:click="generateQuote">Generate a Quote</button>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    async generateQuote() {
      try {
        const reply = await fetch("https://api.quotable.io/random");
        if (!reply.ok) {
          throw new Error("Failed to load quote");
        }
        const data = await reply.json();
        this.quote = data.content;
      } catch (error) {}
    },
  },
};
</script>
<style></style>
