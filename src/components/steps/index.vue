<template>
  <div 
    class='ss-steps'
    :class="[ stepsDirection ]"
  >
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SsSteps',

  props: {
    current: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: 'process',
      validator: val => ['wait', 'process', 'finish', 'error'].indexOf(val) > -1
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => ['horizontal', 'vertical'].indexOf(val) > -1
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  
  data() {
    return {
      steps: []
    }
  },

  computed: {
    stepsDirection() {
      return `ss-steps__${this.direction}`
    }
  },

  watch: {
    status() {
      this.updateStepsStatus();
    },
    current() {
      this.updateStepsStatus();
    },
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
      this.updateStepsStatus();
    }
  },

  methods: {
    updateStepsStatus() {
      const current = this.current;
      const status = this.status;

      this.steps.forEach((child, index) => {
        const prevChild = this.steps[index - 1];

        if (index === current) {
          prevChild && (prevChild.nextError = (status === 'error'));
        } else if (index < current) {
          prevChild && (prevChild.nextError = false);
        } else {
          prevChild && (prevChild.nextError = false);
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.ss-steps {
  display: flex;
  font-size: 0;
  transition: background 0.3s;
}
.ss-steps__vertical {
  display: block;
}
</style>
