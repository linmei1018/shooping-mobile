<style lang="less">
  @import "./ShopingCart.less";
</style>
<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="shop_header">
      <Checkbox class="checkAllShop"
        :indeterminate="indeterminate"
        :value="checkAll"
        @click.prevent.native="handleCheckAll">
        <img src="../../assets/other_icon/shop.png" style="width:16px;height:16px;margin-left:10px;" />
        小米家的店
      </Checkbox>
      <a class="shop_cart_edit" v-if="!isEdit" @click="shopCartEdit">编辑</a>
      <a class="shop_cart_edit" v-else @click="shopCartFinish">完成</a>
    </div>
    <div class="shop_content">
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
          <ul>
            <li class="shop_cart_list">
              <Checkbox  label=""></Checkbox>
              <div class="shop_cart_item">
                <Col span="8">
                  <img src="../../assets/shopping-icon/need_buy_clothes/need01.png" />
                </Col>
                <Col span="16" class="text_conter">
                  <div v-if="isEdit" class="nub_roughly">
                    <span @click="mimusBtn">-</span>
                    <span class="shop_nub">3</span>
                    <span @click="addBtn">+</span>
                  </div>
                  <p v-else>商品介绍j可分为几个配角安排给附加额外加分</p>
                  <span class="text_remark">备注分为嘎Greg经理</span>
                  <div class="money_nub">
                    <span class="money_text">￥69.00</span>
                    <span class="nub_text">x1</span>
                  </div>
                </Col>
              </div>
              <div v-if="isEdit" class="remove-btn">
                删除
              </div>
            </li>
          </ul>
      </CheckboxGroup>
    </div>
    <div class="shop_footer">
      <Checkbox class="checkAllShop"
                :indeterminate="indeterminate"
                :value="checkAll">全选</Checkbox>
      <div class="settlement_content">
        <Col span="16" class="settlement_text">
          <p>合计：<span style="color:red;">￥69.00</span></p>
          <span style="font-size:10px;color:grey;">不含运费</span>
        </Col>
        <Col span="8">
          <button class="settlement_btn">结算</button>
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
        checkAll: false,
        checkAllGroup: [],
        isEdit: false,
      }
    },
    methods: {
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['1'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      },
    //  编辑
      shopCartEdit(){
        this.isEdit = true;
      },
      //编辑完成
      shopCartFinish(){
        this.isEdit = false;
      },
    // 减
      mimusBtn(){

      },
      //加
      addBtn(){

      }
    }
  }
</script>

