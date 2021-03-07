<template>
  <div class="top-container">
    <div id="first">
      <button class="btn-long btn-1" @click="navigateToMap">Start</button>
    </div>
    <div id="second">
      <button class="btn-long" @click="navigateToLogin">Log In</button>
    </div>
    <!-- <img src="../assets/earth.png" alt="" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Home View',
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login');
    },
    navigateToMap() {
      this.$router.push('/map');
    },
  },
};
</script>

<style scoped>
.btn-long {
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1.5rem;
  letter-spacing: 0em;
  text-align: center;
  line-height: 1;

  background: #aad6ac;

  border: 3px solid #000000;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.25);

  border: 0.1px solid #000000;
  border-radius: 10px;

  width: 45%;
}
#first {
  position: fixed;
  top: 50%;
  width: 100%;
  text-align: center;
}
#second {
  position: fixed;
  top: 60%;
  width: 100%;
  text-align: center;
}
/* CSS bullshit to make div full screen */
.top-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  background-image: url(../assets/earth-whiten.png);
  background-size: 125% 100%;
  background-position-x: center;

  background-repeat: no-repeat;
}
</style>
