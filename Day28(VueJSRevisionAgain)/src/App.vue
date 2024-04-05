<template>
  <body>
    <div v-if="login === false" class="container">
      <input v-model="username" type="text" placeholder="Enter username" />
      <input v-model="password" type="text" placeholder="Enter password" />
      <h4 v-show="stat === false">Login Failed!!!</h4>
      <button v-on:click="auth">Login</button>
    </div>
    <h1 v-if="login === true">Welcome {{ username }}</h1>
  </body>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      account: [
        {
          name: "ZLM",
          pwd: "123",
        },
        {
          name: "ASD",
          pwd: "456",
        },
        {
          name: "QWE",
          pwd: "789",
        },
      ],
      password: "",
      login: false,
      stat: true,
    };
  },
  methods: {
    auth() {
      for (let i = 0; i < this.account.length; i++) {
        if (
          this.username === this.account[i].name &&
          this.password === this.account[i].pwd
        ) {
          this.login = true;
          break;
        }
        this.login = false;
        this.stat = false;
      }
    },
  },
};
</script>
<style>
body {
  height: 100vh;
  widows: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 450px;
  box-shadow: 0px 0px 10px black;
  padding: 70px;
}
h4 {
  font-weight: normal;
  color: red;
}
input {
  padding: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  border-bottom: 2px solid black;
  text-align: center;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: black;
}
button {
  margin-top: 30px;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 30px;
  width: 150px;
  border: none;
  font-size: 30px;
  cursor: pointer;
}
</style>
