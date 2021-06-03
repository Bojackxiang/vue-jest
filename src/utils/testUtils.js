import ElementUI from 'element-ui';
import { createLocalVue } from '@vue/test-utils'

export const findWrapperWithTag = (wrapper, tag) => {
  return wrapper.find(tag)
}

export const findWrapperWidthComponentName = (wrapper, component) => {
  return wrapper.findComponent(component)
}

export const findAllTagInWrapper = (wrapper, tag) => {
  return wrapper.findAllComponents(tag)
}

export const findAllElementsByClassName = (wrapper, className) => {
  return wrapper.findAll(className)
}

export const solveElementUIIssue = () => {
  const localVue = createLocalVue();
  localVue.use(ElementUI);
}