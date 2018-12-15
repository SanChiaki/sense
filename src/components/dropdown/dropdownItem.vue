<template>
  <li class="ss-dropdown-item" 
    :class="[disabled && 'ss-dropdown-item__disabled']"
    @click.stop="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'SsDropdownItem',
  mixins: [Emitter],
  props: {
    disabled: Boolean
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.dispatch('SsDropdown', 'itemClick')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-dropdown-item {
    color: #353535;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    box-sizing: border-box;
    &:hover {
      background-color: #f7f8fb;
      color: $mc;
    }
    &.ss-dropdown-item__disabled {
      background-color: transparent;
      color: #B2B2B2;
      cursor: not-allowed;
    }
  }
</style>
