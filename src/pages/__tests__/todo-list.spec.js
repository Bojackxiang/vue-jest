import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import TodList from '../Todolist.vue'
import Header from '../../components/Todo_header.vue'
import UndoList from '../../components/UndoList.vue'
import { findWrapperWidthComponentName } from '../../utils/testUtils'
import TodoList from '../../pages/Todolist.vue'

let wrapper = null
describe('HelloWorld.vue', () => {
  beforeAll(() => {
    wrapper = shallowMount(TodList)
  })

  it('Tdo list 能够正常渲染', () => {
    expect(wrapper).toBeTruthy()
  })

  it('undo list should be empty', () => {
    const undoList = wrapper.vm.undoList;
    expect(undoList).toEqual([])
  })

  it('todo list subscribe the header add event', () => {
    // trigger the method
    // REVIEW <学习> 父组件中获取子组件
    const header = findWrapperWidthComponentName(wrapper, Header); //! 直接找组件
    // REVIEW <学习> 父组件 触发子组建
    header.vm.$emit('add', 'testing todo')
    // ! 这边最重要的 emit 一定是 父类穿进去的名字
    const data = wrapper.vm.undoList;
    expect(data.length).toBe(1)
  })

  it('todo list 调用 undo list 里面的 delete 方法', () => {
    // REVIEW <学习> 获得父组件
    const wrapper = shallowMount(TodList)
    // REVIEW  <学习> 更改父组件的里面的 data
    wrapper.vm.undoList = [1, 2]
    // REVIEW <学习> 获得父组件中的足组件
    const undoList = findWrapperWidthComponentName(wrapper, UndoList)
    // REVIEW <学习> 子组建触发父组件传递的方法
    undoList.vm.$emit('delete', 0, 'undo')
    // REVIEW <学习> 获取 组件里面的 数据
    // REVIEW <学习> 不要用 vm.$data。propertyName, 而是使用 vm.propertyName
    expect(wrapper.vm.undoList.length).toEqual(1)
  })



  it('当 input 里面的 方法被处罚的时候，undo  list 的 方法也应该能改', async () => {
    const todo = mount(TodoList);
    const header = todo.findComponent(Header);
    const undoList = todo.findComponent(UndoList)
    expect(undoList).toBeTruthy();
    expect(header).toBeTruthy()

    const tempStr = 'test string';
    // REVIEW <学习> EMIT 和 EMITTED 之间的区别
    header.vm.$emit('add', tempStr)
    // REVIEW <学习> 检测 add 是不是已经被触发了
    expect(header.emitted('add')).toBeTruthy()
    expect(todo.vm.undoList.length).toEqual(1)
    expect(todo.vm.undoList[0]).toEqual(tempStr)
    // REVIEW <解决> undolist 里面的数据没有更新的情况
    //https://stackoverflow.com/questions/53781794/vue-test-utils-is-updating-the-component-data-but-not-re-rendering-the-dom
    await Vue.nextTick()

    expect(undoList.props('undoList')).toBeTruthy();
  })

  it('当点击了 添加 / 删除 / done 的时候， undo, todo, 应该要有相应的变化', () => {

  })


})
