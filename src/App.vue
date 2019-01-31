<template>
  <div id="app">
    <myButton>你好啊</myButton>
    <div id="nav">
      <router-link to="/news">新闻</router-link> |
      <router-link to="/product">产品</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentStep: 0
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
