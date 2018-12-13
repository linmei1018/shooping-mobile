<template>
  <div class="main">
    <div class="main-header">
      123456
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <FooterView></FooterView>
  </div>

</template>
<script>
  import FooterView from './FooterView'
  export default {
    name:'Main',
    components:{
      FooterView
    }
  }
</script>
