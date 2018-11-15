<template>
  <div class="container">
    <div class="title">Steps</div>
    <div class="content">
      <div class="item">
        <div class="item-title">水平</div>
        <div class="item-sense">
          <ss-steps :current="0">
            <ss-step title="test">tttt</ss-step>
          </ss-steps>
        </div>
      </div>
      <div class="item">
        <div class="item-title">垂直</div>
        <div class="item-sense"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SsSteps from '@/components/steps'
import SsStep from '@/components/step'

export default {
  components: {
    SsSteps,
    SsStep
  }
}
</script>

<style lang='scss' scoped>
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
