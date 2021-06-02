import Vuex from 'vuex'
import Vue from 'vue'
import {LOGIN} from './action_names'

Vue.use(Vuex)

const initialState = {
  username: null,
  isLogin: false,
  token: '',
}

export default new Vuex.Store({
  state: initialState,
  actions: {
    async login(ctx, username) {
      console.log("ACTION")
      const req_username = await fakeRequest();
      ctx.commit(LOGIN, req_username)
    }
  },
  mutations: {
    async login(state, username) {
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