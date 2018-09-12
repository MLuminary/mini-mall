<template>
  <div class="content">
    <div class="top-search">
      <fakeSearch></fakeSearch>
      <img class="store-logo" src="../../../static/image/store.png" alt="">
    </div>
  </div>
</template>

<script>
import fakeSearch from '@/components/fakeSearch'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    fakeSearch
  },

  methods: {
  },

  created () {}
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.top-search {
  width: 730rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.store-logo {
  width: 50rpx;
  height: 50rpx;
}
</style>
