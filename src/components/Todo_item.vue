<template>
  <div class="item-wrapper">
    <div>
      <p>
        {{ todoItem }}
      </p>
      <input type="text" v-model="todoItemText" @keyup.enter="updateText" />
    </div>

    <button class="delete-btn" @click="deleteTodo(id)">delete</button>
    <button class="done-btn" @click="finishTodo(id)">Done</button>
    <button class="edit-btn" @click="edit()">Edit</button>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: String,
    id: Number,
    updateTodo: Function
  },
  data() {
    return {
      todoItemText: this.todoItem,
    };
  },
  methods: {
    deleteTodo(index) {
      this.$emit("deleteTodo", index);
    },
    finishTodo(index) {
      this.$emit("done", index);
    },
    edit() {
      // console.log(index);
    },
    updateText() {
      this.$emit('updateTodo', this.id, this.todoItemText)
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
.edit-btn {
  min-width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  background-color: cadetblue;
  color: white;
  margin: 10px;
}
</style>