<template >
  <div class="ss-modal">
    <div class="ss-modal__wrapper" ref="modal">
      <div class="ss-modal-main">
        <div class="ss-modal-main-header">
          <i class="ss-modal__close icon-icon-close" @click.stop="close"></i>
        </div>

        <div class="ss-modal-main-content">
          <div class="ss-modal-icon__wrapper" v-show="iconType">
            <i class="ss-modal-icon"
              :class="[
                iconType && `ss-modal-icon-color-${iconType}`,
                iconType && `icon-icon-status__${iconType}`
              ]"
            ></i>
          </div>
          <p class="ss-modal-title" v-show="title">{{ title }}</p>
          <p class="ss-modal-content" v-show="content"> {{ content }} </p>
          <div class="ss-modal-slot__extra" v-if="$slots.default">
              <slot></slot>
          </div> 
          <p class="ss-modal-btn">
            <ss-button
              v-if="btnText.cancel"
              class="ss-modal__cancel"
              :type="iconType" 
              @click="cancel">
              {{ btnText.cancel }}
            </ss-button>
            <ss-button
              v-if="btnText.confirm"
              :type="iconType" 
              @click="confirm">
              {{ btnText.confirm }}
            </ss-button>
          </p>
        </div>
      </div>
    </div>

    <transition 
      name="mask-fade"
      @after-leave="maskAfterLeave">
      <div class="ss-modal-mask"
        v-show="maskControl.isShow"
        @click="close"
        ref="mask"
      >
      </div>
    </transition>
  </div>
</template>
<script>
import ssButton from '../button/index'

let mousePosition = {}
let mainSize = {}
let clientSize = {}
let isOpen = false
const docClickListener = (event) => {
  const e = event || window.event
  if (!isOpen) {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    }
  }
}
export default {
  name: 'modal',

  components: {
    ssButton
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: '540px'
    },

    iconType: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    btnText: {
      type: Object,
      default: () => ({
        confirm: '知道',
        cancel: '取消'
      })
    },

    validation: {
      type: Function,
      default: () => {}
    }
  },

  beforeCreate() {
    document.addEventListener('click', docClickListener, false)
  },

  data() {
    return {
      maskControl: {
        isShow: false
      }
    }
  },

  watch: {
    visible(val) {
      if (val) {
        isOpen = true
        this.maskControl.isShow = true
        this.initMainPosition()
        window.addEventListener('resize', this.lastMainPosition, false)
      }
    }
  },

  methods: {
    initMainPosition() {
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${mousePosition.x}px;
        top: ${mousePosition.y}px;
      `
      this.$nextTick(this.lastMainPosition)
    },

    lastMainPosition() {
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${mousePosition.x}px;
        top: ${mousePosition.y}px;
        transform: translate(${this.calcMoveDistance('x')}, ${this.calcMoveDistance('y')}) scale(1);
        opacity: 1;
      `
    },

    getEleStyle() {
      const reg = /px/g
      mainSize = {
        wd: parseFloat(getComputedStyle(this.$refs.modal, false).width.replace(reg, '')),
        hi: parseFloat(getComputedStyle(this.$refs.modal, false).height.replace(reg, ''))
      }
      clientSize = {
        wd: document.documentElement.clientWidth,
        hi: document.documentElement.clientHeight
      }
    },

    calcMoveDistance(mark) {
      this.getEleStyle()
      const tmpIdx = mark === 'x' ? 'wd' : 'hi'
      return `${parseFloat((clientSize[tmpIdx] / 2) - mousePosition[mark] - (mainSize[tmpIdx] / 2))}px`
    },

    close() {
      this.maskControl.isShow = false
      this.$refs.modal.style.cssText = `
        width: ${this.width};
        left: ${mousePosition.x}px;
        top: ${mousePosition.y}px;
        transform: translate(0, 0) scale(0);
      `
    },

    confirm() {
      if (this.validation.name !== '_default') {
        if (!this.validation()) { 
          return 
        } 
      }

      this.$emit('confirms')
      this.close()
    },

    cancel() {
      this.$emit('cancel')
      this.close()
    },

    maskAfterLeave() {
      isOpen = false
      this.$emit('update:visible', false)
      window.removeEventListener('resize', this.lastMainPosition, false)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/base.scss';

  .ss-modal {
    & > .ss-modal__wrapper {
      position: fixed;
      padding: 16px 16px 40px;
      background: #fff;
      border-radius: 4px;
      z-index: 3000;
      transition: all .3s ease-in-out;
      transform-origin: 0 0 0;
      opacity: 0;
      transform: translate(0, 0) scale(0);
      & > .ss-modal-main {
        .ss-modal-main-header {
          text-align: right;
          & > .ss-modal__close{
            font-size: 24px;
            cursor: pointer;
            color: #b2b2b2;
          }
        }
        & > .ss-modal-main-content {
          text-align: center;
          .ss-modal-icon__wrapper {
            padding-bottom: 14px;
          }
          .ss-modal-icon{
            font-size: 64px;
          }
          .ss-modal-icon-color-primary {
            color: $mc;
          }
          .ss-modal-icon-color-success {
            color: $sc;
          }
          .ss-modal-icon-color-error {
            color: $ec;
          }
          .ss-modal-icon-color-warning {
            color: #ffb85e;
          }
          .ss-modal-title {
            font-size: 16px;
            font-weight: 600;
            color: #353535;
            padding-bottom: 8px;
          }
          .ss-modal-content {
            padding-bottom: 5px;
          }
          .ss-modal-slot__extra {
            padding: 3px 0 5px;
          }
          .ss-modal-btn {
            margin-top: 40px;
            & > .ss-modal__cancel {
              border: 1px solid #eee;
              background: #fafbfc;
              color: #666;
            }
          }
        }
      }
    }
    &-mask {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;   
      background: #000;
      opacity: .5;
      z-index: 2999; 
    }
    .mask-fade-enter, .mask-fade-leave-to {
      opacity: 0;
    }
    .mask-fade-enter-active, .mask-fade-leave-active {
      transition: opacity .3s ease-in-out;
    }
    .mask-fade-enter-to, .mask-fade-leave{
      opacity: .5;
    }
  }
</style>


