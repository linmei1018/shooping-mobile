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
          <span class='cou-sign'>￥</span>
          <h3 class='cou-money'>{{ couponItem.money }}</h3>
          <p class='cou-use-method'>{{ couponItem.useMethod }}</p>
          <span class='cou-time'>{{ couponItem.time }}</span>
        </Col>
      </Row>
    </div>
    <div class='HOT-classify'>
      <p class='Hot-title'>热门分类</p>
      <ul class="clothes-classify">
        <li class='classify-list' v-for="(hotItem,index) in classifyList"  :key="index">
          <div class="classify-item">{{hotItem.clothesName}}</div>
          <img class='clothes-img' :src="hotItem.clothesImg" />
        </li>
      </ul>
    </div>
    <div class='Bursting-clothes'>
      <p class='burst-title'>掌柜力荐明星爆款</p>
      <Card  class='burst-view' v-for="(item,index) in borstList" :key="item.id">
        <Row class='burst-list' type="flex" justify="space-between">
          <Col span="8">
            <img class='big-img' :src="item.bigImg" />
          </Col>
          <Col span="16">
            <div class='textExplain'>
              <img class='hot-icon' src='../../assets/shopping-icon/burst_clothes/hot.png' />
              <h3 class='red-title'>{{item.redTitle}}</h3>
              <p :class="item.firstImg ? 'firstImgText':'black-title'">{{item.blackTitle}}</p>
              <p v-if="item.firstImg" class="item.firstImg ? 'firstImgText':'black-title'">{{item.spanTitle}}</p>
              <div :class="item.firstImg ? 'firstImg':'color-list'" v-if="!item.firstImg" >
                <img class='small-img'  v-for="(imgItem,imgIndex) in borstList[index].colorList"  :key="'i'+imgIndex" :src='imgItem' />
              </div>
              <div class='clear'></div>
              <button v-if="item.firstImg" class='buyBtnFirstImg'>点击购买</button>
              <div v-else class='positionbox'>
                <span class='span-title'>{{item.spanTitle}}</span>
                <button class='buyBtn'>点击购买</button>
              </div>
            </div>
          </Col>
        </Row>
      </Card >
      <div class='clear'></div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        couponList:[
          {
            money:10,
            useMethod:'满99元使用',
            time:'11.19-21'
          },
          {
            money: 20,
            useMethod: '满199元使用',
            time: '11.19-21'
          },
          {
            money: 30,
            useMethod: '满299元使用',
            time: '11.19-21'
          }
        ],
        classifyList:[
          {
            clothesName:'羽绒服',
            clothesImg:'/assets/shopping-icon/clothes01.png'
          },
          {
            clothesName: '棉服',
            clothesImg: '../assets/shopping-icon/clothes02.png'
          },
          {
            clothesName: '套装',
            clothesImg: '@/assets/shopping-icon/clothes03.png'
          },
          {
            clothesName: '卫衣',
            clothesImg: '../../../assets/shopping-icon/clothes04.png'
          },
          {
            clothesName: '外套',
            clothesImg: '../../assets/shopping-icon/clothes05.png'
          },
          {
            clothesName: '毛衣',
            clothesImg: '../../assets/shopping-icon/clothes06.png'
          },
          {
            clothesName: '打底衫',
            clothesImg: '../../assets/shopping-icon/clothes07.png'
          },
          {
            clothesName: '裤子',
            clothesImg: '../../../src/assets/shopping-icon/clothes08.png'
          },
        ],
        borstList:[
          {
            id:'1',
            bigImg:'../../../assets/shopping-icon/burst_clothes/burst_big01.png',
            redTitle:'爆款纯棉多色内衣套装',
            blackTitle:'累计售出164000+件',
            spanTitle:'五色可选',
            colorList:[
              '../../../assets/shopping-icon/burst_clothes/burst1_small01.png',
              '@/assets/shopping-icon/burst_clothes/burst1_small02.png',
              '/assets/shopping-icon/burst_clothes/burst1_small03.png',
              '/assets/shopping-icon/burst_clothes/burst1_small04.png',
              '/assets/shopping-icon/burst_clothes/burst1_small05.png'
            ],
            firstImg: false,
          },
          {
            id: '2',
            bigImg: '/assets/shopping-icon/burst_clothes/burst_big02.png',
            redTitle: '热销款金丝绒保暖套装',
            blackTitle: '累计售出6600+件',
            spanTitle: '五款可选',
            colorList: [
              '/assets/shopping-icon/burst_clothes/burst2_small01.png',
              '/assets/shopping-icon/burst_clothes/burst2_small02.png',
              '/assets/shopping-icon/burst_clothes/burst2_small03.png',
              '/assets/shopping-icon/burst_clothes/burst2_small04.png',
              '/assets/shopping-icon/burst_clothes/burst2_small05.png'
            ],
            firstImg: false,
          },
          {
            id: '3',
            bigImg: '/assets/shopping-icon/burst_clothes/burst_big03.png',
            redTitle: '热销款加绒白搭皮裤',
            blackTitle: '累计售出2900+件',
            spanTitle: '三款可选',
            colorList: [
              '/assets/shopping-icon/burst_clothes/burst3_small01.png',
              '/assets/shopping-icon/burst_clothes/burst3_small02.png',
              '/assets/shopping-icon/burst_clothes/burst3_small03.png'
            ],
            firstImg: false,
          },
          {
            id: '4',
            bigImg: '/assets/shopping-icon/burst_clothes/burst_big04.png',
            redTitle: '超值！背心保暖套装',
            blackTitle: '金丝绒500克加绒',
            spanTitle: '四色可选',
            colorList: [
              '/assets/shopping-icon/burst_clothes/burst4_small01.png',
              '/assets/shopping-icon/burst_clothes/burst4_small02.png',
              '/assets/shopping-icon/burst_clothes/burst4_small03.png',
              '/assets/shopping-icon/burst_clothes/burst4_small04.png'
            ],
            firstImg: false,
          },
          {
            id: '5',
            bigImg: '/assets/shopping-icon/burst_clothes/burst_big05.png',
            redTitle: '潮款百搭加绒休闲裤',
            blackTitle: '必备款 金丝绒加厚',
            spanTitle: '版型超正 热卖款',
            colorList: [
              '/assets/shopping-icon/burst_clothes/burst5_small01.png'
            ],
            firstImg:true,
          },
          {
            id: '6',
            bigImg: '/assets/shopping-icon/burst_clothes/burst_big06.png',
            redTitle: '潮款百搭高领打底衫',
            blackTitle: '400克厚棉单层',
            spanTitle: '四色可选',
            colorList: [
              '/assets/shopping-icon/burst_clothes/burst6_small01.png',
              '/assets/shopping-icon/burst_clothes/burst6_small02.png',
              '/assets/shopping-icon/burst_clothes/burst6_small03.png',
              '/assets/shopping-icon/burst_clothes/burst6_small04.png'
            ],
            firstImg: false,
          }
        ],
      }
    }
  }
</script>
<style lang="less">
  .mint-header{
    background-color:#d4237a;
  }
  .home_conter{
    margin-top:40px;
    width:100%;
    height:200px;
  }
  .swiper_img{
    width:100%;
    height:200px;
    display:inline-block;
  }
  /*优惠折扣*/
  .coupon{
    padding:10px 30px;
    .coupon__title{
      font-size:16px;
      font-weight:bold;
      color:orange;
      line-height:40px;
    }
    .coupon-item{
      background:orange;
      padding:10px;
      margin-right:1px;
      text-align:center;
      .cou-sign{
        text-align:left;
        display:block;
      }
      .cou-money{
        font-size:36px;
      }
      .cou-use-method{
        font-size:10px;
        display:block;
      }
      .cou-time{
        font-size:8px;
        background:#000;
        color:#fff;
        width:100%;
        display:block;
        line-height:12px;
      }
    }
  }
  /*热门分类*/
  .HOT-classify{
    text-align:center;
    .Hot-title{
      font-size:18px;
      font-weight:bold;
    }
    .clothes-classify {
      width:282px;
      height:200px;
      margin:10px auto;
      .classify-list{
        width:70px;
        height:90px;
        text-align:center;
        border:1px solid #ccc;
        float:left;
        list-style:none;
        .classify-item{
          font-size:12px;
          margin:10px;
        }
        .clothes-img{
          width:40px;
          height:40px;
        }
      }
    }
  }
  /*推荐款*/
  .Bursting-clothes{
    .burst-title{
      font-size:24px;
      color:red;
    }
    .burst-view{
      height:140px;
      border:1px solid red;
      border-radius:3px;
      padding:10px;
      margin:10px;
      .big-img{
        width:100%;
        height:100px;
        display:block;
      }
      .textExplain{
        margin:10px;
        padding-top:10px;
        position:relative;
        .hot-icon{
          position:absolute;
          top:-10px;
          right:-10px;
          width:20px;
          height:20px;
          display:block;
        }
      }

    }
  }

</style>
