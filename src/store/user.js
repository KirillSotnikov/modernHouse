
import * as fb from 'firebase'

import User from './modules/user_help'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      console.log(state.user)
    }
  },
  actions: {
    async loginUser ({commit}, {email, password}) {
      try {
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.user.uid))
      } catch (error) {
        alert('This user is not defined')
        throw error
      }
    },
    logOutUser ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    checkUser (state) {
      return state.user !== null
    }
  }
}
