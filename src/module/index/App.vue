<template>
  <div id="app">
    <img src="../../common/img/logo.png">
    <img src="../../common/img/timg.jpg">
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../../components/HelloWorld'
export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
