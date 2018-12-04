<template>
  <div class="whole_shop_view">
    <div v-if="orderTransactionList.length<=0" class="Empty_order">
      <img  src="../../../../assets/other_icon/empty_order.png" />
      <p style="color:grey;">暂无订单</p>
    </div>
    <ul v-else>
      <li  v-for="item in orderTransactionList" :key="item.order_id">
        <div class="whole_shop_title">
          <p>下单时间：<span>{{ MenuComponent }}</span></p>
          <a>{{ item.deal_done }}</a>
        </div>
        <Row class='whole-shop-list' type="flex" justify="space-between">
          <Col span="6">
            <img class='shop-img' :src="item.img" />
          </Col>
          <Col span="17">
            <div class="shop_introduce">
              <p>{{ item.shop_introduce }}</p>
              <span>{{ item.shop_price }}</span>
            </div>
            <div class="shop_remark">
              <p>{{ item.shop_remark }}</p>
              <span>x{{ item.shop_num }}</span>
            </div>
          </Col>
        </Row>
        <p class="total_sum">合计：<span style="color:red;">{{ item.shop_total|formatMoney }}</span></p>
        <div class="look_logistics">
          <Button size="small">查看物流</Button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      MenuComponent:{
        type:String,
        default:''
      },
      orderTransactionList:{
        type:Array,
        default:function () {
          return []
        }
      },
    },
    data(){
      return{

      }
    },
    filters:{
      formatMoney(value){
        value = Number(value);
        return "￥"+ value.toFixed(2);
      }
    },
    mounted(){
      // console.log(this.MenuComponent);
    }
  }
</script>
<style lang="less">
  .whole_shop_view{
    li{
      background:#fff;
      margin-bottom:10px;
      .whole_shop_title{
        height:40px;
        line-height:40px;
        padding:0 10px;
        p{
          float:left;
        }
        a{
          color:red;
          float:right;
        }
      }
      .whole-shop-list{
        background:#fafafa;
        padding:5px 10px;
        .shop-img{
          width:80px;
          height:90px;
          display: block;
        }
        .shop_introduce{  //商品介绍
          height:30px;
          p{
            float:left;
            width:70%;
            text-align:left;
            font-weight:bold;
          }
          span{
            float:right;
          }
        }
        .shop_remark{
          p{
            font-size:10px;
            color:grey;
            float:left;
          }
          span{
            float:right;
          }
        }
      }
      .total_sum{
        height:30px;
        line-height:30px;
        padding-right:10px;
        background:#fff;
        width:100%;
        text-align:right;
        border-bottom:1px solid #eee;
      }
      .look_logistics{
        height:40px;
        line-height:40px;
        background:#fff;
        text-align:right;
        padding-right:10px;
      }
    }
    .Empty_order{
      margin-top:200px;
      background:#fafafa;
    }
  }
</style>
