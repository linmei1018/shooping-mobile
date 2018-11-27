<style lang="less">
  @import "./ShopingCart.less";
</style>
<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="shop_header">
      <Checkbox type='checkbox' class="checkAllShop"
                :value="isCheckedAll"
                @on-change="handleCheckAll()"></Checkbox>
        <img src="../../assets/other_icon/shop.png" style="width:16px;height:16px;margin-left:10px;" />
        小米家的店
      <a class="shop_cart_edit" v-if="!isEdit" @click="shopCartEdit">编辑</a>
      <a class="shop_cart_edit" v-else @click="shopCartFinish">完成</a>
    </div>
    <div class="shop_content">
        <ul>
          <li class="shop_cart_list" v-for="item in shopCartList" :key="item.shopID">
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
                  <span class="nub_text">x1</span>
                </div>
              </Col>
            </div>
            <div v-if="isEdit" class="remove-btn">
              删除
            </div>

          </li>
        </ul>

    </div>
    <div class="shop_footer">
      <Checkbox class="checkAllShop"
                @on-change="handleCheckAll"
                :value="isCheckedAll">全选</Checkbox>
      <div class="settlement_content">
        <Col span="16" class="settlement_text">
          <p>合计：<span style="color:red;">{{ TotalSum | formatMoney }}</span></p>
          <span style="font-size:10px;color:grey;">不含运费</span>
        </Col>
        <Col span="8">
          <button v-if="!isEdit" :class="isChecked?'redSettlement_btn':'settlement_btn'">结算</button>
          <button v-else class="settlement_btn allRemove_btn">删除</button>
        </Col>
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
            shopRemark:'备注分为嘎Greg经理',
            unitPrice: 69,  //单价
            checked:false
          },
          {
            shopID: 2,
            img: require('../../assets/shopping-icon/need_buy_clothes/need01.png'),
            shopNub: 1,    //数量
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理',
            unitPrice: 69,  //单价
            checked:false
          },
          {
            shopID: 3,
            img: require('../../assets/shopping-icon/need_buy_clothes/need01.png'),
            shopNub: 1,    //数量
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理',
            unitPrice: 69,  //单价
            checked:false
          },
          {
            shopID: 4,
            img: require('../../assets/shopping-icon/need_buy_clothes/need01.png'),
            shopNub: 1,    //数量
            shopTitle:'商品介绍j可分为几个配角安排给附加额外加分',
            shopRemark:'备注分为嘎Greg经理',
            unitPrice: 69,  //单价
            checked:false
          },
        ],
        TotalSum:'',  //合计金额
        isChecked:false, //是否选中
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
        this.isChecked = selected;
      },
      //单选
      checkedOne(item,index){
        item.checked =!item.checked;
        let selected = item.checked
        this.selectedShopArr.splice(index-1, 1, selected);
        //判断商品是否全选
        if(this.selectedShopArr.length === this.shopCartList.length){
          this.isCheckedAll = !this.selectedShopArr.includes(false);
        }
        this.isChecked = selected;
      },
    //  编辑
      shopCartEdit(){
        this.isEdit = true;
      },
      //编辑完成
      shopCartFinish(){
        this.isEdit = false;
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
    },
    mounted(){
      this.shopCartList.forEach((item)=>{
        this.TotalSum = item.shopNub*item.unitPrice;

      })


    },

  }
</script>

