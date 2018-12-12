<template>
  <div class="container">
    <div class="title">Message</div>
    <div class="content">
      <div class="item">
        <div class="item-title">默认：3s后自动消失，用户主动点击后消失</div>
        <div class="item-sense">
          <button class="primary" @click="handleInfo">提示</button>
          <button class="warning" @click="handleWarning">警告</button>
          <button class="error" @click="handleError">错误</button>
          <button class="success" @click="handleSuccess">成功</button>
        </div>
      </div>
      <div class="item">
        <div class="item-title">时间：10s自动消失</div>
        <div class="item-sense">
          <!-- <message></message> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import message from '@/components/message'

export default {
  components: {
    message
  },

  data() {
    return {
    }
  },

  methods: {
    handleInfo(msg) {
      this.$message.info('提示：', msg);
    },
    handleSuccess(msg) {
      this.$message.success('成功：', msg);
    },
    handleWarning(msg) {
      this.$message.warning('警告：', msg);
    },
    handleError(msg) {
      this.$message.error('错误：', msg);
    },
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
    width: 800px;
    .item + .item {
      margin: 10px 0 0;
    }
    .item-title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
    }
  }
  button {
    width: 70px;
    height: 35px;      
    border: 1px solid;
    border-radius: 5px;
    color: #FFFFFF;
    outline: none;
    cursor: pointer;
    &.primary {
      border-color: #2A75ED;
      background-color: #2A75ED;
    }
    &.warning {
      border-color: #ffb85e;
      background-color: #ffb85e;
    }
    &.error {
      border-color: #FB6161;
      background-color: #FB6161;
    }
    &.success {
      border-color: #2FCE63;
      background-color: #2FCE63;
    }
  }
</style>
