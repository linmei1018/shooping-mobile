<template>
  <div>
    <mt-header fixed title="商品详情" ></mt-header>
    <div class="header_back" @click="goback">
      <Icon type="ios-arrow-back" size="16" />
    </div>
    <div class="primary_coverage">
      <div class="header">
        <mt-swipe :auto="0">
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/1.png" /></mt-swipe-item>
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/2.png" /></mt-swipe-item>
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/3.png" /></mt-swipe-item>
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/4.png" /></mt-swipe-item>
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/5.png" /></mt-swipe-item>
          <mt-swipe-item><img class="swiper_img" src="../../../assets/dedails/6.png" /></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="content">
        <div class="content_up">
          <div class="title">
            <p>2018儿童羽绒服冬季新款保暖外套中大童防风上衣男女童连帽亲子装</p>
            <p class="money">￥398</p>
            <span style="text-decoration: line-through;font-size:12px;color:grey;">399</span>
          </div>
          <div class="share">
            <Icon type="md-share" size="16" />
            <p>分享</p>
          </div>
        </div>
        <p class="freight">运费 免运费</p>
        <div class="range"></div>
        <mt-cell title="选择 颜色分类 参考身高"  is-link></mt-cell>
        <div class="range"></div>
        <mt-cell title="产品参数"  is-link></mt-cell>
        <!--评价-->
        <div class="evaluate_title"><span class="solid">————</span> <Icon type="ios-text-outline" size="18"/>评价 <span class="solid">————</span></div>
        <div class="evaluate_content">
          <p>宝贝评价<span>（3）</span></p>
          <div class="evaluate_cont">
            <div class="user_name">
              <img class="user_head" src="../../../assets/User_head.png" />
              <span> 思**3 </span>
              <img src="../../../assets/drill.png" />
              <img src="../../../assets/drill.png" />
              <img src="../../../assets/drill.png" />
            </div>
            <p>相比别的款式，这件算贵的，羽绒的，希望不漏毛把，颜值给满分，希望以后多些优惠，</p>
            <p class="parameter">参考身高:140cm;颜色分类:军绿色</p>
          </div>
          <Button size="small" class="see_all">查看全部评价</Button>
        </div>
        <div class="range"></div>
        <div class="Shop_owner">
          <mt-cell title="小米家的店">
            <Button class="enter_shop" size="small" shape="circle">进店</Button>
            <img slot="icon" src="../../../assets/logo.png" width="50" height="50">
          </mt-cell>
        </div>
        <ul class="authenticate">
          <li><Icon type="md-checkmark-circle-outline" /> 企业认证</li>
          <li><Icon type="md-checkmark-circle-outline" /> 企业认证</li>
          <li><Icon type="md-checkmark-circle-outline" /> 企业认证</li>
        </ul>
        <!--商品详情-->
        <div class="evaluate_title"><span class="solid">————</span> <Icon type="ios-image-outline" size="18" />商品详情 <span class="solid">————</span></div>
        <div class="Goods_details">
          <img class="big_img" src="../../../assets/dedails/big_img.png" />
          <div class="Designer_said">
            <img class="img_title" src="../../../assets/dedails/said.png" />
            <p>
              这款是亲子装哟！<br>
              你们有木有很开心啊！<br>
              zui大有180身高哟！<br>
              全家都可以穿的！<br>
              版型也好看！<br>
              背后的图案很炫哟！<br>
              短款 喜欢你们就BUY哟！
            </p>
          </div>
          <div class="Fabric_features">
            <div class="fabric_title"><img src="../../../assets/dedails/size_2.png" /></div>
            <div class="fabric_content">
              <ul class="fabric_list">
                <li>
                  <div class="serial_nub"><img src="../../../assets/dedails/x_01.png" /></div>
                  <p>外：100%聚酯纤维<br>里：100%聚酯纤维</p>
                </li>
                <li>
                  <div class="serial_nub"><img src="../../../assets/dedails/x_02.png" /></div>
                  <p>填充物：80%<br>白鸭绒20%羽片</p>
                </li>
                <li>
                  <div class="serial_nub"><img src="../../../assets/dedails/x_03.png" /></div>
                  <p>冒领填充物：<br>100%聚酯纤维</p>
                </li>
              </ul>
              <img src="../../../assets/dedails/001.png" />
            </div>
          </div>
          <div class="size_table">
            <img src="../../../assets/dedails/size.png" />
            <Table size="small" stripe :columns="sizeColumns" :data="sizeData"></Table>
            <p>温馨提示：人工测量，误差1-3cm，敬请谅解！</p>
          </div>
        </div>
        <div class="size_advice">
          <img src="../../../assets/dedails/size_1.png"/>
          <table class="size_advice_table" >
            <tbody>
              <tr>
                <td>尺码</td>
                <td>5码</td>
                <td>7码</td>
                <td>9码</td>
                <td>11码</td>
                <td>13码</td>
                <td>15码</td>
                <td>17码</td>
                <td>19码</td>
              </tr>
              <tr class="teshu">
                <td>对应身高(cm)</td>
                <td>90</td>
                <td>100</td>
                <td>110</td>
                <td>120</td>
                <td>130</td>
                <td>140</td>
                <td>150</td>
                <td>160</td>
              </tr>
              <tr>
                <td>对应体重( 斤 )</td>
                <td>25-28</td>
                <td>28-30</td>
                <td>35-38</td>
                <td>45-48</td>
                <td>50-55</td>
                <td>55-60</td>
                <td>63-68</td>
                <td>75左右</td>
              </tr>
            </tbody>
          </table>
          <p>温馨提示：一般正常体型的宝宝身高尺寸是这样的，亲对照下自己宝宝的身高，稍胖的可以考虑买大一码的哦！</p>
        </div>
        <div class="washing_state">
          <img class="washing_title" src="../../../assets/dedails/size_5.png" alt="">
          <img class="washing_content" src="../../../assets/dedails/x_t.png" alt="">
          <p>深色系衣服刚开始洗可以加些盐固色。</p>
        </div>
        <p class="prompt">全棉类衣服洗涤时有浮毛，成分为棉花的纤维，属于正常现象。</p>
        <div class="collocation">
          <div class="collocation_title"><img src="../../../assets/dedails/size_3.png" alt=""></div>
          <Row>
            <Col span="8">
              <img src="../../../assets/dedails/11.png" alt="">
              <div class="Click_buy">
                <img src="../../../assets/dedails/nub_1.png" alt="">
                <span>点击购买</span>
              </div>
            </Col>
            <Col span="8">
              <img src="../../../assets/dedails/22.png" alt="">
              <div class="Click_buy">
                <img src="../../../assets/dedails/nub_2.png" alt="">
                <span>点击购买</span>
              </div>
            </Col>
            <Col span="8">
              <img src="../../../assets/dedails/33.png" alt="">
              <div class="Click_buy">
                <img src="../../../assets/dedails/nub_3.png" alt="">
                <span>点击购买</span>
              </div>
            </Col>
          </Row>
        </div>
        <!--颜色展示-->
        <div class="color_show">
          <div class="color_show_title"><img src="../../../assets/dedails/size_4.png" alt=""></div>
          <Row>
            <Col span="12">
              <img src="../../../assets/dedails/c1.png" alt="">
              <div class="color_text">
                <img src="../../../assets/dedails/color.png" alt="">
                <span>军绿色</span>
              </div>
            </Col>
            <Col span="12">
              <img src="../../../assets/dedails/c2.png" alt="">
              <div class="color_text">
                <img src="../../../assets/dedails/color.png" alt="">
                <span>黑色</span>
              </div>
            </Col>
          </Row>
        </div>
        <!--模特展示-->
        <div class="model_show">
          <div class="title"><img src="../../../assets/dedails/m_1.png" alt=""></div>
          <p>模特:嘟嘟 身高:95cm 体重:14kg 试穿尺码:110/9码</p>
          <ul class="model_show_list">
            <li v-for="item in modelShowList">
              <img v-lazy="item" />
            </li>
          </ul>
        </div>
        <!--细节展示-->
        <div class="details_show">
          <img src="../../../assets/dedails/m_2.png" alt="">
          <ul class="details_list">
            <li style="float:left;width:48%;height:200px;padding-bottom:40px;">
              <img src="../../../assets/dedails/111.png" alt="">
              <div class="text">
                <img src="../../../assets/dedails/positive.png" alt="">
                <p>正面</p>
              </div>
            </li>
            <li style="float:right;width:48%;height:200px;padding-bottom:40px;">
              <img src="../../../assets/dedails/222.png" alt="">
              <div class="text">
                <img src="../../../assets/dedails/negative.png" alt="">
                反面
              </div>
            </li>
            <li><img src="../../../assets/dedails/01.png" alt=""><h3>面料设计</h3><p>亲和肌肤，适合人体肌肤亲密接触，透气无刺激。</p></li>
            <li  style="float:left;width:48%;height:200px;padding-bottom:40px;margin:10px 0;"><img src="../../../assets/dedails/02.png" alt=""><h3>工艺细节</h3><p>精致走线 走线工整 彰显品质</p></li>
            <li  style="float:right;width:48%;height:200px;padding-bottom:40px;margin:10px 0;"><img src="../../../assets/dedails/03.png" alt=""><h3>设计剪裁</h3><p>立体剪裁 潮流与防风兼具</p></li>
            <li><img src="../../../assets/dedails/04.png" alt=""></li>
            <li style="float:left;width:48%;height:160px;margin:10px 0;"><img src="../../../assets/dedails/05.png" alt=""></li>
            <li style="float:right;width:48%;height:160px;margin:10px 0;"><img src="../../../assets/dedails/06.png" alt=""></li>
          </ul>
        </div>
        <!--价格说明-->
        <div class="price_description">
          <p>价格说明</p>
          <ul class="text_list">
            <li>
              <dt>划线价格</dt>
              <dd>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span>并非原价</span>，仅供参考。</dd>
            </li>
            <li>
              <dt>未划线价格</dt>
              <dd>指商品的<span>实时标价</span>，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</dd>
            </li>
            <li>商家详情页（含主图）以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、满减或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。</li>
            <li>此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        //参考尺寸表格数据
        sizeColumns: [
          {
            title: '尺码',
            key: 'size'
          },
          {
            title: '衣长',
            key: 'long'
          },
          {
            title: '胸围*2',
            key: 'chest'
          },
          {
            title: '袖长/领口量',
            width: 100,
            key: 'Collar'
          }
        ],
        sizeData: [
          {
            size: '110cm',
            long: 44,
            chest: '42',
            Collar: '49'
          },
          {
            size: '120cm',
            long: 48,
            chest: '45',
            Collar: '51'
          },
          {
            size: '130cm',
            long: 53,
            chest: '48',
            Collar: '55'
          },
          {
            size: '140cm',
            long: 56,
            chest: '50',
            Collar: '60'
          },
          {
            size: '150cm',
            long: 59,
            chest: '52',
            Collar: '62'
          },
          {
            size: '160cm',
            long: 63,
            chest: '54',
            Collar: '68'
          },
          {
            size: '170cm',
            long: 68.5,
            chest: '57',
            Collar: '74'
          }
          ,
          {
            size: '180cm',
            long: 73.5,
            chest: '60',
            Collar: '80'
          }
        ],
        //模特展示图片组
        modelShowList:[
          require('../../../assets/dedails/a.png'),
          require('../../../assets/dedails/b.png'),
          require('../../../assets/dedails/c.png'),
          require('../../../assets/dedails/d.png'),
          require('../../../assets/dedails/e.png'),
          require('../../../assets/dedails/f.png'),
          require('../../../assets/dedails/g.png'),
          require('../../../assets/dedails/h.png'),
          require('../../../assets/dedails/i.png'),
          require('../../../assets/dedails/j.png'),
          require('../../../assets/dedails/k.png'),
          require('../../../assets/dedails/l.png'),
          require('../../../assets/dedails/m.png'),
          require('../../../assets/dedails/o.png'),
          require('../../../assets/dedails/p.png'),
          require('../../../assets/dedails/q.png'),
          require('../../../assets/dedails/r.png'),
          require('../../../assets/dedails/s.png'),
          require('../../../assets/dedails/t.png'),
          require('../../../assets/dedails/u.png'),
          require('../../../assets/dedails/v.png')
        ]
      }
    },
    methods:{
      goback(){
        this.$router.go('-1');
      }
    }
  }
</script>
<style lang="less">
  @import "./CommodityDetails.less";
</style>
