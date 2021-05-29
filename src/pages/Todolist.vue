<template>
  <div>
    <Header :add="add"/>
  </div>
  
</template>

<script>
import Header from '../components/Todo_header'
export default {
  name: "todo-page",
  components: {
    Header
  },
  methods: {
    add(todo){
      console.log({todo});
    }
  }
};
</script>

