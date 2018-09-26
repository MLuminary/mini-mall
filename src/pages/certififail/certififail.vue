<template>
  <div class="container">
    <div class="msg-box">
      <div class="image">
        <img src="../../../static/image/certificatefail.png">
      </div>
      <div class="txt-box">
        <p>认证失败</p>
        <p class="msg">认证信息有误，请核对信息后重新提交</p>
      </div>
    </div>
    <div class="btn-block">
      <button>重新认证</button>
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
