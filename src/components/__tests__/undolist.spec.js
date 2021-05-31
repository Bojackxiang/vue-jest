import { shallowMount, mount } from "@vue/test-utils";
import UndoList from '../../components/UndoList.vue'
import Todo from '../UndoList.vue'
import Header from '../../components/Todo_header.vue'
import { findAllElementsByClassName, findWrapperWithTag } from '../../utils/testUtils'


describe('Undo List component', () => {
  it('undo list should render successfully', () => {
    const wrapper = shallowMount(UndoList);
    expect(wrapper).toBeTruthy()
  })

  it('undo list 穿进来的是一个孔数组', () => {
    // REVIEW: <学习> component 接受参数
    const wrapper = shallowMount(UndoList, {
      propsData: {
        undoList: []
      }
    });
    // REVIEW <学习> 获取 父组件 穿进来的 参数
    const defaultUndoList = wrapper.props().undoList;
    expect(defaultUndoList.length).toBe(0)
  })

  it('default li element length should be 0', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        undoList: []
      }
    });
    const todoItems = findAllElementsByClassName(wrapper, '.todo-item')
    expect(todoItems.length).toEqual(0)
  })

  it('should have correct length', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        undoList: [1, 2, 3]
      }
    });
    const todoItems = findAllElementsByClassName(wrapper, '.todo-item')
    expect(todoItems.length).toEqual(3)
  })

  it('should have delete button when length is greater than 1', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        undoList: [1, 2, 3]
      }
    });
    const todoItems = findAllElementsByClassName(wrapper, '.delete-todo-btn')
    expect(todoItems.length).toEqual(3)
  })

  it('点击子组件删除钮的时候向外触发事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        undoList: [1]
      }
    });

    const deleteBtn = wrapper.find('.delete-todo-btn')
    expect(deleteBtn).toBeTruthy();
    // REVIEW <学习> 触发button 的点击时间
    deleteBtn.trigger('click')
    //  REVIEW <学习> 向外触发 delete 事件
    console.log(wrapper.emitted().delete);
    expect(wrapper.emitted().delete).toBeTruthy();

  })

  
})