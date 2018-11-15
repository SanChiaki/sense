<template>
    <transition name='ss-alert-fade'>
      <div>
        <div 
          class='ss-alert'
          :class='[typeClass]'
          v-show='visible'
        >
          <i v-if='showIcon' 
             class='ss-alert-status-icon' 
             :class='[statusClass]'
             :style='{fontSize: iconSize && iconSize}'
          ></i>
          <span class='ss-alert-title'
                :style='{width: titleWidth && titleWidth}'
          >
                {{ title }}
          </span>
          <i class='ss-alert__closebtn icon-icon_close' v-show='closable' @click='close()'></i>
        </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'SsAlert',

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: null
    },
    titleWidth: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    }
  },

  computed: {
    typeClass() {
      return `ss-alert__${this.type}`;
    },
    statusClass() {
      return `icon-icon_status_${this.type}`;
    }
  }
};
</script>

<style lang='scss' scoped>
.ss-alert-fade-enter,
.ss-alert-fade-leave-active {
  opacity: 0;
}
.ss-alert {
  display: inline-flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  color: #353535;
  border: 1px solid;
  border-radius: 2px;
  transition: opacity 0.3s;
  font-size: 0;
  &.ss-alert__primary {
    border-color: #89b4fa;
    background-color: rgba(42, 117, 237, 0.1);
    .ss-alert-status-icon {
      color: rgb(42, 117, 237);
    }
  }
  &.ss-alert__success {
    border-color: #95e1ae;
    background-color: rgba(47, 206, 99, 0.1);
    .ss-alert-status-icon {
      color: rgb(47, 206, 111);
    }
  }
  &.ss-alert__warning {
    border-color: #ffdeb4;
    background-color: rgba(255, 184, 94, 0.1);
    .ss-alert-status-icon {
      color: rgb(255, 184, 94);
    }
  }
  &.ss-alert__error {
    border-color: #ffb4b4;
    background-color: rgba(251, 97, 97, 0.1);
    .ss-alert-status-icon {
      color: rgb(251, 97, 97);
    }
  }
  .ss-alert__closebtn {
    cursor: pointer;
    align-self: flex-start;
    margin-left: 10px;
    color: #b2b2b2;
    font-size: 16px;
  }
  .ss-alert-status-icon {
    margin: 0 10px 0 5px;
    font-size: 14px;
  }
  .ss-alert-title {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    width: 560px;
  }
}
</style>
