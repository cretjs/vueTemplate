import Config from '../config'

export const loadingDefault = state => {
  if (state.loading) {
    return state.loading || Config.loading
  }
}