<template>
  <div class="container">
     <div class="selectBoxs">
      <div class="selectBox" :class="{active: activityFlag}" @click="chooseFlag(true)">
        <span>活动列表</span>
      </div>
      <div class="selectBox" :class="{active: !activityFlag}" @click="chooseFlag(false)">
        <span>活动日历</span>
      </div>
    </div>
    <div class="activityList" v-if="activityFlag">
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
    <div class="activityCalender" v-if="!activityFlag">
      <Calendar arrowLeft="../../../static/image/left.png" arrowRight="../../../static/image/right.png"  />
      <div class="card-info">
          <span><span class="tag">4.1</span><span class="title">罗布特卡沃利满额立减，豪礼送不停</span></span>
      </div>
      <div class="card-info">
          <span><span class="tag">4.1</span><span class="title">罗布特卡沃利满额立减，豪礼送不停</span></span>
      </div>
      <div class="card-info">
          <span><span class="tag">4.1</span><span class="title">罗布特卡沃利满额立减，豪礼送不停</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from 'mpvue-calendar'

export default {
  data () {
    return {
      activityFlag: true
    }
  },
  methods: {
    chooseFlag (type) {
      this.activityFlag = type
    },
    // 跳转到活动详情
    jumpToActivityDetail () {
      wx.navigateTo({
        url: '/pages/activitydetail/main'
      })
    }
  },
  components: {
    Calendar
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
.selectBoxs {
  display: flex;
  justify-content: space-around;
  width: 750rpx;
  color: #7f7f7f;
  border-bottom: 1px solid #ebe8e8;
  margin: 15rpx 0;
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
.scard {
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  height: 130px;
  margin: 15rpx 0;
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
.activityCalender {
  width: 750rpx;
}
.card-info {
  border: 1px solid #ebe8e8;
  padding: 20rpx 0;
  font-size: 13px;
  margin: 20rpx 0;
}
.card-info .tag {
  position: relative;
  color: #fff;
  background: #009d8d;
  padding: 10rpx 30rpx;
  border-radius: 0 20rpx 20rpx 0;
  left: -1rpx;
  margin-right: 20rpx;
}
</style>
