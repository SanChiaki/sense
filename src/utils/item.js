import { isObject } from './index'

function getLabel(target) {
  return isObject(target) ? target.label : target
}

function getValue(target) {
  return isObject(target) ? target.value : target
}

/* eslint-disable */
export {
  getLabel,
  getValue
}