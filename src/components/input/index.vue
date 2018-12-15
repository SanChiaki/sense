<template>
  <div class="ss-input"
    :class="[
      disabled && 'ss-input__disabled',
      suffixIcon || $slots.suffix && 'ss-input__suffix'
    ]"
  >
    <input class="ss-input-inner" 
      ref="input"
      :type="type" 
      autocomplete="off" 
      :placeholder="placeholder || '请输入内容'" 
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentVal"
      @focus="handelFocus"
      @blur="handelBlur"
      @input="handelInput"
      @change="handelChange"
    >
    <span v-if="suffixIcon || $slots.suffix" class="ss-input-suffix-wrap">
      <template v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </template>
      <i v-else class="ss-input-icon" :class="[suffixIcon]"></i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    suffixIcon: String,
    readonly: Boolean
  },
  data() {
    return {
      isReverse: false,
      currentVal: this.value === undefined || this.value === null ? '' : this.value
    }
  },
  created() {
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    handelFocus(e) {
      this.$emit('focus', e)
    },
    handelBlur(e) {
      this.$emit('blur', e)
    },
    handelInput() {
      this.$emit('input', this.currentVal)
    },
    handelChange() {
      this.$emit('change', this.currentVal)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-input {
    position: relative;
    width: 100%;
    &:hover {
      .ss-input-inner {
        border-color: #c0c4cc;
      }
    }
    &.ss-input__focus {
      .ss-input-inner {
        border-color: $mc;
      }
    }
    &.ss-input__disabled {
      &:hover {
        .ss-input-inner {
          border-color: #e4e7ed;
        }
      }
      .ss-input-inner {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
        user-select: none;
      }
    }
    &.ss-input__suffix {
      .ss-input-inner {
        padding-right: 30px;
      }
    }
    .ss-input-inner {
      width: inherit;
      height: 32px;
      line-height: 30px;
      padding: 0 8px;
      border: 1px solid #eee;
      border-radius: 4px;
      outline: none;
      transition: border-color .2s ease-in-out;
      box-sizing: border-box;
      &:focus {
        border-color: $mc;
      }
    }
    .ss-input-suffix-wrap {
      display: flex;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 100%;
      line-height: 100%;
      text-align: center;
      pointer-events: none;
      cursor: pointer;
      .ss-input-icon {
        margin: auto;
        font-size: 14px;
        transition: all .3s ease-in-out;
        &.is-reverse {
          transform: rotateZ(-180deg);
        }
      }
    }
  }
</style>
