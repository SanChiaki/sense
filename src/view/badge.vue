<template>
  <div class="container">
    <div class="title">badge</div>
    <div class="content">
      <div class="item">
        <div class="item-title">普通展示</div>
        <div class="item-sense">
          <ss-badge></ss-badge>
          <ss-badge type="success"></ss-badge>
          <ss-badge type="info"></ss-badge>
          <ss-badge type="primary"></ss-badge>
          <ss-badge type="warning"></ss-badge>
        </div>
      </div>
      <div class="item">
        <div class="item-title">未过99与超过99</div>
        <div class="item-sense">
          <ss-badge :number="66"></ss-badge>
          <ss-badge :number="666"></ss-badge>
        </div>
      </div>
      <div class="item">
        <div class="item-title">修改最大值为999</div>
        <div class="item-sense">
          <ss-badge :number="66" :maxLength="999"></ss-badge>
          <ss-badge :number="666" :maxLength="999"></ss-badge>
          <ss-badge :number="6666" :maxLength="999"></ss-badge>
        </div>
      </div>
      <div class="item">
        <div class="item-title">气泡是否需要点击消失，有待商榷</div>
        <div class="item-sense">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsBadge from '@/components/badge'

export default {
  components: {
    SsBadge
  },
  data() {
    return {}
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
