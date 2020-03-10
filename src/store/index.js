import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    words: null
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setWords(state, words) {
      state.words = words
    },
    updateWord(state, {word, key}) {
      word.isLiked = !word.isLiked
      state.wordsRef.doc(key).update(word)
    },
    removeWord(state, key) {
      state.wordsRef.doc(key).delete()
    }
  },
  actions: {
    addNewWord(context, act1) {
      context.commit('addNewWord', act1)
    },
    setUser(context, user) {
      context.commit('setUser', user)
    },
    setWords(context, words) {
      context.commit('setWords', words)
    },
    updateWord(context, {word, key}) {
      context.commit('updateWord', {word, key})
    },
    removeWord(context, key) {
      context.commit('removeWord', key)
    }
  }
})
