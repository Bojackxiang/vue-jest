import { shallowMount } from '@vue/test-utils'
import Header from '../Todo_header.vue'

let wrapper = null;

describe('Todo=header.vue', () => {

  it('Header should existed ', () => {
    // REVIEW 生成 component
    const wrapper = shallowMount(Header);
    const result = wrapper.exists();
    expect(result).toBe(true);
  })

  it('Header should include input box', () => {
    const wrapper = shallowMount(Header);
    // REVIEW 根据 data-test 找 dom 节点
    const input_box = wrapper.find("[data-test='user-input']")
    const result = input_box.exists()
    
    expect(result).toBe(true)
  })

  it('input value of input is empty string', () => {
    const wrapper = shallowMount(Header);
    // REVIEW 获取 component 中的 data
    const initialValue = wrapper.vm.$data.inputValue
    expect(initialValue).toEqual('')
  })

  it('input value should update when input value update', () => {
    const testStr = 'test string'
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='user-input']")
    // REVIEW 给 input 组件赋值
    input.setValue(testStr)
    const inputValue = wrapper.vm.$data.inputValue
    expect(testStr).toEqual(inputValue)
  })

  it('input should do nothing when user hit enter when input value is ""', () => {
    const testStr = ''
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr)
    // REVIEW input 触发 事件
    input.trigger('keyup.enter')

    expect(wrapper.emitted().add).toBeFalsy()
  })


  it('input should do sth when user hit enter and the input value is available', () => {
    const testStr = 'test'
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr)
    input.trigger('keyup.enter')
    // 这边 也不是很需要 真实存在一个 add 去emit
    // REVIEW 子组件 触发 父类传捡来的组件
    expect(wrapper.emitted().add).toBeTruthy()
  })

  it('input value should be "" when user submit the form', () => {
    const wrapper = shallowMount(Header);
    const testStr = 'hello'
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr);
    input.trigger('keyup.enter')
    const inputValue = wrapper.vm.$data.inputValue 
    expect(inputValue).toEqual('');
  })

  it('the snapshot should be same', () => {
    const wrapper = shallowMount(Header);
    // REVIEW snapshot 测试
    expect(wrapper).toMatchSnapshot();
  })
})

