<template>
  <div class="container">
    <div class="title">common</div>
    <div class="content">
      <div class="item">
        <div class="item-title">This is a sense</div>
        <div class="item-sense"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import button from '@/components/button'

export default {
  components: {
    // button
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
