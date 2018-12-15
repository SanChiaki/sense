<template>
  <ul class="ss-dropdown-menu" 
    :class="[isShow && 'ss-dropdown-menu__show']"
    :style="style"
  >
    <slot v-if="$slots.default"></slot>
    <div v-else class="ss-dropdown-menu-empty">
      选项为空
    </div>
  </ul>
</template>

<script>
export default {
  name: 'SsDropdownMenu',
  componentName: 'SsDropdownMenu',
  props: {
    width: [Number, String]
  },
  data() {
    return {
      isShow: false,
      style: {}
    }
  },
  mounted() {
    this.setMenuStyle()

    this.$on('visible', this.visible)
  },
  watch: {
    width(val) {
      this.style.width = `${val - 2}px`
    }
  },
  methods: {
    setMenuStyle() {
      this.$nextTick(() => {
        const placement = this.$parent.placement
        const parent = this.$parent.$el.getBoundingClientRect()
        if (placement === 'bottomRight') {
          this.style.right = '1px'
        } else if (placement === 'bottomCenter') {
          const selfWidth = this.$el.clientWidth
          this.style.left = `${(parent.width - selfWidth) / 2}px`
        } else {
          this.style.left = '1px'
        }
        this.style.top = `${parent.height}px`
      })
    },
    visible(isShow) {
      this.isShow = isShow
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-dropdown-menu {
    position: absolute;
    width: max-content;
    max-height: 210px;
    margin: 0;
    padding: 4px 0;
    list-style: none;
    overflow-y: auto;
    background: rgba(255,255,255,1);
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    border-radius: 2px;
    transition: transform .15s ease-in-out;
    transform-origin: 50% 0%;
    transform: scaleY(0);
    z-index: 1;
    &.ss-dropdown-menu__show {
      transform: scaleY(1);
    }
    &.ss-dropdown-menu__empty {
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .ss-dropdown-menu-empty {
      height: 120px;
      line-height: 120px;
      text-align: center;
    }
  }
</style>
