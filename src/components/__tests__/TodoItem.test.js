import { shallowMount } from "@vue/test-utils";
import TodoItem from '../Todo_item.vue'

describe('Todo Item', () => {
  it('Todo Item should ', () => {
    // REVIEW <学习> GENERATE A COMPONENT
    const todoItem = shallowMount(TodoItem, {
      propsData: {
        todoItem: 'test',
        id: 0,
        deleteTodo: () => {},
        done: () => {}
      }
    })

    expect(todoItem.exists()).toBeTruthy()
    const deleteBtn = todoItem.find('.delete-btn')
    deleteBtn.trigger('click')
    expect(todoItem.emitted('deleteTodo')).toBeTruthy()

    const doneBtn = todoItem.find('.done-btn')
    // REVIEW <学习> trigger button click action
    doneBtn.trigger('click')
    expect(todoItem.emitted('done')).toBeTruthy()
  })


})
