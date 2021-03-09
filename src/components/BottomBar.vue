<template>
  <div id="control-container">
    <button class="btn-tall" @click="focusMap">Focus</button>
    <button class="btn-tall">Closest</button>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  props: ['locationObj'],
  methods: {
    focusMap() {
      this.$emit('focus');
    },
  },
};
</script>

<style scoped>
#control-container {
  background: red;
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
  width: 30%;
  margin: 5% 2%;
}
</style>
