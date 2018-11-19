<template>
  <div class="container">
    <div class="title">popover</div>
    <div class="popover">
      <h3>popover向右</h3>
      <ss-popover 
        trigger="click" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="right">
        <span slot="reference" class="test">click</span>
      </ss-popover>
      <h3>popover向右</h3>
      <ss-popover 
        trigger="hover" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="right">
        <span slot="reference" class="test">hover</span>
      </ss-popover>

      <h3>popover向上</h3>
      <ss-popover 
        trigger="click" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="top">
        <span slot="reference" class="test">click</span>
      </ss-popover>
      <h3>popover向上</h3>
      <ss-popover 
        trigger="hover" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="top">
        <span slot="reference" class="test">hover</span>
      </ss-popover>

      <h3>popover向左</h3>
      <ss-popover 
        trigger="click" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="left">
        <span slot="reference" class="test">click</span>
      </ss-popover>
      <h3>popover向左</h3>
      <ss-popover 
        trigger="hover" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="left">
        <span slot="reference" class="test">hover</span>
      </ss-popover>

      <h3>popover向下</h3>
      <ss-popover 
        trigger="click" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="bottom">
        <span slot="reference" class="test">click</span>
      </ss-popover>
      <h3>popover向下</h3>
      <ss-popover 
        trigger="hover" 
        title="标题" 
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" 
        width="250"
        placement="bottom">
        <span slot="reference" class="test">hover</span>
      </ss-popover>
    </div>
  </div>
</template>

<script>
import SsPopover from '@/components/popover'

export default {
  components: {
    SsPopover
  }
}
</script>

<style scoped lang="scss">
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .popover {
    padding-left: 400px;
  }
</style>
