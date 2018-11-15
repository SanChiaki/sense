<template>
  <div class='ss-steps'>
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SsSteps',

  props: {
    current: {
      type: Number,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
