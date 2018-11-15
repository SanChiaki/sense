<template>
  <div class="ss-radio-group">
    <ss-radio v-for="item in list" :key="getLabel(item)">
      {{ getLabel(item) }}
    </ss-radio>
  </div>
</template>

<script>
import SsRadio from '../radio'

import { getLabel, getValue } from '@/utils/item'

export default {
  components: {
    SsRadio
  },
  props: {
    value: [String, Number],
    list: Array
  },
  created() {
    this.getLabel = getLabel
    this.getValue = getValue
  }
}
</script>

<style lang="scss" scoped>
  .ss-radio-group {
    display: inline-block;
  }
</style>
