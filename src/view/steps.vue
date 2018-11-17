<template>
  <div class="container">
    <div class="title">Steps（图标未定稿）</div>
    <div class="content">
      <div class="item">
        <div class="item-title">水平</div>
        <div class="item-sense">
          <ss-steps :current="current.horizontal"  :status="status.horizontal">
            <ss-step 
              title="Horizontal" 
              desc="水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述"
            >
            </ss-step>
            <ss-step 
              title="Horizontal" 
              desc="水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述"
            >
            </ss-step>
            <ss-step 
              title="Horizontal" 
              desc="水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述水平描述"
            >
            </ss-step>
          </ss-steps>
          <div class="ctrlBtnArea">
            <button @click="prev('horizontal')">后退</button>
            <button @click="next('horizontal')">前进</button>
          </div>
          <div class="statusBtnArea">
            <button class="process" @click="process('horizontal')">正常</button>
            <button class="error" @click="error('horizontal')">错误</button>            
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-title">垂直</div>
        <div class="item-sense">
          <ss-steps :current="current.vertical" direction="vertical" :status="status.vertical">
            <ss-step 
              title="Vertical"
              desc="垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述"
            ></ss-step>
            <ss-step 
              title="Vertical"
              desc="垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述"
            ></ss-step>
            <ss-step 
              title="Vertical"
              desc="垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述垂直描述"
            ></ss-step>
          </ss-steps>
        </div>
        <div class="ctrlBtnArea">
          <button @click="prev('vertical')">后退</button>
          <button @click="next('vertical')">前进</button>
        </div>
        <div class="statusBtnArea">
          <button class="process" @click="process('vertical')">正常</button>
          <button class="error" @click="error('vertical')">错误</button>            
        </div>
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
  },

  data() {
    return {
      status: {
        horizontal: 'process',
        vertical: 'process',
      },
      current: {
        horizontal: 0,
        vertical: 0,
      }
    }
  },

  methods: {
    prev(area) {
      this.current[area] > 0 ? this.current[area]-- : null;      
    },
    next(area) {
      this.current[area] < 2 ? this.current[area]++ : null;  
    },
    error(area) {
      this.status[area] = 'error';
    },
    process(area) {
      this.status[area] = 'process';
    }
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
  .ctrlBtnArea {
    margin-top: 10px;
    button {      
      width: 70px;
      height: 35px;      
      border: 1px solid #2A75ED;
      border-radius: 5px;
      background-color: #FFFFFF;
      color: #2A75ED;
      outline: none;
      cursor: pointer;
    }
  }
  .statusBtnArea {
    margin-top: 10px;
    button {
      width: 70px;
      height: 35px;      
      border: 1px solid;
      border-radius: 5px;
      color: #FFFFFF;
      outline: none;
      cursor: pointer;
    }
    .process {
      border-color: #2A75ED;
      background-color: #2A75ED;
    }
    .error {
      border-color: #FB6161;
      background-color: #FB6161;
    }
  }
</style>
