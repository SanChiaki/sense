<template>
  <span class="ss-popover-box">
    <slot name="reference"></slot>

    <transition name="fade">
      <div :class="['ss-popover', `ss-popover__${placement}`]"
           :style="popoverStyle"
           ref="popover">
        <div class="ss-popover-title" v-text="title" v-if="title"></div>
        <slot>{{content}}</slot>
        <span :class="['ss-popover-arrow',`ss-popover-arrow__${placement}`]"></span>
      </div>
    </transition>
  </span>
</template>

<script>
import { on, off, hasClass, addClass, removeClass } from '@/utils/dom';

export default {
  name: 'popover',
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'hover'].indexOf(value) > -1
    },
    title: String,
    content: String,
    width: {},
    placement: {
      type: String,
      default: 'right',
      validator: value => ['top', 'bottom', 'left', 'right'].indexOf(value) > -1
    }
  },
  data() {
    return {
      top: '',
      left: '',
      bottom: '',
      popoverStyle: {}
    }
  },
  mounted() {
    const reference = this.$slots.reference[0].elm;
    const popover = this.$refs.popover;
    this.computeDistance();

    if (this.trigger === 'click') {
      on(reference, 'click', this.handleToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popover, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popover, 'mouseleave', this.handleMouseLeave);
    }
  },
  methods: {
    handleToggle() {
      const popover = this.$refs.popover;
      this.computeDistance();
      if (hasClass(popover, 'ss-popover__show')) {
        removeClass(popover, 'ss-popover__show');
        addClass(popover, 'ss-popover__hidden');
      } else if (hasClass(popover, 'ss-popover__hidden')) {
        removeClass(popover, 'ss-popover__hidden');
        addClass(popover, 'ss-popover__show');
      } else {
        addClass(popover, 'ss-popover__show');
      }
    },
    handleDocumentClick(e) {
      const reference = this.$slots.reference[0].elm;
      const popover = this.$refs.popover;
      if (!this.$el ||
        !reference ||  
        this.$el.contains(e.target) ||  
        !popover ||  
        popover.contains(e.target)) {
        return;
      }
      removeClass(popover, 'ss-popover__show');
      addClass(popover, 'ss-popover__hidden');
    },
    handleMouseEnter() {
      this.computeDistance();
      const popover = this.$refs.popover;
      removeClass(popover, 'ss-popover__hidden');
      addClass(popover, 'ss-popover__show');
    },
    handleMouseLeave() {
      const popover = this.$refs.popover;
      removeClass(popover, 'ss-popover__show');
      addClass(popover, 'ss-popover__hidden');
    },
    computeDistance() {
      const reference = this.$slots.reference[0].elm;
      const popover = this.$refs.popover;
      let referenceHeight = 0;
      let referenceWidth = 0;
      let popoverHeight = 0;
      const popoverWidth = this.width;
      if (reference && popover) {
        referenceHeight = reference.offsetHeight;
        referenceWidth = reference.offsetWidth;
        popoverHeight = popover.offsetHeight;
      }
      if (popover && (this.placement === 'right' || this.placement === 'left')) {
        this.top = `-${Number((popoverHeight / 2) - (referenceHeight / 2))}px`;
      } else if (popover && this.placement === 'top') {
        this.bottom = `${Number(referenceHeight) + 5}px`;
        this.left = `-${Number((popoverWidth / 2) - referenceWidth)}px`;
      } else if (popover && this.placement === 'bottom') {
        this.top = `${Number(referenceHeight) + 5}px`;
        this.left = `-${Number((popoverWidth / 2) - referenceWidth)}px`;
      }

      this.popoverStyle = {
        width: `${popoverWidth}px`,
        top: this.top,
        left: this.left,
        bottom: this.bottom
      };
    }
  },
  destroyed() {
    const reference = this.reference;

    off(reference, 'click', this.doToggle);
    off(reference, 'mouseleave', this.handleMouseLeave);
    off(reference, 'mouseenter', this.handleMouseEnter);
    off(document, 'click', this.handleDocumentClick);
  }
}
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .ss-popover-box {
    position: relative;
  }
  .ss-popover {
    padding: 15px 24px;
    background:rgba(255,255,255,1);
    box-shadow:0px 6px 12px 0px rgba(0,0,0,0.05),0px 2px 4px 0px rgba(0,0,0,0.05);
    position: absolute;
    z-index: 10;
    visibility:hidden;
    .ss-popover-title {
      color:rgba(53,53,53,1);
      font-size: 16px;
      line-height: 1;
      margin-bottom: 12px;
    }
    .ss-popover-arrow {
      position: absolute;
      width: 8px;
      height: 8px;
      background: #fff;
    }
    &.ss-popover__top {
      .ss-popover-arrow__top {
        bottom: -4px;
        left: 40%;
        transform: rotate(45deg);
        box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
      }
    }
    &.ss-popover__bottom {
      .ss-popover-arrow__bottom {
        top: -4px;
        left: 40%;
        transform: rotate(45deg);
        border-left: 1px solid rgba(0, 0, 0, 0.05);
        border-top: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
    &.ss-popover__right {
      left: calc(100% + 10px);
      .ss-popover-arrow__right {
        top: calc(50% - 4px);
        left: -4px;
        transform: rotate(45deg);
        box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.05);
      }
    }
    &.ss-popover__left {
      right: calc(100% + 10px);
      .ss-popover-arrow__left {
        top: calc(50% - 4px);
        right: -4px;
        transform: rotate(45deg);
        box-shadow:2px 0px 0px 0px rgba(0, 0, 0, 0.05);
      }
    }
    &.ss-popover__show {
      visibility: visible;
    }
    &.ss-popover__hidden {
      visibility: hidden;
    }
  }
</style>
