<template>
  <div class="item-wrapper">
    {{ todoItem }}
    <button class="delete-btn" @click="deleteTodo(id)">delete</button>
    <button class="done-btn" @click="finishTodo(id)">Done</button>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: String,
    id: Number,
  },
  methods: {
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    finishTodo(index) {
      this.$emit("done", index);
    },
  },
};
</script>

<style  scoped>
.item-wrapper {
  padding: 10px;
}
.delete-btn {
  min-width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  background-color: cadetblue;
  color: white;
  margin: 10px;
}
.done-btn {
  min-width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  background-color: cadetblue;
  color: white;
  margin: 10px;
}
</style>