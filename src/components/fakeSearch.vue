<template>
  <div class="searchbox" @click="jumpToSearch">
    <img class="search-logo" src="../../static/image/search.png">
    <span>{{placeholder}}</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入品牌、店铺、车号'
    }
  },
  data () {
    return {}
  },
  methods: {
    jumpToSearch () {
      wx.navigateTo({
        url: '/pages/search/main'
      })
    }
  },
  created () {}
}
</script>

<style scoped>
.searchbox {
  width: 610rpx;
  background-color: #f0f0f0;
  height: 60rpx;
  border-radius: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #7c7c7c;
  font-size: 14px;
  padding-left: 30rpx;
}
.search-logo {
  height: 30rpx;
  width: 30rpx;
  margin-right: 10rpx;
}
</style>
