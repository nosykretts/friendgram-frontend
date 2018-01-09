import axios from 'axios'
import * as types from '../mutation-types'

const state = {
  posts: [],
  modalVisible: false,
}

const getters = {
  posts: state => state.posts,
  modalVisible: state => state.modalVisible,
}

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/posts')
        .then(({ data }) => {
          commit(types.getAllPostSuccess, {
            posts: data.data,
          })
          resolve()
        })
        .catch((err) => {
          console.error(err.response.data.message)
          reject(err)
        })
    })
  },
  createPost({ commit }, { caption, file }) {
    const formData = new FormData()
    formData.append('newPhoto', file)
    formData.append('caption', caption)
    axios
      .post('/posts', formData)
      .then(({ data }) => {
        commit(types.createPostSucess, {
          post: data.data,
        })
        commit('hideModal')
      })
      .catch((err) => {
        console.error(err.response.data.message)
      })
  },
  deletePost({ commit }, { postId }) {
    axios
      .delete(`/posts/${postId}`)
      .then(({ data }) => {
        commit(types.deletePostSucess, {
          // eslint-disable-next-line no-underscore-dangle
          postId: data.data._id,
        })
      })
      .catch((err) => {
        console.error(err.response.data.message)
      })
  },
  updateCaption({ commit }, { postId, caption }) {
    axios
      .put(`/posts/${postId}/updatecaption`, {
        caption,
      })
      .then(({ data }) => {
        commit(types.updatePostCaptionSuccess, {
          post: data.data,
        })
      })
      .catch((err) => {
        console.error(err.response.data.message)
      })
  },
  createComment({ commit }, { text, postId }) {
    axios
      .post(`/posts/${postId}/comments`, {
        text,
      })
      .then(({ data }) => {
        commit(types.createCommentSuccess, {
          postId,
          comment: data.data,
        })
      })
      .catch((err) => {
        console.error(err.response.data.message)
      })
  },
}

const mutations = {
  [types.getAllPostSuccess](state, { posts }) {
    state.posts = posts
  },
  [types.createPostSucess](state, { post }) {
    state.posts = [post, ...state.posts]
  },
  [types.deletePostSucess](state, { postId }) {
    // eslint-disable-next-line no-underscore-dangle
    state.posts = state.posts.filter(oldPost => oldPost._id !== postId)
  },
  [types.updatePostCaptionSuccess](state, { post }) {
    state.posts = state.posts.map((oldPost) => {
      // eslint-disable-next-line no-underscore-dangle
      if (oldPost._id === post._id) {
        return {
          ...oldPost,
          caption: post.caption,
        }
      }
      return oldPost
    })
  },
  [types.createCommentSuccess](state, { postId, comment }) {
    state.posts = state.posts.map((post) => {
       // eslint-disable-next-line no-underscore-dangle
      if (post._id === postId) {
        post.comments.push(comment)
      }
      return post
    })
  },
  showModal(state) {
    state.modalVisible = true
  },
  hideModal(state) {
    state.modalVisible = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
