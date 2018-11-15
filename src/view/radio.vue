<template>
  <div class="container">
    <div class="title">radio</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本展示</div>
        <div class="item-sense">
          <ss-radio>我是radio</ss-radio>
        </div>
      </div>
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-radio v-model="radio1">基本用法</ss-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsRadio from '@/components/radio'
// import SsRadioGroup from '@/components/radioGroup'

export default {
  components: {
    SsRadio,
    // SsRadioGroup
  },
  data() {
    return {
      radio1: 2
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .content {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .item + .item {
      margin: 10px 0 0;
    }
    .item-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
</style>
