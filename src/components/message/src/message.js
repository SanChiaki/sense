import Vue from 'vue';
import MessageVue from './message.vue';

const MessageConstructor = Vue.extend(MessageVue);

// const messageType = ['info', 'success', 'warning', 'error', 'loading'];
const instances = [];

let seed = 1;
let zIndexSeed = 1010;

const Message = function (options) {
  options = options || {};
  
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  const customCLoseFunc = options.onClose;
  const id = `message_${seed++}`;

  options.onClose = () => {
    Message.close(id, customCLoseFunc);
  }

  const instance = new MessageConstructor({
    data: options
  })

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = zIndexSeed++;

  const offset = 0;
  const len = instances.length;
  let topDist = offset;

  for (let i = 0; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + 8;
  }

  topDist += 8;
  instance.top = topDist;

  instances.push(instance);

  // 返回关闭方法，手动调用关闭
  return function () {
    instance.vm.close(id);
  }
}

export default Message;