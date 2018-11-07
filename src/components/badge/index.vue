<template>
  <div class="ss-badge" :class="[type && `ss-badge__${type}`]">
    <slot></slot>
    <div class="ss-badge-point"
      :class="[
        number && 'ss-badge-point__hascontent'
      ]"
    >
      <span class="ss-badge-number" v-if="number">
        {{ formatNumber }}
        <span class="ss-badge-number-over" v-if="isOver">+</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    number: Number,
    maxLength: {
      type: Number,
      default: 99
    }
  },
  data() {
    return {}
  },
  computed: {
    formatNumber() {
      return this.number > this.maxLength ? this.maxLength : this.number
    },
    isOver() {
      return this.number > this.maxLength
    }
  }
}
</script>

<style lang="scss" scoped>
  .ss-badge {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;
    background: #EEE;
    border-radius: 4px;
    &.ss-badge__success {
      .ss-badge-point {
        background: #2FCE63;
      }
    }
    &.ss-badge__info {
      .ss-badge-point {
        background: #B2B2B2;
      }
    }
    &.ss-badge__primary {
      .ss-badge-point {
        background: #2A75ED;
      }
    }
    &.ss-badge__warning {
      .ss-badge-point {
        background: #FFB85E;
      }
    }
    .ss-badge-point {
      position: absolute;
      top: 0;
      right: 0;
      height: 6px;
      padding: 0 3px;
      border-radius: 3px;
      background: #FB6161;
      transform: translate(50%, -50%);
      z-index: 1;
      &.ss-badge-point__hascontent {
        height: 12px;
        line-height: 12px;
        border-radius: 6px;
      }
      .ss-badge-number {
        display: inline-block;
        color: #fff;
        font-size: 12px;
        transform: scale(.833333);
        transform-origin: center;
        .ss-badge-number-over {
          margin-left: -4px;
        }
      }
    }
  }
</style>
