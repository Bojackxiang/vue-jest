import Vue from 'vue'
import { shallowMount, } from "@vue/test-utils";
import TodoItem from '../Todo_item.vue'

describe('Todo Item', () => {
  it('Todo Item should rendered', () => {
    // REVIEW <学习> GENERATE A COMPONENT
    const todoItem = shallowMount(TodoItem, {
      propsData: {
        todoItem: 'test',
        id: 0,
        deleteTodo: () => { },
        done: () => { }
      }
    })
    expect(todoItem).toBeTruthy()
  })

  it("delete btn should trigger delete function", () => {
    const todoItem = shallowMount(TodoItem, {
      propsData: {
        todoItem: 'test',
        id: 0,
        deleteTodo: () => { },
        done: () => { }
      }
    })
    expect(todoItem.exists()).toBeTruthy()
    const deleteBtn = todoItem.find('.delete-btn')
    deleteBtn.trigger('click')
    expect(todoItem.emitted('deleteTodo')).toBeTruthy()
  })

  it('done btn should work', () => {
    const todoItem = shallowMount(TodoItem, {
      propsData: {
        todoItem: 'test',
        id: 0,
        deleteTodo: () => { },
        done: () => { }
      }
    })

    const doneBtn = todoItem.find('.done-btn')
    // REVIEW <学习> trigger button click action
    doneBtn.trigger('click')
    expect(todoItem.emitted('done')).toBeTruthy()
  })

  it('input state should correct', () => {
    const wrapper = shallowMount(TodoItem);
    const inputBox = wrapper.find('.todo-input');
    const displayAttr = inputBox.attributes().style.includes('display')
    const displayAttrResult = !inputBox.attributes().style.includes('false')
    expect(displayAttr).toBeTruthy()
    expect(displayAttrResult).toBeTruthy()
  })

  it('toggle button should working', () => {
    const wrapper = shallowMount(TodoItem);
    const inputBox = wrapper.find('.todo-input');
    const toggleBtn = wrapper.find('.edit-btn')
    toggleBtn.trigger('click')
    expect(wrapper.vm.$data.showInput).toBeTruthy()

    Vue.nextTick()

    const includeDisplay = inputBox.attributes().style.includes('display'),
      noneAttr = inputBox.attributes().style.includes('none');

    expect(includeDisplay).toBeTruthy();
    expect(noneAttr).toBeTruthy();
  })

  it('updateText function should working', () => {
    const wrapper = shallowMount(TodoItem);
    // REVIEW 获取 VueComponent 中的方法
    wrapper.vm.updateText()
    expect(wrapper.emitted('updateTodo')).toBeTruthy()
  })

  it('Update function should trigger', () => {
    const wrapper = shallowMount(TodoItem);
    const inputBox = wrapper.find('.todo-input');
    const toggleBtn = wrapper.find('.edit-btn')

    toggleBtn.trigger('click')
    expect(wrapper.vm.$data.showInput).toBeTruthy()

    inputBox.trigger('keyup.enter')
    expect(wrapper.emitted('updateTodo')).toBeTruthy()
  })




})
