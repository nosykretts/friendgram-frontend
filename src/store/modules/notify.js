const state = {
  notify: {
    message: '',
    type: '',
    rand: '',
  },
}

const getters = {
  notify: state => state.notify,
}

const mutations = {
  info(state, message) {
    state.notify = {
      message,
      type: 'info',
    }
  },
  success(state, message) {
    state.notify = {
      message,
      type: 'success',
    }
  },
  warning(state, message) {
    state.notify = {
      message,
      type: 'warning',
    }
  },
  error(state, message) {
    state.notify = {
      message,
      type: 'error',
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
