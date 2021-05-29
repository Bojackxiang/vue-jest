import { shallowMount } from '@vue/test-utils'
import TodList from '../Todolist.vue'

describe('HelloWorld.vue', () => {
  it('Tdo list 能够正常渲染', () => {
    const wrapper = shallowMount(TodList)

    expect(wrapper.exists()).toBe(true)
    
  })
})
