import Vue from 'vue'
import Vuex from 'vuex'
import notify from './modules/notify'
import auth from './modules/auth'
import post from './modules/post'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  modules: {
    post,
    notify,
    auth,
  },
  strict: true,
})
