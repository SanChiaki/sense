<template>
  <div class="ss-select"
    :class="[
      disabled && 'ss-select__disabled'
    ]"
    @click.stop="handleClick"
    v-clickoutside="handleClose"
  >
    <div class="ss-select-multiple" v-if="multiple" ref="multiple">
      <ss-tag type="info" 
        v-for="item in selectedArr" 
        :key="item.value">
        {{ item.label }}
      </ss-tag>
    </div>
    <ss-input :class="[
        isFocus || visible && 'ss-input__focus'
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
        <i class="ss-input-icon icon-icon-down"
          :class="[
            visible && 'is-reverse'
          ]">
        </i>
      </template>
    </ss-input>
    <ss-dropdown-menu :width="menuWidth">
      <slot></slot>
    </ss-dropdown-menu>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import Clickoutside from '@/utils/clickoutside'

import SsInput from '@/components/input'
import SsDropdownMenu from '@/components/dropdown/dropdownMenu'
import SsTag from '@/components/tag'

export default {
  name: 'SsSelect',
  componentName: 'SsSelect',
  mixins: [Emitter],
  provide() {
    return {
      select: this
    }
  },
  directives: { Clickoutside },
  components: {
    SsInput,
    SsDropdownMenu,
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
      options: [],
      isFocus: false,
      visible: false,
      selectLabel: '',
      selectedArr: [],
      multipleHeight: null,
      menuWidth: 0
    }
  },
  mounted() {
    this.setMenuWidth()
    
    this.$on('selectOption', this.handleSelectOption)
  },
  watch: {
    visible(val) {
      this.broadcast('SsDropdownMenu', 'visible', val)
    }
  },
  methods: {
    handleInputFocus() {
      this.isFocus = true
    },
    handleInputBlur() {
      this.isFocus = false
    },
    handleClick() {
      if (!this.disabled) {
        this.visible = !this.visible
      }
    },
    handleSelectOption(option) {
      if (!this.multiple) {
        this.visible = false
        this.selectLabel = option.label
        this.$emit('change', option.value)
        this.$emit('input', option.value)
      } else {
        const index = this.selectedArr.indexOf(option.value)
        if (index > -1) {
          this.selectedArr.splice(1, index)
        } else {
          this.selectedArr.push(option.value)
        }
      }
    },
    setMenuWidth() {
      this.menuWidth = this.$el.clientWidth
    },
    handleClose() {
      this.visible = false
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
    
  }
</style>
