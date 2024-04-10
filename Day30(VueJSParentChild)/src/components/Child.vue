<template>
  <div class="container">
    <div class="left">
      <a href="">Zayar Lin Maung</a>
    </div>
    <div class="right">
      <a href="">About</a>
      <a href="">Projects</a>
      <a href="">Achievements</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding: 20px;
}
.left a {
  text-decoration: none;
  color: white;
  font-size: 30px;
}
.right a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
