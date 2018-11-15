<template>
  <ul class="ss-pagination">
    <li class="ss-pagination-item ss-pagination-left">
      <i class="icon-icon_pagination_left"></i>
    </li>
    <li class="ss-pagination-item" 
      :class="[current === 1 && 'ss-pagination-item__active']"
      @click="handleItemClick(1)">
      1
    </li>
    <li class="ss-pagination-item ss-pagination-ellipsis" v-if="isLeftEllipsisShow">
      •••
    </li>
    <li class="ss-pagination-item" 
      :class="[current === item && 'ss-pagination-item__active']"
      v-for="item in list"
      :key="item"
      @click="handleItemClick(item)">
      {{ item }}
    </li>
    <li class="ss-pagination-item ss-pagination-ellipsis" v-if="isRightEllipsisShow">
      •••
    </li>
    <li class="ss-pagination-item" 
      :class="[current === totalLength && 'ss-pagination-item__active']"
      @click="handleItemClick(totalLength)"
    >
      {{ totalLength }}
    </li>
    <li class="ss-pagination-item ss-pagination-right">
      <i class="icon-icon_pagination_right"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    total: Number,
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      current: -1
    }
  },
  computed: {
    totalLength() {
      return Math.ceil(this.total / this.pageSize)
    },
    list() {
      const arr = []
      let length = 5
      let start = 2
      if (this.totalLength >= 7) {
        length = 4
        if (this.totalLength - this.current < 3) {
          start = this.totalLength - 4
        } else if (this.current >= 4) {
          length = 5
          start = this.current - 2
        }
      } else {
        length = this.totalLength
      }
      for (let i = 0; i < length; i++, start++) {
        arr.push(start)
      }
      return arr
    },
    isLeftEllipsisShow() {
      return this.current > 4 && this.totalLength > 7
    },
    isRightEllipsisShow() {
      return this.totalLength - this.current >= 4 && this.totalLength > 7
    }
  },
  methods: {
    handleItemClick(index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
  .ss-pagination {
    font-size: 0;
    color: #353535;
    list-style: none;
    .ss-pagination-item {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 28px;
      padding: 0 4px;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 2px;
      margin: 0 5px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #2A75ED;
        border-color: #2A75ED;
      }
      &.ss-pagination-item__active {
        color: #2A75ED;
        border-color: #2A75ED;
      }
    }
    .ss-pagination-ellipsis {
      border: none;
      color: rgba(0, 0, 0, .25);
    }
  }
</style>
