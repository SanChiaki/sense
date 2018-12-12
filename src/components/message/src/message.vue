<template>
  <div
    class="ss-message__wrapper"
    :style="{ top: top ? `${top}px` : 'auto' }"
  >
    <transition name="move-up" @after-leave="doDestory">
      <div
        class="ss-message"
        :class="{ [`ss-message__${type}`]: type }"
        v-show="visible"
      >
        <i class="icon ss-message-icon" :class="iconClass"></i>
        <span class="ss-message-content">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      duration: 3000,
      type: 'info',
      icon: '',
      visible: false,
      timer: null,
      closed: false,
      onClose: null,
      top: null
    }
  },
  computed: {
    iconClass() {
      const classArr = {
        info: 'icon-icon-status__primary'
      }
      return this.icon || classArr[this.type] || `icon-icon-status__${this.type}`
    }
  },
  watch: {
    closed(val) {
      if (val) {
        this.visible = false
      }
    }
  },
  methods: {
    doDestory() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer() {
      if (this.duration) {
        this.timer = setTimeout(() => {
          !this.closed && this.close()
        }, this.duration)
      }
    },
    clearTimer() {
      this.timer && clearTimeout(this.timer)
    }
  },
  mounted() {
    this.startTimer()
  }
}
</script>

<style lang="scss" scoped>
.move-up-enter-active {
  animation: move-up .3s;
}
.move-up-leave-active {
  animation: move-up .3s reverse;
}
@keyframes move-up {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.ss-message {
  transition: opacity .3s,transform .3s,top .4s;
}
</style>
