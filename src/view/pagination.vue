<template>
  <div class="container">
    <div class="title">pagination</div>
    <div class="content">
      <div class="item">
        <div class="item-title">基本用法</div>
        <div class="item-sense">
          <ss-pagination :total="500"></ss-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsPagination from '@/components/pagination'

export default {
  components: {
    SsPagination
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
