<template>
  <ul class="ss-pagination">
    <li class="ss-pagination-item ss-pagination-left">
      <i class="icon-icon-pagination-left"></i>
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
      <i class="icon-icon-pagination-right"></i>
    </li>
    <li class="ss-pagination-options">
      <div class="ss-pagination-options-size">
        <ss-select v-model="currentPageSize" @change="selectChange">
          <ss-option v-for="item in pageSizeList" 
            :key="item" 
            :value="item"
            :label="`${item} 条/页`">
          </ss-option>
        </ss-select>
      </div>
      <div class="ss-pagination-options-jump">
        跳至<input class="ss-pagination-options-jump-input" type="text">页
      </div>
    </li>
  </ul>
</template>

<script>
import SsSelect from '../select'
import SsOption from '../option'

export default {
  components: {
    SsSelect,
    SsOption
  },
  props: {
    total: Number,
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: Array
  },
  data() {
    return {
      current: 1,
      currentPageSize: this.pageSize
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
    },
    pageSizeList() {
      const list = this.pageSizeOptions || [10, 20, 30, 40]
      return list
    }
  },
  methods: {
    handleItemClick(index) {
      if (this.current !== index) {
        this.current = index
        this.emit('change', index)
      }
    },
    selectChange(val) {
      console.log(val)
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
      width: 32px;
      height: 32px;
      line-height: 30px;
      padding: 0 4px;
      background: #fff;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-right: 8px;
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
    .ss-pagination-right {
      margin-right: 0
    }
    .ss-pagination-ellipsis {
      border: none;
      color: rgba(0, 0, 0, .25);
    }
    .ss-pagination-options {
      display: inline-block;
      margin-left: 16px;
      font-size: 0;
      .ss-pagination-options-size {
        display: inline-block;
        width: 100px;
        margin-right: 11px;
      }
      .ss-pagination-options-jump {
        display: inline-block;
        font-size: 14px;
        .ss-pagination-options-jump-input {
          width: 50px;
          height: 32px;
          padding: 4px 11px;
          margin: 0 8px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          box-sizing: border-box;
          outline: none;
          transition: border-color .3s ease-in-out;
          &:hover, &:focus {
            border-color: #2A75ED;
          }
        }
      }
    }
  }
</style>
