<template>
  <div>
    <div class="header">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img class="swiper_img" src="../../../assets/Sowing_map/swiper01.png" /></mt-swipe-item>
        <mt-swipe-item><img class="swiper_img" src="../../../assets/Sowing_map/swiper02.png" /></mt-swipe-item>
        <mt-swipe-item><img class="swiper_img" src="../../../assets/Sowing_map/swiper03.png" /></mt-swipe-item>
      </mt-swipe>
      <div class="header_h">
          <div class="back test"><router-link to="/home"><Icon type="ios-arrow-back" size="16" style="color:#fff;" /></router-link></div>
          <div class="cart_more">
            <div class="cart"><Icon type="md-cart" size="16" style="color:#fff;"/></div>
            <div class="more"><Icon type="ios-more" size="16" style="color:#fff;"/></div>
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .header{
    width:100%;
    height:200px;
    position:relative;
    margin-top:-40px;
    .header_h{
      height:26px;
      width:100%;
      position:fixed;
      top:0;
      left:0;
      padding:0 10px;
      line-height:26px;
      .back{
        float:left;
      }
      .test,.cart,.more{
        background:grey;
        width:22px;
        height:22px;
        border-radius:22px;
        line-height:22px;
        text-align:center;
        margin-top:10px;
      }
      .cart_more{
        float:right;
        .more{
          margin-left:10px;
        }
      }
    }
  }
</style>
