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
        <i class="ss-message-icon" :class="iconClass"></i>
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
  animation: move-up .3s ease-in-out both;
}
.move-up-leave-to {
  animation: move-up .3s ease-in-out both reverse;
}
@keyframes move-up {
  0% {
    opacity: 0;
    transform-origin: 0 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform-origin: 0 0;
    transform: translateY(0);
  }
}
.ss-message {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  height: 40px;
  margin: 10px 0;
  padding: 0 24px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.05),0px 6px 12px 0px rgba(0,0,0,0.05);
  border-radius: 2px;
  text-align: center;
  font-size: 0;

  &__wrapper {
    position: fixed;
    top: 16px;
    width: 100%;
    text-align: center;
    pointer-events: none;
    transition: opacity .3s,transform .3s,top .4s;
  }
  .ss-message-icon {
    margin-right: 10px;
    font-size: 16px;
  }
  .ss-message-content {
    font-size: 14px;
    line-height: 16px;
  }
}
.icon-icon-status__primary {
  color: rgb(42, 117, 237);
}
.icon-icon-status__success {
  color: rgb(47, 206, 111);  
}
.icon-icon-status__warning {
  color: rgb(255, 184, 94);
}
.icon-icon-status__error {
  color: rgb(251, 97, 97);  
}
</style>
