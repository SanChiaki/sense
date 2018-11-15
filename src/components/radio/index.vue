<template>
  <label class="ss-radio"
    :class="[
      isChecked && 'ss-radio__checked'
    ]"
    @click="handleClick"
  >
    <span class="ss-radio-arc">
      <span class="ss-radio-inner"
        :class="[
          isChecked && 'ss-radio-inner__checked'
        ]"  
      >
      </span>
      <input class="ss-radio-input"
        v-model="currentVal"
      >
    </span>
    <span class="ss-radio-text" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    type: {
      default: '',
      type: String
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  computed: {
    currentVal() {
      return this.value === undefined || this.value === null ? '' : this.value
    }
  },
  methods: {
    handleClick() {
      this.isChecked = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .ss-radio {
    display: inline-block;
    color: #353535;
    line-height: 1;
    font-size: 14px;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    &.ss-radio__checked {
      color: #2A75ED;
    }
    .ss-radio-arc {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: top;
      .ss-radio-inner {
        display: inline-block;
        position: relative;
        width: 14px;
        height: 14px;
        border: 1px solid #2A75ED;
        border-radius: 50%;
        box-sizing: border-box;
        &:before {
          content: '';
          position: absolute;
          left: 1px;
          top: 1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #2A75ED;
          transform: scale(0);
          transform-origin: center;
          transition: transform .1s ease-in-out;
        }
        &.ss-radio-inner__checked {
          &:before {
            transform: scale(1);
          }
        }
      }
      .ss-radio-input {
        display: none;
      }
    }
  }
</style>
