<template>
  <div class="ss-select"
    :class="[
      disabled && 'ss-select__disabled'
    ]"
    @click.stop="handleClick"
    v-clickoutside="close"
  >
    <div class="ss-select-multiple" 
      v-if="multiple" 
      ref="multiple">
      <ss-tag type="info" 
        v-for="(item, index) in selectedOptions" 
        :key="item.value"
        @close="tagClose(index)"
        closable>
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
      selectedOptions: [],
      selectedValues: [],
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
    },
    selectedValues(val) {
      if (val.length) {
        this.selectLabel = ' '
      } else {
        this.selectLabel = ''
      }
      this.$nextTick(() => {
        const clientHeight = this.$refs.multiple.clientHeight
        if (clientHeight >= 32) {
          this.multipleHeight = clientHeight
          this.broadcast('SsDropdownMenu', 'update')
        }
      })
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
        const index = this.selectedValues.indexOf(option.value)
        if (index > -1) {
          this.selectedOptions.splice(index, 1)
          this.selectedValues.splice(index, 1)
        } else {
          this.selectedOptions.push(option)
          this.selectedValues.push(option.value)
        }
        this.$emit('change', this.selectedValues)
        this.$emit('input', this.selectedValues)
      }
    },
    setMenuWidth() {
      this.menuWidth = this.$el.clientWidth
    },
    close() {
      this.visible = false
    },
    tagClose(index) {
      this.selectedOptions.splice(index, 1)
      this.selectedValues.splice(index, 1)
      this.$emit('change', this.selectedValues)
      this.$emit('input', this.selectedValues)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/base.scss';

  .ss-select {
    display: inline-block;
    position: relative;
    width: 240px;
    max-width: 100%;
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
      padding: 2px 30px 2px 2px;
      font-size: 0;
      box-sizing: border-box;
      z-index: 1;
      .ss-tag {
        margin: 3px 0 3px 6px;
      }
    }
    .ss-input-inner {
      cursor: pointer;
    }
    
  }
</style>
