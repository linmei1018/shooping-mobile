<style lang="less">
  @import "./MyView.less";
</style>
<template>
  <div class="my_view">
    <mt-header fixed title="小米家的店"></mt-header>
    <div class="my_header">
      <img src="../../assets/Head_portrait.png" alt="">
      <p class="user_name">用户名称</p>
    </div>
    <div class="my_content">
      <div class="top">
        <mt-cell
          title="我的订单"
          to="/order_list'"
          is-link
          value="查看全部订单">
        </mt-cell>
        <div class="View_state">
          <Row>
            <Col span="6">
              <img src="../../assets/my_icon/Pending_payment.png" />
              <p>待付款</p>
            </Col>
            <Col span="6">
              <img src="../../assets/my_icon/To_be_shipped.png" />
              <p>待发货</p>
            </Col>
            <Col span="6">
              <img src="../../assets/my_icon/Shipped.png" />
              <p>已发货</p>
            </Col>
            <Col span="6">
              <img src="../../assets/my_icon/Completed.png" />
              <p>已完成</p>
            </Col>
          </Row>
        </div>
      </div>
      <mt-cell
        class="go_shop_cart"
        title="购物车"
        to="/shopping_cart"
        is-link>
        <Badge :count="shopCount" :show-zero="false"></Badge>
      </mt-cell>
      <div class="my_something">
        <mt-cell title="我的会员卡" to="" is-link></mt-cell>
        <mt-cell title="我的优惠券" to="" is-link></mt-cell>
        <mt-cell class="My_points" title="我的积分" to="" is-link></mt-cell>
      </div>
      <mt-cell class="Customer_Service" title="联系客服" to="" is-link></mt-cell>
      <mt-cell class="set_up" title="设置" to="" is-link></mt-cell>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        shopCount: Number(sessionStorage.shopCartNum),
      }
    },
    methods:{

    }
  }
</script>
