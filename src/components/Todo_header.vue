<template>
  <div>
    <h2>todo</h2>
    <input
      type="text"
      data-test="user-input"
      v-model="inputValue"
      @keyup.enter="submit"
    />
  </div>
</template>

<script>
export default {
  name: "todo-header",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    submit() {
      console.log(this.inputValue);
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>