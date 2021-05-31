<template>
  <div>
    <Header @add="add" data-test="header-component" />
    <UndoList
      :listName="'undo'"
      :undoList="undoList"
      @delete="deleteTodo"
      @doneTodo="doneTodo"
    />
    <hr />
    <UndoList
      :listName="'done'"
      :undoList="finishedList"
      @delete="deleteTodo"
      @doneTodo="doneTodo"
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

      this.undoList.indexOf();
    },
    doneTodo(index) {
      const item = this.undoList[index];
      this.finishedList.push(item);
      this.undoList.splice(index, 1);
    },
  },
};
</script>


