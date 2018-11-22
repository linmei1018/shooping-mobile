<template>
  <div>
    <mt-tabbar fixed v-model="selected">
      <router-link to="/home" tag="div">
        <mt-tab-item id="首页">

          首页
        </mt-tab-item>
      </router-link>
      <router-link to="/shopping_cart" tag="div">
        <mt-tab-item id="购物车">

          购物车
        </mt-tab-item>
      </router-link>

      <router-link to="/collect" tag="div">
        <mt-tab-item id="收藏">

          收藏
        </mt-tab-item>
      </router-link>
      <router-link to="/my" tag="div">
        <mt-tab-item id="我的">

          我的
        </mt-tab-item>
      </router-link>


    </mt-tabbar>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected:'首页'
      }
    }
  }
</script>
<style>
  .mint-tabbar > div{
    flex:1;
    height:40px;

  }
</style>
