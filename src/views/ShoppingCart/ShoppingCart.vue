<style lang="less">
  @import "ShoppingCart.less";
</style>
<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="shop_cart_null" v-if="shopCartList.length<=0">
      <p style="font-size:16px;">购物车快饿瘪了 T.T</p>
      <p class="cart_null_text">快给我挑点宝贝</p>
      <button class="go_shopping" @click="goHome">去逛逛</button>
    </div>
    <div class="shop_cart_something" v-else >
      <div class="shop_header">
        <Checkbox type='checkbox' class="checkAllShop"
                  :value="isCheckedAll"
                  @on-change="handleCheckAll()"></Checkbox>
        <img src="../../assets/other_icon/shop.png" style="width:16px;height:16px;margin-left:10px;" />
        小米家的店
        <a class="shop_cart_edit" v-if="!isEdit" @click="shopCartEdit">编辑</a>
        <a class="shop_cart_edit" v-else @click="shopCartFinish">完成</a>
      </div>
      <div class="shop_content shop_list_scroll">
        <ul>
          <li class="shop_cart_list" v-for="(item,index) in shopCartList" :key="item.shopID">
            <Checkbox type='checkbox' :value="item.checked" @on-change='checkedOne(item,item.shopID)'></Checkbox>
            <div class="shop_cart_item">
              <Col span="8">
                <img :src="item.img" />
              </Col>
              <Col span="16" class="text_conter">
                <div v-if="isEdit" class="nub_roughly">
                  <span @click="changeMoney(item,-1)">-</span>
                  <span class="shop_nub">{{ item.shopNub }}</span>
                  <span @click="changeMoney(item,1)">+</span>
                </div>
                <p v-else>{{ item.shopTitle }}</p>
                <span class="text_remark">{{ item.shopRemark }}</span>
                <div class="money_nub">
                  <span class="money_text">{{ item.unitPrice | formatMoney }}</span>
                  <span class="nub_text">x{{ item.shopNub }}</span>
                </div>
              </Col>
            </div>
            <div v-if="isEdit" class="remove-btn" @click="SingleDeletion(index)">
              删除
            </div>
          </li>
        </ul>
      </div>
      <div class="shop_footer">
        <Checkbox class="checkAllShop"
                  @on-change="handleCheckAll"
                  :value="isCheckedAll">全选</Checkbox>
        <div class="settlement_content" v-if="!isEdit">
          <Col span="16" class="settlement_text">
            <p>合计：<span style="color:red;">{{ TotalSum | formatMoney }}</span></p>
            <span style="font-size:10px;color:grey;">不含运费</span>
          </Col>
          <Col span="8">
            <button  :class="this.selectedShopArr.includes(true)?'redSettlement_btn':'settlement_btn'" @click="settlement">结算</button>
          </Col>
        </div>
        <button v-else :class="this.selectedShopArr.includes(true)?'redRemove_btn':'allRemove_btn'" @click="allRemoveShop">删除</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        indeterminate: true,
        checkAll: false,  //全选
        checkAllGroup: [], //选中的商品
        isEdit: false,  //是否编辑
        isCheckedAll:false, //是否全选
        selectedShopArr:[], //选择的商品
        shopCartList:[   //购物车列表数据
          {
            shopID: 1,
            img: require('../../assets/shopping-icon/need_buy_clothes/need01.png'),
            shopNub: 1,    //数量
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理1',
            unitPrice: 69,  //单价
            checked:false
          },
          {
            shopID: 2,
            img: require('../../assets/shopping-icon/need_buy_clothes/need03.png'),
            shopNub: 1,    //数量
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理2',
            unitPrice: 69,  //单价
            checked:false
          }
        ],
        TotalSum: 0,  //合计金额
      }
    },
    filters:{
      formatMoney(value){
        value = Number(value);
        return "￥"+ value.toFixed(2);
      }
    },
    methods: {
      //全选
      handleCheckAll () {
        this.isCheckedAll = !this.isCheckedAll;
        let selected = this.isCheckedAll;
        this.selectedShopArr = [];
        this.shopCartList.forEach((item)=>{
          item.checked = selected;
          this.selectedShopArr.push(item.checked);
        });
        this.TotalComputation();
      },
      //单选
      checkedOne(item,index){
        item.checked =!item.checked;
        let selected = item.checked;
        this.selectedShopArr.splice(index-1, 1, selected);
        //判断商品是否全选
        if(this.selectedShopArr.length === this.shopCartList.length){
          this.isCheckedAll = !this.selectedShopArr.includes(false);
        }
        this.TotalComputation();
      },
      //计算总额
      TotalComputation(){
        this.TotalSum = 0; //先清零再计算
        this.shopCartList.forEach((item)=>{
          if(item.checked){
            this.TotalSum += item.shopNub*item.unitPrice;
          }
        })
      },
      // 编辑
      shopCartEdit(){
        this.isEdit = true;
      },
      //编辑完成
      shopCartFinish(){
        this.isEdit = false;
        this.TotalComputation();
      },
      // 加减
      changeMoney(product,type){
        if(type > 0){
          product.shopNub++;
        }else{
          product.shopNub--;
          if(product.shopNub<1){
            product.shopNub = 1;
          }
        }
      },
      //全部删除
      allRemoveShop(){
        if(this.selectedShopArr.includes(true)){
          let num = this.selectedShopArr.length;
          this.$Modal.confirm({
            content: '确定要删除这'+num+'个商品吗？',
            onOk: () => {
              this.$Message.info("删除成功");
              this.shopCartList.forEach((item,index)=>{
                if(item.checked){

                  //请求后台删除选中的商品
                }

              });
            }
          })
        }
      },
      //单个删除
      SingleDeletion(index){
        this.$Modal.confirm({
          content: '确定要删除这个商品吗？',
          onOk: () => {
              this.$Message.info("删除成功");
              this.shopCartList.splice(index, 1);
          }
        })
      },
      //结算
      settlement(){
          //跳转到地址选择页面
      },
      //去逛逛，跳转到首页
      goHome(){
        this.$router.push('/');
      }
    },
    mounted(){
      sessionStorage.shopCartNum = this.shopCartList.length;
      this.isCheckedAll = true;
      this.shopCartList.forEach((item,index)=>{
        item.checked = true;
        this.selectedShopArr.splice(index, 1, true);
      })
    },

  }
</script>

