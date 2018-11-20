<template>
  <div class="container">
    <div class="title">input</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-input v-model="input"></ss-input>
        </div>
      </div>
      <div class="item">
        <div class="item-title">disabled</div>
        <div class="item-sense">
          <ss-input v-model="input1" :disabled="true"></ss-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsInput from '@/components/input'

export default {
  components: {
    SsInput
  },
  data() {
    return {
      input: '',
      input1: ''
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
    .item {
      width: 180px;
    }
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
