<template>
  <div>
    <Header @add="add" data-test='header-component'/>
    <ul>
      <li v-for="(item, index) in undoList" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
  
</template>

<script>
import Header from '../components/Todo_header'
export default {
  name: "todo-page",
  components: {
    Header
  },
  data(){
    return {
      undoList: []
    }
  },
  methods: {
    add(todo){
      this.undoList = [...this.undoList, todo]
    }
  }
};
</script>


