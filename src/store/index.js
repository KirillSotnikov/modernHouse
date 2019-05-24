import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import services from './modules/services'
import partners from './modules/partners'
import advantages from './modules/advantages'
import portfolio from './modules/portfolio'
import user_help from './modules/user_help'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    services,
    partners,
    advantages,
    portfolio,
    user_help,
    user
  }
})
