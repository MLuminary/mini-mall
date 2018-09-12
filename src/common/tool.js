// 防抖动
export function debounce (func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 插入一个值
export function insertArray (arr, val, compare, maxLen) {
  // 找到这个值在数组中的位置
  if (val.trim() === '') {
    return
  }
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  // 在开头插入最新搜索数据
  arr.unshift(val)
  // 当数组中的数据多余最大长度时删除最老的数据
  if (maxLen && maxLen < arr.length) {
    arr.pop()
  }
}
