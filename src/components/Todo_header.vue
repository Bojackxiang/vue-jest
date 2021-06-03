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
      <!-- NOTE:  下面的 login 相当于直接 调用 mutation 中的 login，username就是这边的 alex-->
      <button class="login" type="primary" @click="() => login('alex')">
        <!-- NOTE:  -->
        <span v-show="!isLoading">{{ username || "whatever" }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { LOGIN } from "../store/action_names";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "todo-header",
  props: ["add"],
  data() {
    return {
      inputValue: "",
      isLoading: false,
    };
  },
  // REVIEW <Vuex> 使用 map state 来获取 store 里面的数据
  computed: {
    ...mapState({
      username: (state) => state.username,
    }),
  },
  methods: {
    submit() {
      if (this.inputValue) {
        this.$emit("add", this.inputValue);
        this.inputValue = "";
      }
    },
    ...mapMutations({
      // NOTE 这边 直接对表 mutations，不用 走 actions
      login: "login",
    }),
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