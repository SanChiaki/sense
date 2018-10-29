<template>
  <div class="container">
    <div class="title">checkbox</div>
    <div class="content">
      <div class="item">
        <div class="item-title">普通状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="noCheck">checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">选中状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="checked">checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">禁止状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="noCheck" disabled>checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">选中禁止状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="checked" disabled>checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">多选未全选中状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="noCheck" :indeterminate="isIndeterminate">checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">多选全选中状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="checked" :indeterminate="isIndeterminate">checkbox</ss-checkbox>
        </div>
      </div>
      <div class="item">
        <div class="item-title">多选全未选中状态</div>
        <div class="item-sense">
          <ss-checkbox v-model="noCheck" :indeterminate="false">checkbox</ss-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SsCheckbox from '@/components/checkbox'

export default {
  components: {
    SsCheckbox
  },
  data() {
    return {
      checked: true,
      noCheck: false,
      isIndeterminate: true
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
