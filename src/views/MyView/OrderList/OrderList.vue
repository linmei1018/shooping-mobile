<template>
  <div class="order_list">
    <mt-header fixed title="订单列表" >
      <router-link to="/my" slot="left"><Icon type="ios-arrow-back" /></router-link>
    </mt-header>
    <div class="order_list_content">
      <!-- -->
      <Menu mode="horizontal" :theme="theme1" class="menu_tab" @on-select="changeTab" :active-name="MenuComponent">
        <Row type="flex" justify="space-around">
          <Col span="4" v-for="item in menuList" :key="item.name">
            <MenuItem :name="item.name">{{ item.text }}</MenuItem>
          </Col>
        </Row>
      </Menu>
    </div>
    <div class="router_content">
      <div v-if="orderTransactionList.length<=0" class="Empty_order">
        <img  src="../../../assets/other_icon/empty_order.png" />
        <p style="color:grey;">暂无订单</p>
      </div>
      <ul v-else>
        <li  v-for="item in orderTransactionList" :key="item.order_id">
          <div class="whole_shop_title">
            <p>下单时间：<span>{{ item.order_time }}</span></p>
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
  </div>
</template>
<script>
  const Whole = resolve => require(['@/views/MyView/OrderList/component/Whole'], resolve);
  // const PendingPayment = resolve => require(['@/views/MyView/OrderList/component/PendingPayment'], resolve);
  // const ToBeShipped = resolve => require(['@/views/MyView/OrderList/component/ToBeShipped'], resolve);
  // const Shipped = resolve => require(['@/views/MyView/OrderList/component/Shipped'], resolve);
  // const Completed = resolve => require(['@/views/MyView/OrderList/component/Completed'], resolve);
  export default {
    // components: { Whole},
    data(){
      return{
        theme1:'light',
        MenuComponent: '',
        type:'',
        menuList:[],
        orderTransactionList:[],

      }
    },
    filters:{
      formatMoney(value){
        value = Number(value);
        return "￥"+ value.toFixed(2);
      }
    },
    methods:{
      changeTab(name) {
        switch (name) {
          case 'Whole':
            this.MenuComponent = 'Whole';
            this.orderTransactionList = this.menuList[0].orderTransactionList;
            break;
          case 'PendingPayment':
            this.MenuComponent = 'PendingPayment';
            this.orderTransactionList = this.menuList[1].orderTransactionList;
            break;
          case 'ToBeShipped':
            this.MenuComponent = 'ToBeShipped';
            this.orderTransactionList = this.menuList[2].orderTransactionList;
            break;
          case 'Shipped':
            this.MenuComponent = 'Shipped';
            this.orderTransactionList = this.menuList[3].orderTransactionList;
            break;
          default:
            this.MenuComponent = 'Completed';
            this.orderTransactionList = this.menuList[4].orderTransactionList;
        }
      },
    },
    mounted(){
      this.$http({
        method:'get',
        url:'/orderTransactionList'
      }).then(res => {
        this.menuList = res.data.orderList;
        if(this.MenuComponent === 'Whole'){
          this.orderTransactionList = this.menuList[0].orderTransactionList;
        }else if(this.MenuComponent === 'PendingPayment'){
          this.orderTransactionList = this.menuList[1].orderTransactionList;
        }else if(this.MenuComponent === 'ToBeShipped'){
          this.orderTransactionList = this.menuList[2].orderTransactionList;
        }else if(this.MenuComponent === 'Shipped'){
          this.orderTransactionList = this.menuList[3].orderTransactionList;
        }else if(this.MenuComponent === 'Completed'){
          this.orderTransactionList = this.menuList[4].orderTransactionList;
        }
      });
      this.MenuComponent = sessionStorage.orderName;
    }
  }
</script>
<style lang="less">
  .ivu-menu-horizontal{
    height:40px;
    line-height:40px;
  }
  .ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
    padding:0;
  }
  .ivu-menu-item,.ivu-menu-item-selected{
    width:50px;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
    color: red;
    border-bottom: 2px solid red;
  }
  .order_list_content{
    background:#fafafa;
    /*position:relative;*/
  }
  .menu_tab{
    position:fixed;
    top:40px;
    left:0;
    width:100%;
  }
  .router_content{
    margin-top:90px;
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
