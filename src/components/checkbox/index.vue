<template>
  <label class="ss-checkbox"
    :class="[
      checkVal && `ss-checkbox__checked`,
      disabled && `ss-checkbox__disabled`,
      indeterminate && !checkVal && 'ss-checkbox__indeterminate'
    ]"
  >
    <span class="ss-checkbox-left"
      :class="[
        focus && 'is-focus'
      ]">
      <input class="ss-checkbox-input"
        :disabled="disabled"
        @change="handleChange"
        type="checkbox"
        v-model="checkVal"
        :name="name"
        @focus="focus = true"
        @blur="focus = false"
      >
      <span class="ss-checkbox-inner"></span>
    </span>
    <span class="ss-checkbox-text" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  props: {
    value: {},
    disabled: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    indeterminate: Boolean,
    name: String
  },
  data() {
    return {
      checkVal: false,
      focus: false
    }
  },
  computed: {
  },
  created() {
    this.checkVal = !!this.defaultChecked || !!this.value
  },
  methods: {
    handleChange() {
      this.$emit('change', this.checkVal)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';
  .ss-checkbox {
    list-style: none;
    line-height: unset;
    user-select: none;
    font-size: 0;
    cursor: pointer;
    &:hover, &:focus {
      .ss-checkbox-inner {
        border-color: $mc;
      }
    }
    &.ss-checkbox__indeterminate {
      .ss-checkbox-inner {
        background-color: $mc;
        border-color: $mc;
        &:before {
          content: '';
          position: absolute;
          left: 3px;
          top: 6px;
          width: 8px;
          height: 2px;
          background: #fff;
          transform: scale(1);
        }
      }
    }
    &.ss-checkbox__checked {
      .ss-checkbox-inner {
        background-color: $mc;
        border-color: $mc;
        &:before {
          transform: rotateZ(45deg) scale(1);
        }
      }
    }
    &.ss-checkbox__disabled {
      color: #B2B2B2;
      cursor: not-allowed;
      .ss-checkbox-inner {
        border-color: #eee;
      }
      &.ss-checkbox__checked {
        .ss-checkbox-inner {
          background-color: #eee;
        }
      }
    }
  }
  .ss-checkbox-left {
    position: relative;
    display: inline-block;
    vertical-align: top;
    top: 2px;
    & + span {
      padding: 0 8px;
    }
    &.is-focus {
      .ss-checkbox-inner {
        border-color: $mc;
      }
    }
    .ss-checkbox-input {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      opacity: 0;
    }
    .ss-checkbox-inner {
      display: inline-block;
      position: relative;
      left: 0;
      top: 0;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid #B2B2B2;
      transition: .1s ease-in-out;
      &:before {
        content: '';
        position: absolute;
        left: 4px;
        top: 1px;
        width: 6px;
        height: 9px;
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        transform: rotateZ(45deg) scale(0);
        transition: .1s ease-in-out;
        box-sizing: border-box;
      }
    }
  }
  .ss-checkbox-text {
    font-size: 14px;
  }
</style>
