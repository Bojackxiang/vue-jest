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
    async login(ctx, username){
      console.log("ACTION")
      const req_username = await fakeRequest();
      ctx.commit(commit_login, req_username)
    }
  },
  mutations: {
    login (state, username) {
      console.log('MUTATION');
      state.username = username
    }
  }
})


const fakeRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('alex')
    }, 3000)
  })
  
}