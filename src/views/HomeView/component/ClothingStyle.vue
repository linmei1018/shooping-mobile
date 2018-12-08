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
          <img v-if="sortNum === 0 || selected !== '4'" src="../../../assets/other_icon/sort.png" class="sort_normal"  @click="sort(0)">
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
      <!-- 这里应该可以简写的，出现的问题是：<mt-tab-container-item  id="1"> 要怎么绑定id的？我试了下没有成功，所以放弃了，以后再琢磨-->
      <mt-tab-container v-if="!transform" v-model="selected">
          <mt-tab-container-item  id="1">
            <div class="tab_container_1" v-for="clothItem in clothList[0]" :key="clothItem.id" @click="goDetails(clothItem.id)">
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
                      <Icon type="md-cart" size="16"  class="img" @click="addShopCart(clothItem)" />
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
                      <Icon type="md-cart" size="16"  class="img" @click="addShopCart(clothItem)" />
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
                      <Icon type="md-cart" size="16" class="img" @click="addShopCart(clothItem)" />
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
                      <Icon type="md-cart" size="16" class="img" @click="addShopCart(clothItem)" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </mt-tab-container-item>
      </mt-tab-container>
      <!--tab-container2-->
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
                      <Icon type="md-cart" size="16" class="cart" @click="addShopCart(clothItem)" />
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
                    <Icon type="md-cart" size="16" class="cart" @click="addShopCart(clothItem)" />
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
                    <Icon type="md-cart" size="16" class="cart" @click="addShopCart(clothItem)" />
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
                    <Icon type="md-cart" size="16" class="cart" @click="addShopCart(clothItem)" />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 进入购物车页面图标 -->
    <div class="shop_cart_fiexd" @click="goShopCart">
      <Badge :count="shopCartNum">
        <Icon type="md-cart" size="24" />
      </Badge>
    </div>
    <!--弹窗 begin-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <div class="popup_header">
          <div class="popup_img">
            <img src="../../../assets/shopping-icon/need_buy_clothes/need16.png">
          </div>
          <div class="popup_title">
            <p style="color:red;">￥{{ closeModal.money }}</p>
            <p>库存{{ closeModal.stock }}件</p>  <!-- 这个是这款衣服的总库存，跟据选择的颜色和身高，库存都不一样，这一步没有做哦-->
            <p v-if="selectedColor === ''&& selectedHeight===''">选择 颜色分类 参考身高</p>
            <p v-else-if="selectedColor&& selectedHeight===''">选择 参考身高</p>
            <p v-else="selectedColor&& selectedHeight">已选择:"{{ selectedColor }}" "{{ selectedHeight }}"</p>
          </div>
          <div class="popup_close" @click="close">
            <Icon type="md-close" size="20"/>
          </div>
      </div>
      <div class="popup_container">
        <div class="color_classify">
          <p>颜色分类</p>
          <ul class="color_list">
            <li v-for="colorItem in closeModal.colorList"
                :class="selectedColor===colorItem?'color-list-checked':'color-list'"
                @click="selectedColor=colorItem">{{ colorItem }}</li>
          </ul>
        </div>
        <div class="reference_height">
          <p>参考身高</p>
          <ul class="height_list">
            <li v-for="heightItem in closeModal.heightList"
                :class="selectedHeight===heightItem?'height-list-checked':'height-list'"
                @click="selectedHeight=heightItem">{{ heightItem }}</li>
          </ul>
        </div>
        <div class="buy_nub">
          <p>购买数量</p>
          <div class="increase_btn">
            <a @click="increase(-1)"><Icon type="md-remove" size="16"  /></a>
            <span class="number">{{ closeModal.buyNumber }}</span>
            <a @click="increase(1)"><Icon type="md-add" size="16" /></a>
          </div>
        </div>
      </div>
      <Button type="warning" long class="sure_btn" @click="sureAddToShopCart">确定</Button>
    </mt-popup>
    <!--弹窗 end-->
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
        sortNum: 0 ,
        shopCartNum: 0,  //购物车数量
        //弹窗
        popupVisible: false, //弹窗开关
        closeModal:{
            money:'258',
            stock:'147',  //库存
            colorList:['米白','红色','黑色'],
            heightList:['100cm','110cm','120cm','130cm','140cm','150cm'],
            buyNumber: 1 ,  //购买数量
        },
        selectedColor: '', // 已选择的颜色
        selectedHeight: '', // 已选择的身高
      }
    },
    methods:{
      //跳转到购物车页面
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
        //0:默认;1:升;2:降
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
      },
      //打开弹窗
      addShopCart(clothItem){
        this.popupVisible = true;
        this.closeModal.money = clothItem.money;
      },
      //确认添加到购物车
      sureAddToShopCart(){
        this.popupVisible = false;
        this.shopCartNum = this.closeModal.buyNumber;
        this.selectedColor = '';
        this.selectedHeight = '';
        this.closeModal.buyNumber = 1;
      },
      //增减数量
      increase(way){
        if(way > 0){
          this.closeModal.buyNumber++;
        }else{
          this.closeModal.buyNumber--;
          if(this.closeModal.buyNumber<1){
            this.closeModal.buyNumber=1;
          }
        }
      },
      //关闭弹窗
      close(){
        this.selectedColor = '';
        this.selectedHeight = '';
        this.closeModal.buyNumber = 1;
        this.popupVisible = false;
      },
      //进入商品详情页面
      goDetails(id){ console.log(id)
        this.$router.push('/home/cloth/shopDetails/'+ id);
      },
      //初始化
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
  /*弹窗*/
  .mint-popup-bottom{
    width:100%;
  }
  .popup_header{
    height:80px;
    margin: 10px;
    border-bottom:1px solid #eee;
    .popup_img{
      width:100px;height:92px;padding:2px;
      margin:-30px 10px 10px 10px;background:#fff;
      float:left;
      img{
        width:95px;height:88px;
      }
    }
    .popup_title{
      text-align:left;
      width:56%;
      float:left;
      padding-top:10px;
    }
    .popup_close{
      float:right;
    }
  }
  .popup_container{
    margin:0 10px;
    padding-bottom:80px;
    text-align:left;
    .color_classify{
      height:60px;
      border-bottom:1px solid #eee;
      .color_list .color-list{
        float:left;
        width:40px;
        height:26px;
        margin:5px 10px 5px 0;
        background:#f1f3f4;
        line-height:26px;
        text-align:center;
        border-radius:10px;
        text-decoration:underline;
      }
      .color_list .color-list-checked{
        float:left;
        width:40px;
        height:26px;
        margin:5px 10px 5px 0;
        background:orange;
        color:#fff;
        line-height:26px;
        text-align:center;
        border-radius:10px;
        text-decoration:underline;
      }
    }
    .reference_height{
      height:100px;
      padding-top:5px;
      border-bottom:1px solid #eee;
      .height_list .height-list{
        float:left;
        width:50px;
        height:26px;
        text-align:center;
        line-height:26px;
        margin:5px 10px 5px 0;
        border-radius:10px;
        background:#f1f3f4;
        text-decoration:underline;
      }
      .height_list .height-list-checked{
        float:left;
        width:50px;
        height:26px;
        text-align:center;
        line-height:26px;
        margin:5px 10px 5px 0;
        border-radius:10px;
        background:orange;
        color:#fff;
        text-decoration:underline;
      }
    }
    .buy_nub{
      height:50px;
      line-height:50px;
      border-bottom:1px solid #eee;
      p{
        float:left;
      }
      .increase_btn{
        width:100px;
        height:26px;
        float:right;
        text-align:center;
        line-height:26px;
        background:#f1f3f4;
        border-radius:3px;
        margin-top:12px;
        a{
          width:30px;
          display:inline-block;
        }
        .number{
          width:33px;
          display:inline-block;
          height:26px;
          border-left:1px solid #fff;
          border-right:1px solid #fff;
        }
      }
    }
    .sure_btn{
      border-radius:0;
    }
  }
  .ivu-btn>span{
    text-decoration:underline;
  }
</style>
