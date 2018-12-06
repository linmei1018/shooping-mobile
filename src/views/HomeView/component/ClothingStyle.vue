<template>
  <div class="clothing_style">
    <div class="header">
      <Row type="flex" justify="space-between">
        <Col span="2"><router-link to="/home"><Icon type="ios-arrow-back" size="16" style="color:#fff;" /></router-link></Col>
        <Col span="20"><Input prefix="ios-search" placeholder="搜索店铺内宝贝" v-model.trim="searchKey"  @on-change="searchCloth()" /></Col>
        <Col span="2"><Icon type="ios-list" size="28" style="color:#fff;" /></Col>
      </Row>
    </div>
    <div class="content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">综合</mt-tab-item>
        <mt-tab-item id="2">销量</mt-tab-item>
        <mt-tab-item id="3">新品</mt-tab-item>
        <mt-tab-item id="4" style="position:relative;">价格
          <img v-if="sortNum === 0" src="../../../assets/other_icon/sort.png" class="sort_normal"  @click="sort(0)">
          <img v-else-if="sortNum === 1" src="../../../assets/other_icon/sort_up.png" class="sortIcon" @click="sort(1)">
          <img v-else="sortNum === 2" src="../../../assets/other_icon/sort_down.png" class="sortIcon" @click="sort(2)">
        </mt-tab-item>
        <div v-if="!transform" class="Transformation" @click="Transformation(true)">
          <img src="../../../assets/other_icon/portrait.png" alt="">
        </div>
        <div v-else class="Transformation2" @click="Transformation(false)">
          <img src="../../../assets/other_icon/transverse.png" alt="">
        </div>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-if="!transform" v-model="selected">
          <mt-tab-container-item  id="1">
            <div class="tab_container_1" v-for="clothItem in clothList[0]" :key="clothItem.hotId">
              <Row class='burst-list' type="flex" justify="space-between">
                <Col span="6">
                  <img class='big-img' :src="clothItem.img"  />
                </Col>
                <Col span="18" class="tab_item">
                  <div class='textExplain'>
                    <h3 class='red-title'>{{clothItem.title}}</h3>
                    <p class="postage">{{ clothItem.Postage }}</p>
                    <div class='positionbox'>
                      <span>￥{{ clothItem.money }}</span>&nbsp;&nbsp;
                      <span  class="grey">{{ clothItem.paymentsNub }}</span>
                      <Icon type="md-cart" size="16"  class="img"  />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item  id="2">
            <div class="tab_container_1" v-for="clothItem in clothList[1]" :key="clothItem.hotId">
              <Row class='burst-list' type="flex" justify="space-between">
                <Col span="6">
                  <img class='big-img' :src="clothItem.img" />
                </Col>
                <Col span="18" class="tab_item">
                  <div class='textExplain'>
                    <h3 class='red-title'>{{clothItem.title}}</h3>
                    <p class="postage">{{ clothItem.Postage }}</p>
                    <div class='positionbox'>
                      <span>￥{{ clothItem.money }}</span>&nbsp;&nbsp;
                      <span class="grey">{{ clothItem.paymentsNub }}</span>
                      <Icon type="md-cart" size="16"  class="img" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="tab_container_1" v-for="clothItem in clothList[2]" :key="clothItem.hotId">
              <Row class='burst-list' type="flex" justify="space-between">
                <Col span="6">
                  <img class='big-img' :src="clothItem.img" />
                </Col>
                <Col span="18" class="tab_item">
                  <div class='textExplain'>
                    <h3 class='red-title'>{{clothItem.title}}</h3>
                    <p class="postage">{{ clothItem.Postage }}</p>
                    <div class='positionbox'>
                      <span>￥{{ clothItem.money }}</span>&nbsp;&nbsp;
                      <span class="grey">{{ clothItem.paymentsNub }}</span>
                      <Icon type="md-cart" size="16" class="img" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item  id="4">
            <div class="tab_container_1" v-for="clothItem in clothList[3]" :key="clothItem.hotId">
              <Row class='burst-list' type="flex" justify="space-between">
                <Col span="6">
                  <img class='big-img' :src="clothItem.img" />
                </Col>
                <Col span="18" class="tab_item">
                  <div class='textExplain'>
                    <h3 class='red-title'>{{clothItem.title}}</h3>
                    <p class="postage">{{ clothItem.Postage }}</p>
                    <div class='positionbox'>
                      <span>￥{{ clothItem.money }}</span>&nbsp;&nbsp;
                      <span class="grey">{{ clothItem.paymentsNub }}</span>
                      <Icon type="md-cart" size="16" class="img" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </mt-tab-container-item>
      </mt-tab-container>
      <!--2-->
      <mt-tab-container v-else v-model="selected">
        <mt-tab-container-item  id="1">
            <Row class="tab_container_2" type="flex" justify="space-between" >
              <Col span="11" v-for="clothItem in clothList[0]" :key="clothItem.hotId">
                <Card :bordered="false">
                  <img :src="clothItem.img" />
                  <div class="container_item">
                    <p class="title">{{clothItem.title}}</p>
                    <div class='positionbox' style="color:red;">
                      <span>￥{{ clothItem.money }}</span>
                      <span class="paymentsNub">{{ clothItem.paymentsNub }}</span>
                      <Icon type="md-cart" size="16" class="cart" />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
        </mt-tab-container-item>
        <mt-tab-container-item  id="2">
          <Row class="tab_container_2" type="flex" justify="space-between" >
            <Col span="11" v-for="clothItem in clothList[1]" :key="clothItem.hotId">
              <Card :bordered="false">
                <img :src="clothItem.img" />
                <div class="container_item">
                  <p class="title">{{clothItem.title}}</p>
                  <div class='positionbox'>
                    <span>￥{{ clothItem.money }}</span>
                    <span class="paymentsNub">{{ clothItem.paymentsNub }}</span>
                    <Icon type="md-cart" size="16" class="cart" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </mt-tab-container-item>
        <mt-tab-container-item  id="3">
          <Row class="tab_container_2" type="flex" justify="space-between" >
            <Col span="11" v-for="clothItem in clothList[2]" :key="clothItem.hotId">
              <Card :bordered="false">
                <img :src="clothItem.img" />
                <div class="container_item">
                  <p class="title">{{clothItem.title}}</p>
                  <div class='positionbox'>
                    <span>￥{{ clothItem.money }}</span>
                    <span class="paymentsNub" >{{ clothItem.paymentsNub }}</span>
                    <Icon type="md-cart" size="16" class="cart" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </mt-tab-container-item>
        <mt-tab-container-item  id="4">
          <Row class="tab_container_2" style="" type="flex" justify="space-between" >
            <Col span="11" v-for="clothItem in clothList[3]" :key="clothItem.hotId">
              <Card :bordered="false">
                <img :src="clothItem.img" />
                <div class="container_item" >
                  <p class="title">{{clothItem.title}}</p>
                  <div class='positionbox'>
                    <span>￥{{ clothItem.money }}</span>
                    <span class="paymentsNub" style="">{{ clothItem.paymentsNub }}</span>
                    <Icon type="md-cart" size="16" class="cart" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="shop_cart_fiexd" @click="goShopCart">
      <!--<Badge :count="shopCartNum">-->
        <Icon type="md-cart" size="24" />
      <!--</Badge>-->
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        selected: '1',
        hotClassifyList:[],
        clothList: [],
        transform: false,
        clothDataCopy:[],
        searchKey:'',
        sortNum: 0
      }
    },
    methods:{
      goShopCart(){
        this.$router.push('/shopping_cart');
      },
      //转换
      Transformation(boolean){
        this.transform = boolean;
      },
      //搜索
      searchCloth(){
        let clothArr = this.clothDataCopy;
        let searchArr = [];
        let key = this.searchKey;
        if (key === ''){
          this.clothList = this.clothDataCopy;
          return;
        }
        let arr = clothArr[0];
        for (let i = 0; i < arr.length; i++){
          let _name = `${arr[i].title}`;
          if (_name.includes(key)){
            searchArr.push(arr[i])
          }
        }
        this.clothList[0] = searchArr;
      },
      //排序
      sort(num){
        // this.sortNum = num;

        if(num === 0){
          this.sortNum = 1;
          return this.clothList[3].sort((a,b)=>a.money-b.money)  //升
        }else if(num === 1){
          this.sortNum =2;
          return this.clothList[3].sort((a, b) => a.money - b.money).reverse()   //降
        }else if(num === 2){
          this.sortNum = 1;
          return this.clothList[3].sort((a,b)=>a.money-b.money)  //升
        }

        //0:默认;1:升;2:降

        //
      },
      init(){
        let index = this.$route.params.hotIndex;
        let list = [];
        this.$http({
          method:'get',
          url:'/PopularClassificationList'
        }).then(res => {
          list.push(res.data.hotList[index].comprehensive);
          this.hotClassifyList = list[0];
          let arr = [];
          this.hotClassifyList.forEach((item)=>{
            arr.push(item.clothList)
          });
          this.clothList = arr;
          this.clothDataCopy = arr;
        })
      }
    },
    mounted(){
      this.init();
    }
  }
</script>
<style lang="less">
  .clothing_style{
    background:#eee;
    .header{
      height:40px;
      width:100%;
      background:#d4237a;
      text-align:left;
      line-height:40px;
      padding:0 10px;
      position:fixed;
      top:0;
      left:0;
      Input{
        width:100%;background:#fff;border-radius:30px;
      }
    }
    .content{
      .sortIcon{
        position:absolute;top:12px;right:12%;width:20px;height:20px
      }
      .sort_normal{
        position:absolute;top:12px;right:12%;
      }
      .Transformation{
        width:50px;margin-top:16px
      }
      .Transformation2{
        width:50px;margin-top:12px
      }
      .tab_container_1{
        width:100%;
        .big-img{
          width:80px;height:80px;
        }
        .tab_item{
          border-bottom:1px solid #eee;padding:6px;text-align:left;
          .postage{
            font-size:12px;color:grey;
          }
          .positionbox{
            color:red;
            .grey{
              color:grey;
            }
            .img{
              float:right;
            }
          }
        }
      }
      .tab_container_2{
        background:#eee;padding:10px;
        img{
          width:100%;height:80px;
        }
        .container_item{
          text-align:left;padding:0 5px;
          .title{
            font-weight:bold;width:100%;height:20px;overflow:hidden
          }
          .positionbox{
            color:red;
            .paymentsNub{
              font-size:10px;color:grey;
            }
            .cart{
              float:right;margin-top:2px
            }
          }
        }
      }
    }
  }

  .ivu-input{
    border:none;
    border-radius:30px;
    height:26px;
  }
  .ivu-input-prefix i, .ivu-input-suffix i{
    line-height:26px;
  }
  .mint-tab-container{
    margin-top:10px;
    background:#fff;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom:none;
  }
  .ivu-card-body{
    padding:5px;
  }
  /*购物车固定图标*/
  .shop_cart_fiexd{
    position:fixed;
    bottom:70px;
    right:15px;
    width:40px;
    height:40px;
    background:#fff;
    border-radius:40px;
    line-height:40px;
    box-shadow:0 0 10px 2px #eee;
  }
</style>
