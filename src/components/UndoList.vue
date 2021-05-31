<template>
  <div>
    <ul>
      <li v-for="(todo, index) in undoList" :key="index" class="todo-item">
        <div>
          <span>{{ todo }}</span>
          <button class="delete-todo-btn" @click="deleteTodo(index)">
            delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "undo-list",
  props: {
    undoList: Array,
    delete: Function,
  },
  methods: {
    deleteTodo(todoIndex) {
      // REVIEW VUE: 子组建 向 父组件 触发信息
      this.$emit("delete", todoIndex);
    },
  },
};
</script>

<style>
</style>