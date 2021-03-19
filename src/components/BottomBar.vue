<template>
  <div id="control-container">
    <button class="btn-tall" @click="focusMap">Focus</button>
    <button class="btn-tall" @click="findClosest">Closest</button>
    <button class="btn-tall" @click="logOut">Log Out</button>
  </div>
</template>

<script>
/* eslint-disable no-undef */

export default {
  methods: {
    focusMap() {
      this.$emit('focus');
    },
    findClosest() {
      this.$emit('closest');
    },
    logOut() {
      this.$emit('logout');
    },
  },
};
</script>

<style scoped>
#control-container {
  background: #282828;
  border: 1px solid #aad6ac;
  box-sizing: border-box;
}
.btn-tall {
  font-family: Roboto;
  font-weight: bold;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0em;
  text-align: center;
  background: #aad6ac;

  padding-top: 3%;
  padding-bottom: 3%;

  border-radius: 10px;
  width: 31%;
  margin: 3% 1%;
}
</style>
