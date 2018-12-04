<template>
  <div>
    <mt-tabbar fixed v-model="selected">
      <router-link to="/home" tag="div">
        <mt-tab-item id="首页">
          <Icon type="md-home" size="20" />
          <p>首页</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/shopping_cart" tag="div">
        <mt-tab-item id="购物车">
          <Icon type="md-cart" size="20"  />
          <p>购物车</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/collect" tag="div">
        <mt-tab-item id="收藏">
          <Icon type="md-star" size="20"  />
          <p>收藏</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/my" tag="div">
        <mt-tab-item id="我的">
          <Icon type="md-person"  size="20" />
          <p>我的</p>
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
    },
    watch: {
      selected: function (val) {
        this.$router.push({
          val,
          query: {
            t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
          }
        });
      }
    }
  }
</script>
<style>
  .mint-tabbar{
    background-color:#fff;
  }
  .mint-tabbar > div{
    flex:1;
    height:40px;

  }
  a{
    color:grey;
  }
  a:hover {
    color: #d4237a;
  }
</style>
