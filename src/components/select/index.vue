<template>
  <div class="ss-select"
    :class="[
      disabled && 'ss-select__disabled'
    ]"
    @click.stop="handleClick"
  >
    <div class="ss-select-multiple" v-if="multiple" ref="multiple">
      <ss-tag type="info" 
        v-for="item in selectedObject" 
        :key="getItemValue(item)">
        {{ getItemLabel(item) }}
      </ss-tag>
    </div>
    <ss-input :class="[
        isFocus && 'is-focus'
      ]"
      :placeholder="placeholder || '请选择'" 
      readonly 
      ref="input"
      :style="[
        multipleHeight && {height: `${multipleHeight}px`}
      ]"
      :disabled="disabled"
      v-model="selectLabel"
      @focus="handleInputFocus" 
      @blur="handleInputBlur">
      <template slot="suffix">
        <i class="ss-input-icon icon-icon_down"
          :class="[
            isFocus && isDropdownShow && 'is-reverse'
          ]">
        </i>
      </template>
    </ss-input>
    <div class="ss-select-dropdown" 
      :class="[isFocus && isDropdownShow && 'ss-select-dropdown__show']"
    >
      <ul class="ss-select-dropdown-list" v-if="list.length">
        <li class="ss-select-dropdown-item" 
          :class="[
            hoverIndex === index && 'ss-select-dropdown-item__hover',
            selectIndex === index && 'ss-select-dropdown-item__selected',
            item.disabled && 'ss-select-dropdown-item__disabled'
          ]"
          @mouseenter="hoverItem(index)"
          v-for="(item, index) in list" 
          :key="getItemValue(item)"
          @click.stop="handleItemClick(item, index)"
        >
          {{ getItemLabel(item) }}
        </li>
      </ul>
      <ul class="ss-select-dropdown-list ss-select-dropdown-list__empty"
        @click.stop
        v-else>
        列表为空
      </ul>
    </div>
  </div>
</template>

<script>
import SsInput from '@/components/input'
import SsTag from '@/components/tag'

export default {
  components: {
    SsInput,
    SsTag
  },
  props: {
    value: {},
    placeholder: String,
    disabled: Boolean,
    list: {
      require: true,
      type: Array
    },
    multiple: Boolean
  },
  data() {
    return {
      isFocus: false,
      isDropdownShow: false,
      isDropdownClick: false,
      selectLabel: '',
      selectIndex: -1,
      hoverIndex: -1,
      selectedObject: {},
      multipleHeight: null
    }
  },
  computed: {
    isItemObject() {
      const item = this.list[0]
      if (item && Object.prototype.toString.call(item) === '[object Object]') {
        return true
      }
      return false
    }
  },
  methods: {
    getItemLabel(item) {
      if (this.isItemObject) {
        return item.label || item.value
      }
      return item
    },
    getItemValue(item) {
      if (this.isItemObject) {
        return item.value
      }
      return item
    },
    handleInputFocus() {
      this.isFocus = true
    },
    handleInputBlur() {
      this.timer = setTimeout(() => {
        if (this.isDropdownClick) {
          this.isDropdownClick = false
        } else {
          this.isFocus = false
          this.isDropdownShow = false
        }
      }, 100)
    },
    handleClick() {
      if (!this.disabled) {
        this.isDropdownShow = !this.isDropdownShow
        this.hoverIndex = this.selectIndex
      }
    },
    hoverItem(index) {
      this.hoverIndex = index
    },
    handleItemClick(item, index) {
      if (!item.disabled) {
        this.$refs.input.focus()
        if (!this.multiple) {
          this.isDropdownClick = true
          this.selectLabel = item.label || item
          this.selectIndex = index
          this.hoverIndex = index
          this.isDropdownShow = false
          this.$emit('input', item.value || item)
          return
        } 

        clearTimeout(this.timer)
        if (this.selectedObject[index]) {
          delete this.selectedObject[index]
        } else {
          this.selectedObject[index] = item
        }
        this.changeMultipleHeight()
      }
    },
    changeMultipleHeight() {
      this.$nextTick(() => {
        this.multipleHeight = this.$refs.multiple.clientHeight
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/base.scss';

  .ss-select {
    position: relative;
    width: 240px;
    color: #353535;
    font-size: 14px;
    &.ss-select__disabled {
      cursor: not-allowed;
      .ss-input-inner {
        cursor: not-allowed;
      }
    }
    .ss-select-multiple {
      position: absolute;
      width: 100%;
      padding: 4px 30px 4px 2px;
      font-size: 0;
      box-sizing: border-box;
      z-index: 1;
      pointer-events: none;
      .ss-tag {
        margin: 3px 0 3px 6px;
      }
    }
    .ss-input-inner {
      cursor: pointer;
    }
    .ss-select-dropdown {
      position: absolute;
      left: 0;
      top: 36px;
      width: 100%;
      max-height: 210px;
      overflow-x: hidden;
      overflow-y: auto;
      background: rgba(255,255,255,1);
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.09), 0px 6px 12px 0px rgba(0,0,0,0.06);
      border-radius: 2px;
      transition: transform .15s ease-in-out;
      transform-origin: 50% 0%;
      transform: scaleY(0);
      z-index: 1;
      &.ss-select-dropdown__show {
        transform: scaleY(1);
      }
      .ss-select-dropdown-list {
        margin: 0;
        padding: 0;
        list-style: none;
        &.ss-select-dropdown-list__empty {
          height: 100px;
          line-height: 100px;
          text-align: center;
        }
      }
      .ss-select-dropdown-item {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        box-sizing: border-box;
        cursor: pointer;
        &.ss-select-dropdown-item__hover {
          background-color: #F5F7FA;
        }
        &.ss-select-dropdown-item__disabled {
          background-color: transparent;
          color: #B2B2B2;
          cursor: not-allowed;
        }
        &.ss-select-dropdown-item__selected {
          color: $mc;
        }
      }
    }
  }
</style>
