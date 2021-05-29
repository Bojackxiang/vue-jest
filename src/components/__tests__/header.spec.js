import { shallowMount } from '@vue/test-utils'
import Header from '../Todo_header.vue'

let wrapper = null;

describe('Todo=header.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Header);
  })

  it('Header should existed ', () => {
    expect(wrapper).not.toBe(null);
    expect(wrapper).not.toBe(undefined);
  })

  it('Header should include input box', () => {
    const input_box = wrapper.find("[data-test]='input'")
    expect(input_box.exists()).toBe(true)
  })
})
