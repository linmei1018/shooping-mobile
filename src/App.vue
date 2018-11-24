<template>
  <div id="app">
    <router-view/>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import FooterView from './views/FooterView'
export default {
  name: 'App',
  components:{
    FooterView
  }
}
</script>

<style>
  body{
    margin:0;
    width:100%;
    height:100%;
    background:#fafafa;
  }
  li{
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:40px 0;
  background:#fff;
}
</style>
