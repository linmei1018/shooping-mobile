<template>
  <div class="order_list">
    <mt-header fixed title="订单列表" >
      <router-link to="/collect" slot="left"><Icon type="ios-arrow-back" /></router-link>
    </mt-header>
    <div class="order_list_content">
      <Menu mode="horizontal" :theme="theme1" class="menu_tab" @on-select="changeTab">
        <Row type="flex" justify="space-around">
          <Col span="4">
            <MenuItem name="Whole">全部</MenuItem>
          </Col>
          <Col span="4">
            <MenuItem name="PendingPayment">待付款</MenuItem>
          </Col>
          <Col span="4">
            <MenuItem name="ToBeShipped">待发货</MenuItem>
          </Col>
          <Col span="4">
            <MenuItem name="Shipped">已发货</MenuItem>
          </Col>
          <Col span="4">
            <MenuItem name="Completed">已完成</MenuItem>
          </Col>
        </Row>
      </Menu>
    </div>
    <div class="router_content">
      <componet :is="MenuComponent" ></componet>
    </div>
  </div>
</template>
<script>
  const Whole = resolve => require(['@/views/MyView/OrderList/component/Whole'], resolve);
  const PendingPayment = resolve => require(['@/views/MyView/OrderList/component/PendingPayment'], resolve);
  const ToBeShipped = resolve => require(['@/views/MyView/OrderList/component/ToBeShipped'], resolve);
  const Shipped = resolve => require(['@/views/MyView/OrderList/component/Shipped'], resolve);
  const Completed = resolve => require(['@/views/MyView/OrderList/component/Completed'], resolve);
  export default {
    components: {Whole},
    data(){
      return{
        theme1:'light',
        MenuComponent: null
      }
    },
    methods:{
      changeTab(name) {
        switch (name) {
          case 'Whole':
            this.MenuComponent = Whole;
            break;
          case 'PendingPayment':
            this.MenuComponent = PendingPayment;
            break;
          case 'ToBeShipped':
            this.MenuComponent = ToBeShipped;
            break;
          case 'Shipped':
            this.MenuComponent = Shipped;
            break;
          default:
            this.MenuComponent = Completed;
        }
      },
    },
    mounted(){
      this.MenuComponent = Whole;
    }
  }
</script>
<style>
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
  }
</style>
