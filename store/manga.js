// State object
export const state = () => ({
  mal_id: ''
})
// Getter functions
export const getters = {}
export const mutations = {
  SET_MAL_ID(state, payload) {
    state.mal_id = payload
  }
}
// Actions
export const actions = {
  fetchData({ commit }, payload) {
    commit('SET_MAL_ID', payload.mal_id)
  },
  setMal_Id({ commit }, payload) {
    commit('SET_MAL_ID', payload)
  }
}