import { shallowMount } from '@vue/test-utils'
import Header from '../Todo_header.vue'

let wrapper = null;

describe('Todo=header.vue', () => {

  it('Header should existed ', () => {
    const wrapper = shallowMount(Header);
    const result = wrapper.exists();
    expect(result).toBe(true);
  })

  it('Header should include input box', () => {
    const wrapper = shallowMount(Header);
    // 这个找的是一个 components，找的是一个 dom的属性
    const input_box = wrapper.find("[data-test='user-input']")
    const result = input_box.exists()
    
    expect(result).toBe(true)
  })

  it('input value of input is empty string', () => {
    const wrapper = shallowMount(Header);
    const initialValue = wrapper.vm.$data.inputValue
    expect(initialValue).toEqual('')
  })

  it('input value should update when input value update', () => {
    const testStr = 'test string'
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr)
    const inputValue = wrapper.vm.$data.inputValue
    expect(testStr).toEqual(inputValue)
  })

  it('input should do nothing when user hit enter when input value is ""', () => {
    const testStr = ''
    const wrapper = shallowMount(Header);
    const input = wrapper.find("[data-test='user-input']")
    input.setValue(testStr)
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
})

