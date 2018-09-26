<template>
  <div class="container">
    <form class="form-sub" @submit="formSubmit" report-submit="true">
      <div class="txt-info">
        <p>当前仅支持身份证实名认证</p>
      </div>
      <div class="input-line">
        <div class="logo">
          <img class="user" src="../../../static/image/certifi_user.png">
        </div>
        <div class="input-box">
          <input name="userName" type="text" placeholder="请输入姓名">
        </div>
      </div>
      <div class="input-line">
        <div class="logo">
          <img class="id" src="../../../static/image/certifi_id.png">
        </div>
        <div class="input-box">
          <input name="idCard" type="number" placeholder="请输入身份证号码">
        </div>
      </div>
    </form>
    <div class="btn-sub">
        <button formType="submit">提交认证</button>
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
      formSubmit (e) {
        console.log(e.target.value)
      }
    }
  }
</script>

<style>
  page {
    height: 100%;
  }
  .container {
    padding: 0;
    background-color: #f2f2f2;
    height: 100%;
    justify-content: space-between;
  }
  .txt-info {
    width: 100%;
    text-align: left;
    font-size: 13px;
  }
  .txt-info p {
    margin: 30rpx;
  }
  .form-sub {
    width: 750rpx;
  }
  .form-sub .input-line {
    height: 100rpx;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #000;
    background-color: #fff;
  }
  .form-sub .input-line .input-box {
    flex: 1;
  }
  .form-sub .input-line .logo {
    width: 100rpx;
    text-align: center;
  }
  .form-sub .input-line .logo .user {
    width: 39rpx;
    height: 39rpx;
  }
  .form-sub .input-line .logo .id {
    width: 45rpx;
    height: 33rpx;
  }
  .btn-sub {
    margin-bottom: 150rpx;
    width: 650rpx;
  }
  .btn-sub button {
    background-color: #009d8e;
    color: #fff;
    font-size: 16px;
    padding: 5rpx 0;
  }
</style>

