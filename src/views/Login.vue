<template>
  <div id="login-container">
    <input type="email" class="input-text" id="first" placeholder="Email" />
    <input type="password" class="input-text" id="second" placeholder="Password" />
    <div id="third">
      <button class="btn-tall" @click="validateSignUp">Sign Up</button>
      <button class="btn-tall" @click="validateLogIn">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    validateSignUp() {
      // TODO
      this.$router.push('/map');
    },
    validateLogIn() {
      // TODO
      this.$router.push('/map');
    },
  },
};
</script>

<style scoped>
#login-container {
  /* background: #000000; */
  opacity: 65%;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  background-image: url(../assets/dragos.jpeg);
  background-size: 130% 100%;
  background-position-x: center;

  background-repeat: no-repeat;
  /* text-align: center; */
}
#first {
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
}
#second {
  position: fixed;
  top: 45%;
  left: 0;
  right: 0;
  margin: auto;
}
#third {
  position: fixed;
  top: 70%;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  text-align: center;
}

.input-text {
  background: #e5e5e5;
  border: 1px solid #00897b;
  height: 7%;
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0em;
  width: 50%;
  border-radius: 10px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #282828;
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  /* Firefox specific */
  opacity: 100%;
}

.btn-tall {
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  background: #aad6ac;

  padding-top: 3%;
  padding-bottom: 3%;

  border-radius: 10px;
  width: 40%;
  margin: 0 2%;
}
</style>
