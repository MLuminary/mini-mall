<template>
  <div class="container">
    <div class="my-user-card">
      <div class="img-box">
        <img src="../../../static/image/certifisuccess.jpg">
      </div>
      <div class="text-box">
        <p class="top"><span style="color:#1fa195">身份证</span><span>已认证</span></p>
        <p class="user_name">肖晶</p>
        <p class="user_id">310*********1</p>
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
  height: 300rpx;
}
.my-user-card .img-box {
  width: 710rpx;
  height: 300rpx;
  overflow: hidden;
}
.my-user-card .img-box img {
  width: 710rpx;
  height: 300rpx;
}
.my-user-card .text-box{
  position: absolute;
  top: 0;
  padding: 30rpx 50rpx;
  width: 610rpx;
  color: #fff;
  font-size: 13px;
  line-height: 35px;
}
.my-user-card .text-box .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.my-user-card .text-box .user_name,
.my-user-card .text-box .user_id {
  font-size: 18px;
}
</style>
