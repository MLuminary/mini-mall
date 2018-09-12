<template>
  <div class="search"  @click.native="jumpToFind()">
      <div class="search-container">
          <Icon class="searchUser" type="ios-search"/>
          <input ref="query" v-model="query" :placeholder="placeholder"/>
      </div>
  </div>
</template>

<script>
import { debounce } from '../common/tool'

export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入品牌、店铺、车号'
    }
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    setQuery (query) {
      this.query = query
    },
    blur () {
      // 失去焦点, 让键盘隐藏
      this.$refs.query.blur()
    },
    startSearch () {
      // 开始搜索
      this.$emit('startSearch')
    },
    jumpToFind () {
      this.$emit('jumpToFind')
    }
  },
  created () {
    // 监听 query，当 query 改变时传递 query 字符
    this.$watch(
      'query',
      debounce(newQuery => {
        this.$emit('query', newQuery)
      }, 200)
    )
  }
}
</script>

<style scoped>
.inputSearches {
  width: 700rpx;
  background-color: #fff;
  padding: 1rem;
}

.searchMsg button {
  width: 3rem;
  height: 3rem;
  margin-left: 0.3rem;
}

.searchUser {
  font-size: 2rem;
  line-height: 2rem;
}

.search > div {
  height: 3rem;
  background: #f0f0f0;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-radius: 30px;
  color: #495060;
}

.search input {
  outline: 0;
  border: 0;
  width: 90%;
  font-size: 1.1rem;
  padding-left: 0.2rem;
  background: transparent;
  color: #000;
  vertical-align: top;
  line-height: 2rem;
  height: 2rem;
}

.searchMsg button {
  border: 0;
  background-color: #fff;
  outline: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
</style>
