export const state = () => ({
  title: 'AAA'
})

export const mutations = {
  SET_TITLE(state, newVal) {
    state.title = newVal
  }
}
