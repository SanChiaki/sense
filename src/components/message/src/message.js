import Vue from 'vue';
import MessageVue from './message.vue';

const MessageConstructor = Vue.extend(MessageVue);

const messageType = ['info', 'success', 'warning', 'error'];
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


Message.close = (id, customCloseFunc) => {
  const len = instances.length;
  let index;
  let removedHeight;

  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof customCloseFunc === 'function') {
        customCloseFunc(instances[i]);
      }
      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }

  if (len > 1) {
    for (let i = index; i < len - 1; i++) {
      instances[i].dom.style.top = `${parseInt(instances[i].dom.style.top, 10) - removedHeight - 8}px`;
    }
  }
}

Message.closeAll = () => {
  instances.forEach((elem) => {
    elem.close();
  })
}

messageType.forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type;
    options.icon = options.icon;
    return Message(options);
  }
})

export default Message;
