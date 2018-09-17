<template>
  <div class="container">
    <div class="top-search">
      <fakeSearch></fakeSearch>
      <img class="store-logo" src="../../../static/image/store.png" alt="">
    </div>
    <div class="carousel">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <block v-for="(item, index) in imgBox" :key="index">
              <swiper-item>
                  <image :src="item" class="slide-image" mode="aspectFill"/>
              </swiper-item>
          </block>
      </swiper>
    </div>
    <div class="selectBoxs">
      <div class="selectBox" @click="jumpToActivity">
        <img class="iconBox" style="width:50rpx;height:50rpx" src="../../../static/image/gift.png">
        <p>活动</p>
      </div>
      <div class="selectBox" @click="jumpToCoupon">
        <img class="iconBox" style="width:62rpx;height:45rpx" src="../../../static/image/ticket.png">
        <p>领券</p>
      </div>
      <div class="selectBox">
        <img class="iconBox" style="width:62rpx;height:45rpx" src="../../../static/image/wifi.png">
        <p>免费WiFi</p>
      </div>
      <div class="selectBox">
        <img class="iconBox" style="width:62rpx;height:45rpx" src="../../../static/image/car.png">
        <p>停车</p>
      </div>
    </div>
    <div class="card-content">
      <div class="card-title">
        <h1>商家优选</h1>
        <span class="more">更多 ＞</span>
      </div>
      <div class="card" @click="jumpToShopDetail">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
      <div class="card" @click="jumpToShopDetail">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="card-title">
        <h1>优惠活动</h1>
        <span class="more">更多 ＞</span>
      </div>
      <div class="scard" @click="jumpToActivityDetail">
        <div class="text-box">
          <p style="font-size:14px;margin-top:30px;">C+创意空间</p>
          <p style="font-size:13px;color:#bdbcbd;margin-top:20rpx;">春暖花开装修节，下单即送豪礼</p>
          <p style="font-size:13px;color:#bdbcbd;margin-top:30rpx;">活动时间：3月1日-3月28日</p>
        </div>
        <div class="image-box">
          <img src="../../../static/image/bg2.jpg">
        </div>
      </div>
      <div class="scard" @click="jumpToActivityDetail">
        <div class="text-box">
          <p style="font-size:14px;margin-top:30px;">C+创意空间</p>
          <p style="font-size:13px;color:#bdbcbd;margin-top:20rpx;">春暖花开装修节，下单即送豪礼</p>
          <p style="font-size:13px;color:#bdbcbd;margin-top:30rpx;">活动时间：3月1日-3月28日</p>
        </div>
        <div class="image-box">
          <img src="../../../static/image/bg2.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fakeSearch from '@/components/fakeSearch'

export default {
  data () {
    return {
      motto: 'Hello World',
      imgBox: [
        '../../../static/image/bg1.jpg',
        '../../../static/image/bg1.jpg',
        '../../../static/image/bg1.jpg',
        '../../../static/image/bg1.jpg',
        '../../../static/image/bg1.jpg'
      ]
    }
  },

  components: {
    fakeSearch
  },

  methods: {
    // 跳转到 shopDetail
    jumpToShopDetail () {
      wx.navigateTo({
        url: '/pages/shopdetail/main'
      })
    },
    // 跳转到活动页面
    jumpToActivity () {
      wx.navigateTo({
        url: '/pages/allactivity/main'
      })
    },
    // 跳转到活动详情
    jumpToActivityDetail () {
      wx.navigateTo({
        url: '/pages/activitydetail/main'
      })
    },
    // 跳转到活动详情
    jumpToCoupon () {
      wx.navigateTo({
        url: '/pages/coupon/main'
      })
    }
  },
  created () {}
}
</script>

<style scoped>
.container {
  padding: 20px;
}
.top-search {
  width: 710rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.store-logo {
  width: 50rpx;
  height: 50rpx;
}
.carousel {
  margin-top: 30rpx;
  width: 710rpx;
  border-radius: 4px;
  overflow: hidden;
}
.slide-image {
  width: 710rpx;
}
.selectBoxs {
  display: flex;
  width: 750rpx;
  justify-content: space-between;
  align-items: center;
  box-shadow: #cccccc 5px 0 10px;
  margin-bottom: 30rpx;
}
.selectBoxs .selectBox {
  width: 187.5rpx;
  color: #7f7f7f;
  font-size: 13px;
  text-align: center;
  padding: 20rpx 0;
}
.selectBoxs .selectBox .iconBox {
  margin-bottom: 20rpx;
}
.card-content {
  width: 710rpx;
}
.card-content .card-title {
  display: flex;
  justify-content: space-between;
  margin-top: 20rpx;
}
.card-content .card-title h1 {
  font-weight: bold;
  font-size: 15px;
}
.card-content .card-title .more {
  color: #656465;
  font-size: 14px;
}
.card .card-info {
  display: flex;
  margin-top: 20rpx;
  justify-content: space-between;
  align-items: center;
}
.card .card-info .tag {
  position: relative;
  font-size: 12px;
  color: #fff;
  background: #009d8d;
  padding: 10rpx 30rpx 10rpx 20rpx;
  border-radius: 0 10px 10px 0;
  left: -20rpx;
}
.card .card-info .title {
  font-size: 14px;
}
.card .card-info .location {
  color: #bdbcbd;
  font-size: 12px;
}
.card .card-message {
  color: #bdbcbd;
  font-size: 12px;
  margin: 20rpx 0;
}
.card .card-image {
  overflow: hidden;
  width: 710rpx;
  border-radius: 4px;
}
.card .card-image img {
  width: 710rpx;
  height: 150px;
}
.scard {
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  height: 130px;
  margin: 30rpx 0;
}
.scard .text-box {
  width: 355rpx;
  text-align: center;
}
.scard .image-box {
  width: 355rpx;
  overflow: hidden;
}
.scard .image-box img {
  width: 355rpx;
  height: 130px;
}
</style>
