<template>
  <div>
    <mt-header fixed title="优惠券" >
      <router-link to="/home" slot="left"><Icon type="ios-arrow-back" /></router-link>
    </mt-header>
    <div class="coupon_content">
      <img src="../../../assets/other_icon/coupon.png" />
      <div class="coupon_item">
        <h3>小米家的店优惠券</h3>
        <p class="money">￥<span>{{ couponList.money }}</span></p>
        <p>{{ couponList.useMethod }}</p>
        <p class="Term_of_validity">有效期 <span>{{ couponList.time }}</span></p>
      </div>
      <div v-if="SuccessfulReception" class="Successful_reception">
        <p>领取成功</p>
        <Button size="small" @click="CardVoucher(couponList.money)">去卡券包查看</Button>
      </div>
      <Button v-else type="warning" long @click="ConfirmReceipt">确认领取</Button>
    </div>
    <div class="like_content">
      <Divider>猜你喜欢</Divider>
      <ul>
        <li>
          <Row style="background:#eee;padding:10px;" type="flex" justify="space-between" >
            <Col span="11">
              <Card :bordered="false">
                <img src="../../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
                <div style="text-align:left;">
                  <p style="font-weight:bold;">商品介绍j</p>
                  <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                  <p style="color:red">￥69</p>
                </div>
              </Card>
            </Col>
            <Col span="11" >
              <Card shadow>
                <img src="../../../assets/shopping-icon/need_buy_clothes/need16.png" style="width:100%;height:100%" />
                <div style="text-align:left;">
                  <p style="font-weight:bold;">商品介绍j</p>
                  <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                  <p style="color:red">￥69</p>
                </div>
              </Card>
            </Col>
          </Row>
        </li>
        <li>
          <Row style="background:#eee;padding:10px" type="flex" justify="space-between">
            <Col span="11">
              <Card :bordered="false">
                <img src="../../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
                <div style="text-align:left;">
                  <p style="font-weight:bold;">商品介绍j</p>
                  <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                  <p style="color:red">￥69</p>
                </div>
              </Card>
            </Col>
            <Col span="11" >
              <Card>
                <img src="../../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
                <div style="text-align:left;">
                  <p style="font-weight:bold;">商品介绍j</p>
                  <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                  <p style="color:red">￥69</p>
                </div>
              </Card>
            </Col>
          </Row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        num:this.$route.params.title,
        couponList:[],
        SuccessfulReception:false
      }
    },
    methods:{
      //确认领取
      ConfirmReceipt(){
        this.SuccessfulReception = true;
      },
      //查看卡券包
      CardVoucher(money){
        console.log(money)
      },
      init(){
        this.$http({
          method:'get',
          url:'/couponList'
        }).then(res => {
          this.couponList = res.data.couponList[this.num];
          let time=this.couponList.time.split('-');
          let m = time[0].split('.');
          this.couponList.time = '2018.'+time[0]+'-2018.'+m[0]+'.'+time[1];
        })
      }
    },
    mounted(){
      this.init();
    }
  }
</script>
<style lang="less">
  .coupon_content{
    padding:10px;
    img{
      width:100%;height:200px;position:relative;margin-bottom:10px;
    }
    .coupon_item{
      width:100%;height:200px;margin-top:50px;padding:40px;
      position:absolute;
      left:0;
      top:0;
      font-size:12px;
      .money{
        font-size:14px;
        font-weight:bold;
        span{
          font-size:36px;
        }
      }
      .Term_of_validity{
        margin-top:10px;
      }
    }
    .Successful_reception{
      Button{
        border:2px solid orange;
        color:orange;
        margin-top:10px;
      }
    }
    .like_content{

    }
  }
  //分割线样式修改
  .ivu-divider-horizontal.ivu-divider-with-text-center{
    color: grey;
    font-size: 14px;
  }
</style>
