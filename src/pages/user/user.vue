<template>
  <div class="container">
    <div class="my-user-card">
      <div class="img-box">
        <img src="../../../static/image/user_card.png">
      </div>
      <div class="text-box">
        <p>ddd</p>
        <p>NO.1730 7140 10</p>
      </div>
    </div>
    <div class="function-cards">
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/myorder.png">
        </div>
        <p>我的订单</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mypaper.png">
        </div>
        <p>我的卡券</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mygift.png">
        </div>
        <p>我的活动</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mycar.png">
        </div>
        <p>我的车辆</p>
      </div>
    </div>
    <div class="function-cards">
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mymath.png">
        </div>
        <p>装修计算机</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mylove.png">
        </div>
        <p>收藏店铺</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/mytip.png">
        </div>
        <p>投诉建议</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/myaddress.png">
        </div>
        <p>地址管理</p>
      </div>
    </div>
    <div class="function-cards">
      <div class="card" @click="jumpToCertificate">
        <div class="img-box">
          <img src="../../../static/image/certificate.png">
        </div>
        <p>实名认证</p>
      </div>
      <div class="card">
        <div class="img-box">
          <img src="../../../static/image/bank.png">
        </div>
        <p>银行卡绑定</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      // 跳转到实名认证界面
      jumpToCertificate () {
        wx.navigateTo({
          url: '/pages/certificate/main'
        })
      }
    }
  }
</script>

<style scoped>
.container {
  padding: 20rpx;
}
.my-user-card {
  position: relative;
  width: 710rpx;
  height: 400rpx;
}
.my-user-card .img-box {
  width: 710rpx;
  height: 400rpx;
  overflow: hidden;
}
.my-user-card .img-box img {
  width: 710rpx;
  height: 400rpx;
}
.my-user-card .text-box {
  position: absolute;
  color: #fff;
  bottom: 60rpx;
  left: 60rpx;
  font-size: 13px;
  line-height: 20px;
}
.function-cards {
  width: 710rpx;
  display: flex;
  justify-content: flex-start;
  margin-top: 50rpx;
}
.function-cards .card{
   width: 177.5rpx;
   text-align: center;
   font-size: 13px;
}
.card img {
  width:  60rpx;
  height: 60rpx;
}
</style>
