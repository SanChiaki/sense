function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]'
}

/* eslint-disable */
export {
  isObject
}