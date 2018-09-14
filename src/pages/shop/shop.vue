<template>
  <div class="container">
    <div class="top-box">
      <div class="top-search">
        <fakeSearch placeholder="输入品牌、店名"></fakeSearch>
      </div>
      <div class="selectBoxs">
        <div @click="toggleShowArea" class="selectBtn" :class="{active: showArea}" style="border-right: 1px solid #ebe8e8">
          <span>区域</span><img v-if="!showArea" style="width:21rpx; height:12rpx; margin-left:10rpx" src="../../../static/image/arrow.png"><img v-if="showArea" style="width:21rpx; height:12rpx; margin-left:10rpx" src="../../../static/image/arrow-active.png">
        </div>
        <div @click="toggleShowCategory" class="selectBtn" :class="{active: showCategory}">
          <span>品类</span><img v-if="!showCategory" style="width:21rpx; height:12rpx; margin-left:10rpx" src="../../../static/image/arrow.png"><img v-if="showCategory" style="width:21rpx; height:12rpx; margin-left:10rpx" src="../../../static/image/arrow-active.png">
        </div>
      </div>
    </div>
    <div class="areaContent" v-if="showArea">
      <ul class="areaUl">
        <li @click="chooseArea(0)" :class="{active: areaIndex === 0}">全部</li>
        <li @click="chooseArea(index+1)" :class="{active: areaIndex === index + 1}" v-for="(item,index) in areaLi" :key="index">
          {{item.area}}&nbsp;{{item.msg}}
        </li>
      </ul>
    </div>
    <div class="categoryContent" v-if="showCategory">
      <ul class="categoryFather">
        <li :class="{active: categoryId == 0}" @click="chooseCategory(0)">全部</li>
        <li :class="{active: categoryId == item.categoryId}" @click="chooseCategory(item.categoryId)" v-for="(item, index) in categoryUl" :key="index">
          {{item.msg}}
        </li>
      </ul>
      <ul class="categorySon">
        <li :class="{active: typeId == item.categoryId}" @click="chooseTypeId(item.categoryId)" v-for="(item, index) in categoryLi" :key="index">
          {{item.msg}}
        </li>
      </ul>
    </div>
    <div class="card-content">
      <div class="card">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <span><span class="tag">卫浴</span><span class="title">TOTO卫浴喜盈门旗舰店</span></span><span class="location"><img style="width:18rpx;height:25rpx;" src="../../../static/image/location.png"> L3-305</span>
        </div>
        <div class="card-message">
          来店送现金红包，手快有手慢无，满3000元立减300元
        </div>
        <div class="card-image">
          <img src="../../../static/image/bg1.jpg" alt="">
        </div>
      </div>
    </div>
    <div @click="hideAll()" v-if="showArea||showCategory" class="mask"></div>
  </div>
</template>

<script>
import fakeSearch from '@/components/fakeSearch'

export default {
  data () {
    return {
      showArea: false, // 控制区域列表的展示
      showCategory: false, // 控制品类列表的展示
      areaIndex: 0, // 控制区域的选择
      categoryId: 0, // 区域id
      typeId: 0, // 种类id
      areaLi: [
        {
          area: 'B1',
          msg: '瓷砖/卫浴/影音'
        },
        {
          area: 'L1',
          msg: '地板/厨具/采暖'
        },
        {
          area: 'L2',
          msg: '电器/门窗/灯具'
        }
      ],
      categoryUl: [
        {
          categoryId: 1, msg: '建材'
        },
        {
          categoryId: 2, msg: '家具'
        }
      ],
      categoryLis: [
        [
          {categoryId: 11, msg: '卫浴'},
          {categoryId: 12, msg: '地板'},
          {categoryId: 13, msg: '瓷砖'},
          {categoryId: 14, msg: '哈哈'},
          {categoryId: 15, msg: '嘿嘿'}
        ],
        [
          {categoryId: 21, msg: '桌子'},
          {categoryId: 22, msg: '凳子'}
        ]
      ]
    }
  },
  computed: {
    categoryLi () {
      if (this.categoryId > 0) {
        return this.categoryLis[this.categoryId - 1]
      } else {
        return []
      }
    }
  },
  components: {
    fakeSearch
  },
  methods: {
    toggleShowArea () {
      this.showArea = !this.showArea
    },
    toggleShowCategory () {
      this.showCategory = !this.showCategory
    },
    chooseArea (index) {
      this.areaIndex = index
      this.showArea = !this.showArea
    },
    hideAll () {
      this.showArea = false
      this.showCategory = false
    },
    chooseCategory (categoryId) {
      this.categoryId = categoryId
    },
    chooseTypeId (categoryId) {
      this.typeId = categoryId
      this.showCategory = false
    }

  },

  created () {}
}
</script>

<style scoped>
.container {
  padding: 0;
}
.top-box {
  position: relative;
  box-shadow: #cccccc 5px 0 10px;
  z-index: 2;
  background-color: #fff;
}
.top-search {
  width: 710rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.store-logo {
  width: 50rpx;
  height: 50rpx;
}
.selectBoxs {
  border-top: 1px solid #ebe8e8;
  width: 750rpx;
  margin-top: 30rpx;
  display: flex;
  height: 80rpx;
}
.selectBoxs .selectBtn {
  width: 375rpx;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebe8e8;
}
.selectBtn.active {
  border-bottom: 1px solid transparent;
}
.areaContent {
  position: absolute;
  top: 170rpx;
  width: 750rpx;
  background-color: #fff;
  color: #7f7f7f;
  font-size: 14px;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.areaContent .areaUl {
  width: 710rpx;
  padding: 10rpx;
}
.areaContent .areaUl li {
  border-bottom: 1px solid #ebe8e8;
  height: 35px;
  line-height: 35px;
}
.areaUl li.active {
  color: #000;
  font-weight: bold;
}
.categoryContent {
  position: absolute;
  top: 170rpx;
  width: 750rpx;
  background-color: #fff;
  color: #7f7f7f;
  font-size: 14px;
  display: flex;
  z-index: 2;
  text-align: center;
}
.categoryContent .categoryFather {
  width: 375rpx;
}
.categoryContent .categoryFather li {
  border-bottom: 1px solid #ebe8e8;
  border-right: 1px solid #ebe8e8;
  height: 35px;
  line-height: 35px;
}
.categoryContent .categorySon li {
  background-color: #f4f4f4;
  height: 35px;
  line-height: 35px;
}
.categoryContent .categorySon li.active,
.categoryContent .categoryFather li.active {
  color: #000;
  font-weight: bold;
}
.categoryContent .categorySon {
  width: 375rpx;
}

.card-content {
  width: 710rpx;
  padding-bottom: 50rpx;
}
.card .card-info {
  display: flex;
  margin-top: 20rpx;
  justify-content: space-between;
  align-items: center;
}
.card .card-info .tag {
  position: relative;
  font-size: 12px;
  color: #fff;
  background: #009d8d;
  padding: 10rpx 30rpx 10rpx 20rpx;
  border-radius: 0 10px 10px 0;
  left: -20rpx;
}
.card .card-info .title {
  font-size: 14px;
}
.card .card-info .location {
  color: #bdbcbd;
  font-size: 12px;
}
.card .card-message {
  color: #bdbcbd;
  font-size: 12px;
  margin: 20rpx 0;
}
.card .card-image {
  overflow: hidden;
  width: 710rpx;
  border-radius: 4px;
}
.card .card-image img {
  width: 710rpx;
  height: 150px;
}
.mask {
  width: 750rpx;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 1;
}

</style>
