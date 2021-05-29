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

<style lang="stylus">
body
  margin 0; 
  padding 0;
</style>
