import { shallowMount } from '@vue/test-utils'
import TodList from '../Todolist.vue'
import Header from '../../components/Todo_header.vue'

let wrapper = null
describe('HelloWorld.vue', () => {
  beforeAll(() => {
    wrapper = shallowMount(TodList)
  })

  it('Tdo list 能够正常渲染', () => {
    expect(wrapper).toBeTruthy()
  })

  it('undo list should be empty', () => {
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([])
  })

  it('todo list subscribe the header add event', () => {
    // trigger the method
    // REVIEW 父组件中获取子组件
    const header = wrapper.findComponent(Header); //! 直接找组件
    // REVIEW 父组件 触发子组建
    header.vm.$emit('add', 'testing todo')
    // ! 这边最重要的 emit 一定是 父类穿进去的名字

    const data = wrapper.vm.$data.undoList;
    expect(data.length).toBe(1)
  })
})
