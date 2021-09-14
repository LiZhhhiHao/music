<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
    <!-- <Playbar ></Playbar> -->
  </div>
</template>
<script>
import Nav from "./components/Nav";
// import Playbar from './components/Playbar'
export default {
  data() {
    return {
      backgroundColor: "",
      scontents:true
    };
  },
  components: {
    Nav,
    // Playbar
  },
  methods: {
  },
};
</script>
<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  
}
</style>
