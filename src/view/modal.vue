<template>
  <div class="container">
    <div class="title">modal</div>
    <div class="content">
        <section class="left">
          <h4>基本用法</h4>
          <ss-button type="success" @click="isShow = true">测试</ss-button>
          <ss-modal
            iconType="success"
            title="提示"
            content="这里是内容"
            :isShow.sync="isShow"
          >
          </ss-modal>
        </section>
        

        <hr>

        <section class="center">
          <h4>添加确认按钮回调--打开控制台查看</h4>
          <ss-button type="primary" @click="isShow1 = true">按钮回调</ss-button>
          <ss-modal
            iconType="primary"
            title="提示"
            content="确认回调"
            :isShow.sync="isShow1"
            @confirms="cb"
            :btnText = "{confirm: '确定'}"
          >
          </ss-modal>
        </section>

        <hr>

        <section class="right">
          <h4>确认/取消按钮回调</h4>
          <ss-button type="error" @click="isShow2 = true">确认/取消按钮回调</ss-button>
          <ss-modal
            iconType="error"
            title="提示"
            content="取消与确认回调"
            :isShow.sync="isShow2"
            :models="false"
            @confirms="cb"
            @cancel="cancelCb"
          >
          </ss-modal>
        </section>

        <hr>

        <section class="right">
          <h4>插槽</h4>
          <ss-button type="error" @click="isShow3 = true">插槽</ss-button>
          <ss-modal
            iconType="error"
            title="提示"
            content="插槽"
            :isShow.sync="isShow3"
          >
            <input type="text">
          </ss-modal>
        </section>

        <hr>

        <section class="left">
          <h4>自定义校验方法--打开控制台查看</h4>
          <ss-button type="primary" @click="isShow4 = true">自定义校验方法</ss-button>
          <ss-modal
            iconType="warning"
            title="提示--打开控制台"
            content="校验参数类型为function，根据实际业务需求，返回值必须设为true/false。"
            :isShow.sync="isShow4"
            :validation="test"
            @confirms="cb"
            @cancel="() => {}"
            :btnText = "{confirm: '确定', cancel: '返回'}"
          >
            <input type="text" v-model="inputs" placeholder="此处应该输入123">
          </ss-modal>
        </section>

    </div>
  </div>
</template>
<script>
import ssButton from '@/components/button';

import ssModal from '@/components/modal';

export default {
  components: {
    ssButton,
    ssModal
  },

  data() {
    return {
      isShow: false,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      inputs: ''
    }
  },

  methods: {
    cb() {
      /* eslint-disable */
      console.log('确认的回调');
    },
    cancelCb() {
      /* eslint-disable */
      console.log('取消的回调')
    },
    test() {
      /* eslint-disable */
      console.log(this.inputs)
      if(this.inputs == '123') {
        return true;
      } else {
        console.log('请输入123')
        return false;
      }
    }
  }
    
}
</script>

<style lang="scss">
  .title {
    padding: 20px;
    line-height: 50px;
    font-size: 32px;
    font-weight: 600;
    color: #353535;
  }
  .right {
    text-align: right;
  }
  .center {
    text-align: center;
  }
  .left {
    text-align: left;
  }
  hr {
    margin: 10px 0;
  }
  h4 {
    padding-bottom: 8px;
  }
  .content {
    padding-left: 20px;
  }
  input {
    border: 1px solid #999;
    padding: 5px;
  }
</style>