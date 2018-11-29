<template>
  <div>
    <div v-if="orderTransactionList.length<=0" class="Empty_order">
      <img  src="../../../../assets/other_icon/empty_order.png" />
      <p style="color:grey;">暂无订单</p>
    </div>
    <ul>
      <li >

      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        orderTransactionList:[]
      }
    }
  }
</script>
<style>
  .Empty_order{
    margin-top:200px;
    background:#fafafa;
  }
</style>
