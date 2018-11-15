<template>
    <div class='margin-container'>
      <ss-alert 
        title='警告样式'
        type='warning'
        closable
      >
      </ss-alert>
      <ss-alert 
        title='错误样式'
        type='error'
      >
      </ss-alert>
      <ss-alert 
        title='成功样式'
        type='success'
      >
      </ss-alert>
      <ss-alert 
        title='提示样式'
        type='primary'
      >
      </ss-alert>

      <ss-alert 
        title='显示图标'
        type='success'
        show-icon
      >
      </ss-alert>

      <ss-alert 
        title='调整图标大小'
        type='primary'
        show-icon
        icon-size='24px'
      >
      </ss-alert>

      <ss-alert 
        title='调整文本区域所占宽度'
        type='primary'
        show-icon
        title-width='120px'
      >
      </ss-alert>

      <ss-alert
        title='close回调'
        @close='handleClose()'
        type='error'
        show-icon
        closable
      >
      </ss-alert>
      
      <ss-alert
        v-show='hasClosed'
        title='handleClose'
        type='success'
        show-icon
      >
      </ss-alert>
    </div>
</template>

<script>
import SsAlert from '@/components/alert'

export default {
  components: {
    SsAlert
  },
  data() {
    return {
      hasClosed: false
    }
  },
  methods: {
    handleClose() {
      this.hasClosed = true;
    }
  }
};
</script>

<style lang='scss' scoped>
.margin-container>div {
  margin: 10px;
}
</style>