<template>
  <div 
    class="ss-step"
    :class="[ stepClass, { 'ss-step-next-error': nextError } ]"
  >
    <div class="ss-step-tail"></div>
    <div class="ss-step-icon">
      <span v-if="currentStatus === 'finish'" class="ss-step-icon__icon">
        √
      </span>
      <span v-else-if="currentStatus === 'error'" class="ss-step-icon__icon">
        ×
      </span>
      <span v-else class="ss-step-icon__text">{{ index + 1 }}</span>
    </div>
    <div class="ss-step-content">
      <div class="ss-step-content-title">{{ title }}</div>
      <div class="ss-step-content-desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SsStep',

  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    status: {
      type: String
    },
    icon: {
      type: String
    }
  },

  data() {
    return {
      index: -1,
      nextError: false
    }
  },
  
  computed: {
    currentStatus() {
      const stepIndex = this.$parent.steps.indexOf(this);
      const current = this.$parent.current;
      
      if (stepIndex === current) {
        return this.$parent.status;
      } else if (stepIndex < current) { 
        return 'finish';
      } else { 
        return 'wait';
      }
    },

    stepClass() {
      return `ss-step__${this.currentStatus}`;
    }
  },

  beforeCreate() {
    this.$parent.steps.push(this);
  },

  beforeDestroy() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)

    if (index >= 0) {
      steps.splice(index, 1)
    }
  }

}
</script>

<style lang='scss' scoped>
.ss-step {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  overflow: hidden;
  white-space: nowrap;
  flex: 1;
  &:last-child {
    flex: none;
    .ss-step-content-title::after{
      display: none;
    }
  }
}

.ss-step-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;  
  border: 1px solid ;
  border-radius: 50%;
  transition: background .3s;
}

.ss-step-content {
  display: inline-block;
  .ss-step-content-title {
    display: inline-block;
    position: relative;
    font-size: 16px;
    line-height: 32px;
    padding-right: 16px;    
    &::after {
      content: "";
      position: absolute;
      top: 16px;
      left: 100%;
      display: block;
      width: 9999px;
      height: 1px;
      background-color: #e8e8e8;
      transition: background .3s;
    }
  }
  .ss-step-content-desc {
    max-width: 160px;
    white-space: normal;
    font-size: 14px;
  }
}


.ss-step__process{
  .ss-step-icon {
    color: #ffffff;
    background-color: #2A75ED;
    border-color: #2A75ED;
  }
  .ss-step-content-title {
    font-weight: 600;
    color: rgba(0,0,0,.85);
  }
  .ss-step-content-desc {
    color: rgba(0,0,0,.65);
  }
}
.ss-step__finish{
  .ss-step-icon {
    color: #2A75ED;
    background-color: #ffffff;
    border-color: #2A75ED;
  }
  .ss-step-content-title {
    color: rgba(0,0,0,.65);
    &::after {
      background-color: #2A75ED;
    }
  }
  .ss-step-content-desc {
    color: rgba(0,0,0,.45);
  }
}
.ss-step__wait{
  .ss-step-icon {
    color: rgba(0,0,0,.25);
    background-color: #ffffff;
    border-color: rgba(0,0,0,.25);
  }
  .ss-step-content-title {
    color: rgba(0,0,0,.45);
  }
  .ss-step-content-desc {    
    color: rgba(0,0,0,.45);
  }
}
.ss-step__error{
  .ss-step-icon {
    color: #FB6161;
    background-color: #ffffff;
    border-color: #FB6161;
  }
  .ss-step-content-title {
    color: #FB6161;
  }
  .ss-step-content-desc {
    color: #FB6161;
  }
}

.ss-steps__horizontal {
  .ss-step-tail {
    display: none;
  }
}
.ss-steps__vertical {
  .ss-step {
    display: block;
    &:last-child {
      .ss-step-tail {
        display: none;
      }
    }
  }
  
  .ss-step-tail {
    position: absolute;
    left: 16px;
    top: 0;
    padding: 38px 0 6px;
    width: 1px;
    height: 100%;
    &::after {
      content: "";
      display: inline-block;
      background: #e8e8e8;
      height: 100%;
      width: 1px;
      border-radius: 1px;
      transition: background .3s;
    }    
  }
  .ss-step__finish {
      .ss-step-tail::after {
        background-color: #2A75ED;
      }      
    }
  .ss-step-content {
    .ss-step-content-title {
      &::after {
        display: none;
      }
    }
    .ss-step-content-desc {
      padding-bottom: 12px;
    }
  }
}

.ss-step-next-error {
  .ss-step-content {
    .ss-step-content-title::after {
      background-color: #FB6161;
    }
  }
  .ss-steps__vertical & .ss-step-tail::after {
    background-color: #FB6161;
  }
}
</style>
