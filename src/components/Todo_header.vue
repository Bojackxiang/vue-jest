<template>
  <div class="wrapper">
    <H3 class="header-logo">Todo</H3>
    <div>
      <input
        class="header-input"
        type="text"
        data-test="user-input"
        v-model="inputValue"
        @keyup.enter="submit"
      />
      <button class="submit-btn" @click="submit">Submit</button>
    </div>
    <div class="auth-btns-group">
      <el-button class="login" type="primary" @click="login"> {{username || 'whatever'}} </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "todo-header",
  props: ["add"],
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    username: function(){
      return this.$store.state.username
    }
  },
  methods: {
    submit() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = "";
      }
    },
    login() {
      this.$store.dispatch('login', "user name");
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: darkgrey;
  height: 60px;
  display: flex;
  padding: 10px;
  align-items: center;
}
.header-logo {
  flex-grow: 1;
}
.header-input {
  height: 30px;
  width: 290px;
  border-radius: 10px;
}
.submit-btn {
  width: 140px;
  height: 30px;
}
.auth-btns-group {
}
</style>