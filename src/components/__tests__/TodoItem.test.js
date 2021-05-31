import { shallowMount } from "@vue/test-utils";
import TodoItem from '../Todo_item.vue'

describe('Todo Item', () => {
  it('Todo Item should ', () => {
    const todoItem = shallowMount(TodoItem, {
      propsData: {
        todoItem: 'test',
        id: 0,
        deleteTodo: () => {},
        done: () => {}
      }
    })

    expect(todoItem).toBeTruthy()

    const deleteBtn = todoItem.find('.delete-btn')
    deleteBtn.trigger('click')
    expect(todoItem.emitted('deleteTodo')).toBeTruthy()

    const doneBtn = todoItem.find('.done-btn')
    doneBtn.trigger('click')
    console.log('helo world');
    expect(todoItem.emitted('done')).toBeTruthy()
  })


})
