import {
    UPDATE_LOADING_STATUS,
} from './mutation-types'

export const updateLoading = ({ commit }, flag) => {
    console.log(flag);
    commit(UPDATE_LOADING_STATUS, flag)
}

