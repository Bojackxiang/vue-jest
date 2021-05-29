<template>
  <div id="app">
    <Todolist/>
  </div>
</template>

<script>
import Todolist from './pages/Todolist.vue'

export default {
  name: 'App',
  components: {
    Todolist
  }
}
</script>

<style >
 * {
   margin: 0; 
   padding: 0;
 }
</style>
