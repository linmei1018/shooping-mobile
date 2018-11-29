<style lang="less" scoped>
@import "./CollectView.less";
</style>
<template>
  <div>
    <mt-header fixed title="我的收藏" ></mt-header>
    <div class="collect_content">
      <ul>
        <li v-for="item in collectList" class="collect_list">
          <Row>
            <Col span="8">
              <img :src="item.img" />
            </Col>
            <Col span="16" class="text_conter">
              <p>{{ item.shopTitle }}</p>
              <span class="text_remark">{{ item.shopRemark }}</span>
              <div class="money_nub">
                <span class="money_text">{{ item.unitPrice | formatMoney }}</span>
                <button class="add_to_cart">加入购物车</button>
              </div>
            </Col>
          </Row>
        </li>
      </ul>
      <div class="guess_like">
        <p style="background:#eee;padding-top:10px;color:grey;">- 店长猜你喜欢 -</p>
        <ul>
          <li>
            <Row style="background:#eee;padding:10px;" type="flex" justify="space-between" >
              <Col span="11">
                <Card :bordered="false">
                  <img src="../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
                  <div style="text-align:left;">
                    <p style="font-weight:bold;">商品介绍j</p>
                    <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                    <p style="color:red">￥69</p>
                  </div>
                </Card>
              </Col>
              <Col span="11" >
                <Card shadow>
                  <img src="../../assets/shopping-icon/need_buy_clothes/need16.png" style="width:100%;height:100%" />
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
                  <img src="../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
                  <div style="text-align:left;">
                    <p style="font-weight:bold;">商品介绍j</p>
                    <p style="font-size:10px;color:grey;">备注分为嘎Greg经理</p>
                    <p style="color:red">￥69</p>
                  </div>
                </Card>
              </Col>
              <Col span="11" >
                <Card>
                  <img src="../../assets/shopping-icon/need_buy_clothes/need15.png" style="width:100%;height:100%" />
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
  </div>
</template>
<script>
  export default {
    data () {
      return {
        collectList:[   //购物车列表数据
          {
            shopID: 1,
            img: require('../../assets/shopping-icon/need_buy_clothes/need11.png'),
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理1',
            unitPrice: 69,  //单价
          },
          {
            shopID: 2,
            img: require('../../assets/shopping-icon/need_buy_clothes/need13.png'),
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理1',
            unitPrice: 79,  //单价
          },

        ]
      }
    },
    filters:{
      formatMoney(value){
        value = Number(value);
        return "￥"+ value.toFixed(2);
      }
    },
  }
</script>
<style>
  .collect_content{
    margin-top:10px;
  }
  .ivu-card-body{
    padding:10px;
  }
</style>

