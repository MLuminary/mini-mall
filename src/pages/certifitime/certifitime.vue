<template>
  <div class="container">
    <div class="msg-box">
      <div class="image">
        <img src="../../../static/image/result-time.png">
      </div>
      <div class="txt-box">
        <p>实名认证已提交</p>
        <p class="msg">认证中......请耐心等待</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
page{
  height: 100%;
}
.container {
  padding: 0;
  height: 100%;
  justify-content: flex-start;
}
.msg-box {
  text-align: center;
  padding: 250rpx 0;
}
.msg-box .image {
  margin-bottom: 50rpx;
}
.msg-box .image img {
  width: 204rpx;
  height: 204rpx;
}
.msg-box .txt-box .msg {
  font-size: 14px;
  color: #acacac;
  margin-top: 40rpx;
}
.btn-block {
  margin-top: 150rpx;
  width: 650rpx;
}
.btn-block button {
  background-color: #009d8e;
  color: #fff;
  font-size: 16px;
  padding: 5rpx 0;
}
</style>
