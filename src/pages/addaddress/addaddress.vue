<template>
  <div class="container">
    <form class="form-sub" @submit="formSubmit" report-submit="true">
      <div class="input-line">
        <div class="txt">收货人</div>
        <div class="input-box">
          <input name="consignee" type="text">
        </div>
      </div>
      <div class="input-line">
        <div class="txt">联系电话</div>
        <div class="input-box">
          <input name="phone"  type="number">
        </div>
      </div>
      <div class="input-line">
        <div class="txt">所在地区</div>
        <div class="input-box">
          <picker class="weui-btn" mode="region" :value="region" @change="CityChange">
            <div :class="{ 'text-right': checkRegion }" style="color:#989898">{{region}}</div>
          </picker>
        </div>
      </div>
      <div class="text-line">
        <div class="txt">详细地址</div>
        <div class="input-box">
          <textarea style="color:#989898" class="text-area" name="address" placeholder="请输入详细地址信息"></textarea>
        </div>
      </div>
      <div class="input-line default">
        <div class="txt">设置默认地址</div>
        <div class="input-box">
          <switch checked name="default" />
        </div>
      </div>
      <input name="region" type="text" disabled :value="region" style="visibility: hidden;">
      <div class="btn-sub">
        <button formType="submit">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      region: '请选择 ＞'

    }
  },
  computed: {
    checkRegion () {
      /* eslint-disable */
      return this.region.indexOf('请选择') !== -1 ? true : false
      /* eslint-enable */
    }
  },
  methods: {
    formSubmit (e) {
      console.log(e.target.value)
    },
    CityChange (e) {
      this.region = e.mp.detail.value.join('-')
    }
  }
}
</script>

<style scoped>
.container {
  padding: 20rpx 0;
}
.form-sub {
  width: 650rpx;
}
.form-sub input {
  color: #989898;
}
.form-sub .input-line {
  font-size: 16px;
  display: flex;
  height: 100rpx;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  align-items: center;
}
.form-sub .input-line .txt {
  width: 170rpx;
}
.form-sub .input-line .input-box {
  flex: 1;
}
.form-sub .text-line {
  padding-top: 30rpx;
  height: 150rpx;
  font-size: 16px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.form-sub .text-line .txt {
  width: 170rpx;
}
.form-sub .text-area {
  width: 380rpx;
  height: 100rpx;
}
.form-sub .default .txt {
  width:  230rpx;
}
.form-sub .default .input-box {
  display: flex;
  justify-content: flex-end;
}
.text-right {
  text-align: right;
}

.btn-sub button {
  background-color: #7d7f7e;
  color: #fff;
}
</style>
