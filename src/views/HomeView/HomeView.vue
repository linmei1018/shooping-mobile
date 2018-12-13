<style lang="less">
  @import "./HomeView";
</style>
<template>
  <div>
    <mt-header fixed title="小米家的店"></mt-header>
    <div class="home_conter">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img class="swiper_img" src="../../assets/Sowing_map/swiper01.png" /></mt-swipe-item>
        <mt-swipe-item><img class="swiper_img" src="../../assets/Sowing_map/swiper02.png" /></mt-swipe-item>
        <mt-swipe-item><img class="swiper_img" src="../../assets/Sowing_map/swiper03.png" /></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="coupon">
      <div class="coupon__title">上新日优惠折上折 仅限3天</div>
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="7"  class="coupon-item"   v-for="(couponItem,index) in couponList"  :key="index">
          <div @click="Coupon(index)">
            <span class='cou-sign'>￥</span>
            <h3 class='cou-money'>{{ couponItem.money }}</h3>
            <p class='cou-use-method'>{{ couponItem.useMethod }}</p>
            <span class='cou-time'>{{ couponItem.time }}</span>
          </div>
        </Col>
      </Row>
    </div>
    <div class='HOT-classify'>
      <p class='Hot-title'>热门分类</p>
      <ul class="clothes-classify">
        <li class='classify-list' v-for="(hotItem,index) in classifyList" :key="index" @click="ClothingStyle(index)">
          <div class="classify-item">{{hotItem.clothesName}}</div>
          <img class='clothes-img' :src="hotItem.clothesImg" />
        </li>
      </ul>
    </div>
    <div class='Bursting-clothes'>
      <p class='burst-title'>掌柜力荐明星爆款</p>
      <Card  class='burst-view' v-for="(item,index) in borstList" :key="item.id">
        <Row class='burst-list' type="flex" justify="space-between" >
          <div @click="goGoodsDetails('burst'+item.id)">
            <Col span="8">
              <img class='big-img' :src="item.bigImg" />
            </Col>
            <Col span="16">
              <div class='textExplain'>
                <img class='hot-icon' src='../../assets/shopping-icon/burst_clothes/hot.png' />
                <h3 class='red-title'>{{item.redTitle}}</h3>
                <p :class="item.firstImg ? 'firstImgText':'black-title'">{{item.blackTitle}}</p>
                <p v-if="item.firstImg" :class="item.firstImg ? 'firstImgText2':'black-title'">{{item.spanTitle}}</p>
                <div :class="item.firstImg ? 'firstImg':'color-list'" >
                  <img class='small-img'  v-for="(imgItem,imgIndex) in borstList[index].colorList"  :key="'i'+imgIndex" :src='imgItem' />
                </div>
                <div class='clear'></div>
                <div class='positionbox'v-if="item.firstImg" >
                  <button class='buyBtnFirstImg'>点击购买</button>
                </div>
                <div v-else class='positionbox'>
                  <span class='span-title'>{{item.spanTitle}}</span>
                  <button class='buyBtn'>点击购买</button>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Card >
      <div class='clear'></div>
      <div class='needToBuyList'>
        <p class='needToBuyTitle'>必买清单</p>
        <ul class='toBuyImgList'>
          <li v-for="(item,index) in toBuyImgList" :key="'imgID'+index" @click="goGoodsDetails('needBuy'+index)" >
            <img v-lazy="item" :class="'imgClass'+index">
          </li>
        </ul>
      </div>
    </div>
    <div class="all_babies">
      <button >查看全部宝贝</button>
    </div>
    <div class="shop_cart_fiexd" @click="goCart">
      <Icon type="md-cart" size="24" />
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        couponList:[],
        classifyList:[
          {
            clothesName:'羽绒服',
            clothesImg: require('../../assets/shopping-icon/clothes01.png')
          },
          {
            clothesName: '棉服',
            clothesImg: require('../../assets/shopping-icon/clothes02.png')
          },
          {
            clothesName: '套装',
            clothesImg: require('../../assets/shopping-icon/clothes03.png')
          },
          {
            clothesName: '卫衣',
            clothesImg: require('../../assets/shopping-icon/clothes04.png')
          },
          {
            clothesName: '外套',
            clothesImg: require('../../assets/shopping-icon/clothes05.png')
          },
          {
            clothesName: '毛衣',
            clothesImg: require('../../assets/shopping-icon/clothes06.png')
          },
          {
            clothesName: '打底衫',
            clothesImg: require('../../assets/shopping-icon/clothes07.png')
          },
          {
            clothesName: '裤子',
            clothesImg: require('../../assets/shopping-icon/clothes08.png')
          },
        ],
        borstList:[
          {
            id:'1',
            bigImg:require("../../assets/shopping-icon/burst_clothes/burst_big01.png"),
            redTitle:'爆款纯棉多色内衣套装',
            blackTitle:'累计售出164000+件',
            spanTitle:'五色可选',
            colorList:[
              require('../../assets/shopping-icon/burst_clothes/burst1_small01.png'),
              require('../../assets/shopping-icon/burst_clothes/burst1_small02.png'),
              require('../../assets/shopping-icon/burst_clothes/burst1_small03.png'),
              require('../../assets/shopping-icon/burst_clothes/burst1_small04.png'),
              require('../../assets/shopping-icon/burst_clothes/burst1_small05.png')
            ],
            firstImg: false,
          },
          {
            id: '2',
            bigImg: require('../../assets/shopping-icon/burst_clothes/burst_big02.png'),
            redTitle: '热销款金丝绒保暖套装',
            blackTitle: '累计售出6600+件',
            spanTitle: '五款可选',
            colorList: [
              require('../../assets/shopping-icon/burst_clothes/burst2_small01.png'),
              require('../../assets/shopping-icon/burst_clothes/burst2_small02.png'),
              require('../../assets/shopping-icon/burst_clothes/burst2_small03.png'),
              require('../../assets/shopping-icon/burst_clothes/burst2_small04.png'),
              require('../../assets/shopping-icon/burst_clothes/burst2_small05.png')
            ],
            firstImg: false,
          },
          {
            id: '3',
            bigImg: require('../../assets/shopping-icon/burst_clothes/burst_big03.png'),
            redTitle: '热销款加绒白搭皮裤',
            blackTitle: '累计售出2900+件',
            spanTitle: '三款可选',
            colorList: [
              require('../../assets/shopping-icon/burst_clothes/burst3_small01.png'),
              require('../../assets/shopping-icon/burst_clothes/burst3_small02.png'),
              require('../../assets/shopping-icon/burst_clothes/burst3_small03.png')
            ],
            firstImg: false,
          },
          {
            id: '4',
            bigImg: require('../../assets/shopping-icon/burst_clothes/burst_big04.png'),
            redTitle: '超值！背心保暖套装',
            blackTitle: '金丝绒500克加绒',
            spanTitle: '四色可选',
            colorList: [
              require('../../assets/shopping-icon/burst_clothes/burst4_small01.png'),
              require('../../assets/shopping-icon/burst_clothes/burst4_small02.png'),
              require('../../assets/shopping-icon/burst_clothes/burst4_small03.png'),
              require('../../assets/shopping-icon/burst_clothes/burst4_small04.png')
            ],
            firstImg: false,
          },
          {
            id: '5',
            bigImg: require('../../assets/shopping-icon/burst_clothes/burst_big05.png'),
            redTitle: '潮款百搭加绒休闲裤',
            blackTitle: '必备款 金丝绒加厚',
            spanTitle: '版型超正 热卖款',
            colorList: [
              require('../../assets/shopping-icon/burst_clothes/burst5_small01.png')
            ],
            firstImg:true,
          },
          {
            id: '6',
            bigImg: require('../../assets/shopping-icon/burst_clothes/burst_big06.png'),
            redTitle: '潮款百搭高领打底衫',
            blackTitle: '400克厚棉单层',
            spanTitle: '四色可选',
            colorList: [
              require('../../assets/shopping-icon/burst_clothes/burst6_small01.png'),
              require('../../assets/shopping-icon/burst_clothes/burst6_small02.png'),
              require('../../assets/shopping-icon/burst_clothes/burst6_small03.png'),
              require('../../assets/shopping-icon/burst_clothes/burst6_small04.png')
            ],
            firstImg: false,
          }
        ],
        toBuyImgList:[
          require('../../assets/shopping-icon/need_buy_clothes/need01.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need02.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need03.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need04.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need05.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need06.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need07.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need08.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need09.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need10.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need11.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need12.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need13.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need14.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need15.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need16.png'),
          require('../../assets/shopping-icon/need_buy_clothes/need17.png'),
        ],
      }
    },
    methods:{
      //优惠券
      Coupon(index){
        let title = index;
        this.$router.push('/home/coupon/'+title);
      },
      //热门分类
      ClothingStyle(hotIndex){
        this.$router.push('/home/cloth/'+hotIndex);
      },
      //跳转到商品详情页面
      goGoodsDetails(id){
        this.$router.push('/home/cloth/shopDetails/'+id);
      },
      //跳转到购物车页面
      goCart(){
        this.$router.push('/shopping_cart');
      },
      init(){
        this.$http({
          method:'get',
          url:'/couponList'
        }).then(res => {
          this.couponList = res.data.couponList;
        })
      }
    },
    mounted(){
      this.init();
    }
  }

</script>

