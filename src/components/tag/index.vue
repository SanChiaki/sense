<template>
  <div class="ss-tag"
    :class="[
      type && `ss-tag__${type}`,
      closable && `ss-tag__closable`,
      !isShow && 'ss-tag__hide'
    ]"
  >
    <slot></slot>
    <span class="ss-tag-icon-wrap" v-if="closable">
      <i class="ss-tag-icon icon-icon_close" @click="handleClick"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    closable: Boolean,
    size: String
  },
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    if (this.closable) {
      this.closeAnimEnd()
    }
  },
  methods: {
    handleClick() {
      this.isShow = false
      this.$emit('close')
    },
    closeAnimEnd() {
      this.$nextTick(() => {
        this.$el.addEventListener('transitionend', () => {
          this.$emit('afterClose')
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-tag {
    display: inline-block;
    position: relative;
    height: 22px;
    line-height: 20px;
    padding: 0 8px;
    text-align: center;
    color: $mc;
    background: #f5f8fe;
    border: 1px solid $mc;
    font-size: 12px;
    border-radius: 2px;
    box-sizing: border-box;
    transition: transform .1s ease-in-out;
    transform-origin: center;
    &.ss-tag__hide {
      transform: scale(0);
    }
    &.ss-tag__success {
      color: #2FCE63;
      background: #f4fcf7;
      border-color: #2FCE63;
    }
    &.ss-tag__info {
      color: #888;
      background: #fbfbfb;
      border-color: #B2B2B2;
    }
    &.ss-tag__warning {
      color: #faad14;
      background: #fffbe6;
      border-color: #ffe58f;
    }
    &.ss-tag__error {
      color: #FB6161;
      background: #fff7f7;
      border-color: #FB6161;
    }
    &.ss-tag__closable {
      padding-right: 22px;
    }
    .ss-tag-icon-wrap {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 14px;
      height: 14px;
      line-height: 12px;
      .ss-tag-icon {
        color: #ccc;
        font-size: 14px;
        &:hover {
          color: #888;
          cursor: pointer;
        }
      }
    }
  }
</style>
