<template>
  <li class="ss-option"
    :class="[
      isSelected && 'ss-option__selected',
      disabled && 'ss-option__disabled',
      isMultiple && 'ss-option__multiple'
    ]"
    @click.stop="handleClick"
  >
    {{ label }}
    <i v-if="isMultiple && isSelected" class="icon-icon-selected ss-option-multiple-icon"></i>
  </li>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'SsOption',
  componentName: 'SsOption',
  mixins: [Emitter],
  inject: ['select'],
  props: {
    value: {},
    label: String,
    disabled: Boolean
  },
  data() {
    return {}
  },
  computed: {
    isMultiple() {
      return this.select.multiple
    },
    isSelected() {
      if (!this.isMultiple) {
        return this.select.value === this.value
      }
      return this.select.selectedArr.includes(this.value)
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.dispatch('SsSelect', 'selectOption', this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-option {
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: #F5F7FA;
    }
    &.ss-option__disabled {
      background-color: transparent;
      color: #B2B2B2;
      cursor: not-allowed;
    }
    &.ss-option__selected {
      color: $mc;
    }
    &.ss-option__multiple {
      padding-right: 32px;
    }
  }
</style>
