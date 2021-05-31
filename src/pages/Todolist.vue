<template>
  <div>
    <Header @add="add" data-test='header-component'/>
    <UndoList :undoList="undoList" @delete="deleteTodo"/>
  </div>
  
</template>

<script>
import Header from '../components/Todo_header'
import UndoList from '../components/UndoList.vue';
export default {
  name: "todo-page",
  components: {
    Header,
    UndoList
  },
  data(){
    return {
      undoList: []
    }
  },
  methods: {
    add(todo){
      this.undoList = [...this.undoList, todo]
    },
    deleteTodo(todoIndex){
      this.undoList.splice(todoIndex, 1)
    }
  }
};
</script>


