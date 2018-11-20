<template>
  <div class="ss-dropdown" 
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    @click.stop="handleClick">
    <slot></slot>
    <slot name="menu"></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

import SsDropdownMenu from './dropdownMenu'

export default {
  name: 'SsDropdown',
  componentName: 'SsDropdown',
  mixins: [Emitter],
  components: {
    SsDropdownMenu
  },
  props: {
    trigger: {
      type: Array,
      default: () => ['hover']
    },
    visible: Boolean,
    placement: {
      type: String,
      default: 'bottomLeft'
    }
  },
  data() {
    return {
      isMenuShow: this.visible
    }
  },
  computed: {
    isHoverTrigger() {
      return this.trigger.includes('hover')
    },
    isClickTrigger() {
      return this.trigger.includes('click')
    }
  },
  mounted() {
    this.broadcast('SsDropdownMenu', 'visible', this.isMenuShow)

    this.$on('itemClick', this.handleItemClick)
  },
  methods: {
    visibleMenu() {
      setTimeout(() => {
        this.broadcast('SsDropdownMenu', 'visible', this.isMenuShow)
      }, 100)
    },
    handleEnter() {
      if (this.isHoverTrigger) {
        this.isMenuShow = true
        this.visibleMenu()
      }
    },
    handleLeave() {
      if (this.isHoverTrigger) {
        this.isMenuShow = false
        this.visibleMenu()
      }
    },
    handleClick() {
      if (this.isClickTrigger) {
        this.isMenuShow = !this.isMenuShow
        this.visibleMenu()
      }
    },
    handleItemClick() {
      this.isMenuShow = false
      this.visibleMenu()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-dropdown {
    display: inline-block;
    position: relative;
    cursor: pointer;
    color: $mc;
  }
</style>

<style lang="scss">
  .ss-dropdown {
    i {
      margin-left: 5px;
    }
  }
</style>
