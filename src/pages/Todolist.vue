<template>
  <div>
    <Header @add="add" data-test="header-component" />
    <UndoList
      :listName="'undo'"
      :undoList="undoList"
      @delete="deleteTodo"
      @doneTodo="doneTodo"
      @updateText="updateTextOfTodo"
    />
    <hr />
    <UndoList
      :listName="'done'"
      :undoList="finishedList"
      @delete="deleteTodo"
      @doneTodo="doneTodo"
      @updateText="updateTextOfTodo"
    />
  </div>
</template>

<script>
import Header from "../components/Todo_header";
import UndoList from "../components/UndoList.vue";
export default {
  name: "todo-page",
  components: {
    Header,
    UndoList,
  },
  data() {
    return {
      undoList: [],
      finishedList: [],
    };
  },
  methods: {
    add(todo) {
      this.undoList = [...this.undoList, todo];
    },
    deleteTodo(todoIndex, listName) {
      switch (listName) {
        case "undo":
          this.undoList.splice(todoIndex, 1);
          break;
        case "done":
          this.finishedList.splice(todoIndex, 1);
          break;
        default:
          return;
      }
    },
    doneTodo(index) {
      const item = this.undoList[index];
      this.finishedList.push(item);
      this.undoList.splice(index, 1);
    },
    updateTextOfTodo(index, newText, listName) {
      switch (listName) {
        case "undo":
          // REVIEW <VUE> 如果要改变 list，不饿螚只改变一个，要整个 data 一起改变
          // REVIEW <VUE> 这边可以回顾 javascript 的引用类型 和 值类型
          const temp = [...this.undoList]; //
          temp[index] = newText;
          this.undoList = temp;
          break;
        case "done":
          this.finishedList[index] = newText;
          break;
        default:
          break;
      }
    },
  },
};
</script>


