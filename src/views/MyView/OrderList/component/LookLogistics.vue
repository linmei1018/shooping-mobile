<template>
  <div class="look_logistics">
    <mt-header fixed title="物流信息" >
      <router-link to="/my/order_list" slot="left"><Icon type="ios-arrow-back" /></router-link>
    </mt-header>
    <div class="Logistics_status" >
      <img class="cloth_img" src="../../../../assets/dedails/3.png" />
      <div class="logistics_text">
        <p>物流状态: <span>已签收</span></p>
        <p>承运来源: <span>申通快递</span></p>
        <p>运单编号: 3366545488542</p>
      </div>
    </div>
    <div class="Logistics_information">
      <Steps :current="0" direction="vertical">
        <Step v-for="item in list" :title="item.title" icon="ios-radio-button-on" :content="item.description"></Step>
      </Steps>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list:[
          { title: "江西省南昌市高新公司 已签收 签收人: 【同事代签】", description: "2018-10-13 04:44:02" },
          { title: "【南昌市】江西省南昌市高新派件员 李腾飞"+"13576276381"+"正在为您派件", description: "2018-10-13 04:44:02" },
          { title: "江西省高新市高新 已收入", description: "2018-10-13 07:44:02" },
          { title: "南昌转运中心公司 已发出,下一站 江西省南昌市高新", description: "2018-10-13 00:25:22" },
          { title: "南昌转运中心公司 已收入", description: "2018-10-12 20:50:38" },
          { title: "郑州转运中心公司 已发出,下一站 南昌转运中心", description: "2018-10-11 23:38:35" },
          { title: "郑州转运中心公司 已收入", description: "2018-10-11 23:36:20" },
          { title: "河南省郑州市万客来公司 已发出,下一站 郑州转运中心", description: "2018-10-11 22:11:45" },
          { title: "河南省郑州市万客来公司 已打包", description: "2018-10-11 21:23:39" },
          { title: "河南省郑州市万客来公司 已收件", description: "2018-10-11 17:38:40" },
          { title: "包裹正在等待揽收", description: "2018-10-11 17:21:32" },
        ]
      };
    },
    methods: {

    },
  };
</script>
<style lang="less">
  .look_logistics{
    background:#fafafa;
  }
  .Logistics_status{
    padding:10px;
    background:#fff;
    margin-bottom:10px;
    border-bottom:1px solid #eee;
    .cloth_img{
      width:60px;
      height:50px;
      float:left;
      padding-right:10px;
    }
    .logistics_text{
      text-align:left;
    }
  }
  .Logistics_information{
    padding:10px;
    text-align:left;
    background:#fff;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
  }
</style>
