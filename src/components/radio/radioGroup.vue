<template>
  <div class="ss-radio-group">
    <ss-radio v-for="item in list" :key="item.value">
      {{ item.label }}
    </ss-radio>
  </div>
</template>

<script>
import SsRadio from './radio'

export default {
  components: {
    SsRadio
  },
  props: {
    value: [String, Number],
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .ss-radio-group {
    display: inline-block;
  }
</style>
