<template>
  <div class="container">
    <div class="title">tag</div>
    <div class="content">
      <div class="item">
        <div class="item-title">各种用法</div>
        <div class="item-sense">
          <ss-tag>normal</ss-tag>
          <ss-tag type="success">success</ss-tag>
          <ss-tag type="info">info</ss-tag>
          <ss-tag type="warning">warning</ss-tag>
          <ss-tag type="error">error</ss-tag>
        </div>
      </div>
      <div class="item">
        <div class="item-title">可关闭</div>
        <div class="item-sense">
          <ss-tag closable>Prevent Default</ss-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsTag from '@/components/tag'

export default {
  components: {
    SsTag
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
