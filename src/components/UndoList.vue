<template>
  <div>
    <ul>
      <li v-for="(todo, index) in undoList" :key="index" class="todo-item">
        <TodoItem
          data-test="todo-item"
          :todoItem="todo"
          :id="index"
          @deleteTodo="deleteTodo"
          @done="done"
          @updateTodo="updateTodo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "../components/Todo_item.vue";
export default {
  name: "undo-list",
  components: {
    TodoItem,
  },
  props: {
    undoList: Array,
    listName: String,
    delete: Function,
    updateText: Function,
  },
  methods: {
    deleteTodo(todoIndex) {
      // REVIEW <VUE>: 子组建 向 父组件 触发信息
      // REVIEW <VUE> PROPS 里面的数据 也要 this 才能渠道
      this.$emit("delete", todoIndex, this.listName);
    },
    done(index) {
      this.$emit("doneTodo", index, this.listName);
    },
    updateTodo(index, newText) {
      this.$emit("updateText", index, newText, this.listName);
    },
  },
  data() {
    return {
      undoListData: this.undoList,
    };
  },
  watch: {
    undoListData: function(){
      this.undoListData = undoList
    }
  }
};
</script>

<style>
</style>