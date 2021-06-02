import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const initialState = {
  username: null,
  isLogin: false,
  token: '', 
}

export const commit_login = 'login'

export default new Vuex.Store({
  state: initialState,
  actions: {
    login(ctx, username){
      console.log("ACTION")
      ctx.commit(commit_login, username)
    }
  },
  mutations: {
    login (state, username) {
      console.log('MUTATION');
      state.username = username
    }
  }
})

