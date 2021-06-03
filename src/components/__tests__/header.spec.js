import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Header from '../Todo_header.vue'
import { findWrapperWithTag, solveElementUIIssue } from '../../utils/testUtils'
import store from '../../store'


solveElementUIIssue()

describe('Todo=header.vue', () => {

  it('Header should existed ', () => {
    // REVIEW <学习> 生成 component
    const wrapper = shallowMount(Header, { store });
    const result = wrapper.exists();
    expect(result).toBe(true);
  })

  it('Header should include input box', () => {
    const wrapper = shallowMount(Header, { store });
    // REVIEW <学习> 根据 data-test 找 dom 节点
    const input_box = findWrapperWithTag(wrapper, "[data-test='user-input']")
    const result = input_box.exists()

    expect(result).toBe(true)
  })

  it('input value of input is empty string', () => {
    const wrapper = shallowMount(Header, { store });
    // REVIEW <学习> 获取 component 中的 data
    const initialValue = wrapper.vm.inputValue
    expect(initialValue).toEqual('')
  })

  it('input value should update when input value update', () => {
    const testStr = 'test string'
    const wrapper = shallowMount(Header, { store });
    const input = findWrapperWithTag(wrapper, "[data-test='user-input']")
    // REVIEW <学习> 给 input 组件赋值
    input.setValue(testStr)
    const inputValue = wrapper.vm.inputValue
    expect(testStr).toEqual(inputValue)
  })

  it('input should do nothing when user hit enter when input value is ""', () => {
    const testStr = ''
    const wrapper = shallowMount(Header, { store });
    const input = findWrapperWithTag(wrapper, "[data-test='user-input']")
    input.setValue(testStr)
    // REVIEW <学习> input 触发 事件
    input.trigger('keyup.enter')

    expect(wrapper.emitted().add).toBeFalsy()
  })


  it('input should do sth when user hit enter and the input value is available', () => {
    const testStr = 'test'
    const wrapper = shallowMount(Header, { store });
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr)
    input.trigger('keyup.enter')
    // 这边 也不是很需要 真实存在一个 add 去emit
    // REVIEW <学习> 子组件 触发 父类传捡来的组件
    expect(wrapper.emitted().add).toBeTruthy()
  })

  it('input value should be "" when user submit the form', () => {
    const wrapper = shallowMount(Header, { store });
    const testStr = 'hello'
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr);
    input.trigger('keyup.enter')
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toEqual('');
  })

  it('the snapshot should be same', () => {
    const wrapper = shallowMount(Header, { store });
    // REVIEW <学习> snapshot 测试
    expect(wrapper).toMatchSnapshot();
  })

  it('the UI initial state should be same', () => {
    const wrapper = mount(Header, { store })
    const buttonContent = wrapper.find(".login").text()
    expect(buttonContent).toEqual('whatever')
  })

  it('the should update the UI after trigger the Vuex commit', () => {
    // 这边直接测试 computed 数据
    const wrapper = mount(Header, { store })
    expect(wrapper.vm.username).toEqual(null)

    // REVIEW <Vue> 通过 vue 触发 mapMutation 里面的方法
    // 这个 login 实际上是 
    wrapper.vm.login('alex')
    expect(wrapper.vm.username).toEqual('alex')

  })


})

