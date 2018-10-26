<template>
  <button class="ss-button"
    @click="handelClick"
    :disabled="disabled || loading"
    :type="nativeType"
    :class="[
      type && `ss-button__${type}`,
      size && `ss-button__${size}`,
      disabled && `ss-button__${disabled}`,
      loading && `ss-button__${loading}`,
      plain && `ss-button__${plain}`,
      round && `ss-button__${round}`,
      circle && `ss-button__${circle}`
    ]"
  >
    <i class="icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'SSButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  data() {
    return {}
  },
  methods: {
    handelClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-button {
    display: inline-block;
    height: 36px;
    line-height: 1.5;
    padding: 0 16px;
    background: $mc;
    color: #fff;
    border-radius: 4px;
    user-select: none;
    outline: none;
    box-sizing: border-box;
    transform: all .3s ease-in-out;
    font-size: 14px;
    border: 1px solid transparent;
    cursor: pointer;
    & + & {
      margin-left: 10px;
    }
    &:hover, &:focus {
      background: $mc1;
      border-color: $mc1;
    }
    &:active {
      background: $mc2;
      border-color: $mc2;
    }
  }
  .ss-button__success {
    background: $sc;
    &:hover, &:focus {
      background: $sc1;
      border-color: $sc1;
    }
    &:active {
      background: $sc2;
      border-color: $sc2;
    }
  }
  // .ss-button__warning {
  //   background: $wc;
  //   &:hover {
  //     background: $wc1;
  //   }
  //   &:active {
  //     background: $wc2;
  //   }
  // }
  .ss-button__error {
    background: $ec;
    &:hover, &:focus {
      background: $ec1;
      border-color: $ec1;
    }
    &:active {
      background: $ec2;
      border-color: $ec2;
    }
  }
</style>
