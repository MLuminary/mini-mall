<template>
  <div class="container">
    <div class="card">
      <div class="img-box">
        <img src="../../../static/image/couponbg.jpg">
      </div>
      <div class="txt-box">
        <p class="money-box">￥<span class="money">300</span><span class="msg">满2000可用</span></p>
        <p class="info">仅限购买卫浴产品使用</p>
      </div>
      <div class="progressbar">
          <canvas class="progress-inner" canvas-id="progress-inner0"></canvas>
          <canvas class="progress" canvas-id="progress0"></canvas>
          <div class="text-box">
            <div class="text">
              <p>已领</p>
              <p>{{percent * 100}}%</p>
            </div>
          </div>
          <div class="get-box">
            <span class="get">立即领取</span>
          </div>
      </div>
    </div>
     <div class="card">
      <div class="img-box">
        <img src="../../../static/image/couponbg.jpg">
      </div>
      <div class="txt-box">
        <p class="money-box">￥<span class="money">300</span><span class="msg">满2000可用</span></p>
        <p class="info">仅限购买卫浴产品使用</p>
      </div>
      <div class="progressbar">
          <canvas class="progress-inner" canvas-id="progress-inner1"></canvas>
          <canvas class="progress" canvas-id="progress1"></canvas>
          <div class="text-box">
            <div class="text">
              <p>已领</p>
              <p>{{percent * 100}}%</p>
            </div>
          </div>
          <div class="get-box">
            <span class="get">立即领取</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 0.2
    }
  },
  methods: {
    // 获取自适应单位
    getRpx () {
      let rpx = 1 // 相对单位
      return new Promise(resolve => {
        wx.getSystemInfo({
          success: function (res) {
            rpx = res.windowWidth / 375
            resolve(rpx)
          }
        })
      })
    },
    // 进度条背景
    drawProgressbg (rpx, canvaseId) {
      let ctx = wx.createCanvasContext(canvaseId)
      ctx.setLineWidth(4) // 设置圆环的宽度
      ctx.setStrokeStyle('#99e3dc') // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath() // 开始一个新的路径
      ctx.arc(
        37 * rpx,
        30 * rpx,
        25 * rpx,
        0.3 * Math.PI,
        0.7 * Math.PI,
        true
      )
      // 设置一个原点(110,110)，半径为100的圆的路径到当前路径
      ctx.stroke() // 对当前路径进行描边
      ctx.draw()
    },
    // 进度条
    drawProgress (rpx, value, canvaseId) {
      let ctxStart = 0.7
      let ctxEnd = 2.3
      let ctxRand = ctxEnd - ctxStart

      let ctx = wx.createCanvasContext(canvaseId)
      ctx.setLineWidth(4) // 设置圆环的宽度
      ctx.setStrokeStyle('#009d8e') // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath() // 开始一个新的路径
      ctx.arc(
        37 * rpx,
        30 * rpx,
        25 * rpx,
        ctxStart * Math.PI,
        (ctxStart + ctxRand * value) * Math.PI,
        false
      )
      // 设置一个原点(110,110)，半径为100的圆的路径到当前路径
      ctx.stroke() // 对当前路径进行描边
      ctx.draw()
    }
  },
  components: {},
  mounted () {
    this.getRpx().then(rpx => {
      for (let i = 0; i < 2; i++) {
        let canvaseId1 = `progress-inner${i}`
        let canvaseId2 = `progress${i}`
        this.drawProgressbg(rpx, canvaseId1)
        this.drawProgress(rpx, this.percent, canvaseId2)
      }
    })
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
.card {
  width: 710rpx;
  height: 200rpx;
  background: url('../../../static/image/coupon.jpg') center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rpx 0;
}
.card .img-box {
  width: 200rpx;
}
.card .img-box img {
  height: 190rpx;
  width: 200rpx;
  border-radius: 10rpx 0 0 10rpx;
}
.card .txt-box {
  width: 360rpx;
  padding-left: 10px;
  line-height: 25px;
}
.card .progressbar {
  position: relative;
  width: 150rpx;
  height: 200rpx;
}
.txt-box .money-box {
  color: #e31637;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.txt-box .info {
  font-size: 15px;
}
.txt-box .money-box .money {
  font-size: 24px;
  margin-right: 20rpx;
}
.txt-box .msg {
  padding: 0 5rpx;
  background-color: #fff4ec;
}
.progressbar {
  text-align: center;
}
.progressbar .progress-inner,
.progressbar .text-box,
.progressbar .progress {
  position: absolute;
  top: 10rpx;
  width: 150rpx;
  height: 130rpx;
}
.progressbar .text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 150rpx;
  font-size: 12px;
  text-align: center;
}

.progressbar .get {
  position: absolute;
  font-size: 12px;
  background-color: #009d8e;
  top: 130rpx;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 10rpx 15rpx;
  border-radius: 20rpx;
  color: #fff;
}
</style>

