<template>
  <div class="container">
    <div class="header">
      <img class="shop-detail-bg" src="../../../static/image/shop-detail-bg.jpg">
      <div class="shop-logo">
        <img src="../../../static/image/shopDetail.jpg">
      </div>
      <div class="love">
        <img src="../../../static/image/heart.png">
      </div>
    </div>
    <div class="main-msg">
      <p class="title">德国高义</p>
      <p class="message">消费3000元送原装五金架一个，满5000元立减500元</p>
    </div>
    <div class="selectBoxs">
      <div class="selectBox" :class="{active: infoDetailFlag}" @click="chooseFlag(true)">
        <span>商品介绍</span>
      </div>
      <div class="selectBox" :class="{active: !infoDetailFlag}" @click="chooseFlag(false)">
        <span>店铺详情</span>
      </div>
    </div>
    <div class="card-content-info" v-if="infoDetailFlag">
      <div class="card">
        <div class="image-box">
          <img src="../../../static/image/shopDetail.jpg">
        </div>
        <div class="message-box">
          <p class="title">亚克力独立式浴缸</p>
          <p>型号：<span>DW02DW02DW02DW02</span></p>
          <p>颜色分类：<span>标准配置都维护看见我的低</span></p>
          <p>材质：<span>亚克力的我还得完克</span></p>
          <p>长度：<span>1.7M</span></p>
          <p>款式：<span>嵌入式低洼打我多</span></p>
        </div>
      </div>
       <div class="card">
        <div class="image-box">
          <img src="../../../static/image/shopDetail.jpg">
        </div>
        <div class="message-box">
          <p class="title">亚克力独立式浴缸</p>
          <p>型号：<span>DW02DW02DW02DW02</span></p>
          <p>颜色分类：<span>标准配置都维护看见我的低</span></p>
          <p>材质：<span>亚克力的我还得完克</span></p>
          <p>长度：<span>1.7M</span></p>
          <p>款式：<span>嵌入式低洼打我多</span></p>
        </div>
      </div>
       <div class="card">
        <div class="image-box">
          <img src="../../../static/image/shopDetail.jpg">
        </div>
        <div class="message-box">
          <p class="title">亚克力独立式浴缸</p>
          <p>型号：<span>DW02DW02DW02DW02</span></p>
          <p>颜色分类：<span>标准配置都维护看见我的低</span></p>
          <p>材质：<span>亚克力的我还得完克</span></p>
          <p>长度：<span>1.7M</span></p>
          <p>款式：<span>嵌入式低洼打我多</span></p>
        </div>
      </div>
    </div>
    <div class="card-content-msg" v-if="!infoDetailFlag">
      <div class="info">
        <p class="title">
          <img class="title-logo" src="../../../static/image/info.png">
          <span>品牌介绍</span>
        </p>
        <p class="txt">
          德国高仪（Friedrich Grohe AG & Co KG）集团是世界著名的卫浴产品与系统供应商及环球性出口商。成立于1936年，在全球140个
          国家拥有代表办事处，另有12家生产工厂及17家营业附属公司。是全球卫浴唯一一个获得最佳设计团队红点大奖。
          高仪占有大约8%的世界市场份额，是欧洲以及世界最大的领先卫浴设施制造商。
        </p>
      </div>
      <div class="info">
        <p class="title">
          <img class="title-logo" src="../../../static/image/round.png">
          <span>经营范围</span>
        </p>
        <p class="txt">
         厨卫用具、卫浴节水系统、电子设备以及前述产品的零部件等。
        </p>
      </div>
      <div class="info">
        <p class="title">
          <img class="title-logo" src="../../../static/image/location.png">
          <span>店铺地址</span>
        </p>
        <p class="txt">
          上海喜盈门国际建材品牌中心L1-102/103
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        infoDetailFlag: true
      }
    },
    methods: {
      chooseFlag (type) {
        this.infoDetailFlag = type
      }
    }
  }
</script>

<style scoped>
  .container {
    padding: 0;
  }
  .header {
    width: 750rpx;
  }
  .header .shop-detail-bg {
    width: 750rpx;
    height: 350rpx;
  }
  .shop-logo {
    width: 750rpx;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 200rpx;
  }
  .shop-logo img{
    width: 200rpx;
    height: 200rpx;
    box-shadow: rgb(156, 150, 150) 0px 3px 10px;
  }
  .love {
    position: absolute;
    width: 50rpx;
    height: 50rpx;
    background-color: #fff;
    border-radius: 50%;
    top: 330rpx;
    right: 70rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgb(156, 150, 150) 0px 3px 10px;
  }
  .love img {
    width: 30rpx;
    height: 25rpx;
  }
  .main-msg {
    width: 750rpx;
    text-align: center;
    margin-top: 90rpx;
  }
  .main-msg .title {
    font-size: 20px;
    margin-bottom: 20rpx;
  }
  .main-msg .message {
    font-size: 12px;
    color: #7f7f7f;
  }
  .selectBoxs {
    display: flex;
    justify-content: space-around;
    width: 750rpx;
    color: #7f7f7f;
    border-bottom: 1px solid #ebe8e8;
    margin: 50rpx 0;
    font-size: 16px;
  }
  .selectBoxs .selectBox {
    text-align: center;
    width: 376rpx;
    padding-bottom: 20rpx;
  }
  .selectBoxs .selectBox span {
    padding-bottom: 20rpx;
  }
  .selectBoxs .selectBox.active span {
    color: #000;
    font-weight: bold;
    border-bottom: 2px solid #009d8d;
  }
  .card-content-info {
    width: 710rpx;
    padding-bottom: 40rpx;
  }
  .card-content-info .card {
    display: flex;
    justify-content: center;
    margin-bottom: 20rpx;
  }
  .card-content-info .card .image-box img {
    width: 250rpx;
    height: 250rpx;
  }
  .card-content-info .card .message-box {
    flex: 1;
    margin-left: 20rpx;
    font-size: 12px;
    color: #7f7f7f;
    line-height: 20px;
  }
  .card-content-info .card .message-box .title {
    color:#000;
    font-size:13px;
    font-weight:bold;
  }
  .card-content-msg {
    width: 650rpx;
    padding-bottom: 40rpx;
  }
  .card-content-msg .info {
    border-bottom: 1px solid #ebe8e8;
    padding: 30rpx 0;
  }
  .card-content-msg .info .title .title-logo {
    width: 23rpx;
    height: 28rpx;
    margin-right: 15rpx;
  }
  .card-content-msg .info .title {
    display: flex;
    font-size: 15px;
    color: #000;
    align-items: center;
    position: relative;
    left: -38rpx;
  }
  .card-content-msg .info .txt {
    margin-top: 20rpx;
    line-height: 20px;
    font-size: 13px;
    color: #7f7f7f;
  }
</style>
