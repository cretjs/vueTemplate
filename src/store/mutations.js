import {
    UPDATE_LOADING_STATUS,
} from './mutation-types'
export default {
  // loading flag
  [UPDATE_LOADING_STATUS] (state, flag) {
    state.loading = flag
  },
}
