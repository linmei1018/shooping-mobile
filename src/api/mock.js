import Mock from 'mockjs'

Mock.mock('/orderTransactionList', {   //'/list'  =>接口地址,Mock变量提供一个mock方法
  'orderList': [
    {
      name: 'Whole',
      text: '全部',
      orderTransactionList:[
        {
          order_id: 1,
          order_time:'2018-11-28',
          deal_done:'交易完成',
          img: '../../../../assets/shopping-icon/need_buy_clothes/need10.png',
          shop_introduce: '商品介绍jfd房间看大哥了德国大使馆',
          shop_price: 69,
          shop_remark: '备注分为嘎Greg经理',
          shop_num: 1,
          shop_total: 69
        },
        {
          order_id: 2,
          order_time:'2018-11-25',
          deal_done:'交易完成',
          img: '../../assets/shopping-icon/need_buy_clothes/need17.png',
          shop_introduce: '商品介绍jfd房间看大哥了德国大使馆',
          shop_price: 199,
          shop_remark: '备注分为嘎Greg经理',
          shop_num: 1,
          shop_total: 199
        }
      ]
    },
    {
      name: 'PendingPayment',
      text: '待付款',
      orderTransactionList: []
    },
    {
      name: 'ToBeShipped',
      text: '待发货',
      orderTransactionList:[]
    },
    {
      name: 'Shipped',
      text: '已发货',
      orderTransactionList:[]
    },
    {
      name: 'Completed',
      text: '已完成',
      orderTransactionList:[
        {
          order_id: 1,
          order_time:'2018-11-28',
          deal_done:'交易完成',
          img: '../../../assets/shopping-icon/need_buy_clothes/need10.png',
          shop_introduce: '商品介绍jfd房间看大哥了德国大使馆',
          shop_price: 69,
          shop_remark: '备注分为嘎Greg经理',
          shop_num: 1,
          shop_total: 69
        },
        {
          order_id: 2,
          order_time:'2018-11-25',
          deal_done:'交易完成',
          img: '../../../assets/shopping-icon/need_buy_clothes/need17.png',
          shop_introduce: '商品介绍jfd房间看大哥了德国大使馆',
          shop_price: 199,
          shop_remark: '备注分为嘎Greg经理',
          shop_num: 1,
          shop_total: 199
        },
        {
          order_id: 3,
          order_time:'2018-11-12',
          deal_done:'交易完成',
          img: '../../assets/shopping-icon/need_buy_clothes/need08.png',
          shop_introduce: '商品介绍jfd房间看大哥了德国大使馆',
          shop_price: 49,
          shop_remark: '备注分为嘎Greg经理',
          shop_num: 1,
          shop_total: 49
        }
      ]
    }
  ]
});
Mock.mock('/couponList', {
  'couponList':[
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
});


