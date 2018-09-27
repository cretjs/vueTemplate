import * as types from '../mutation-types'
import {
    getList
} from '@/api/index'

// initial state
const state = {
    list: [],
    count:1
}
state.default = {...state}

const getters = {
    // list长度
    hasMore(state) {
        return state.list.length
    },
}

// actions
const actions = {
    fetchList({state,commit,dispatch,rootState},payload) {
        if (rootState.loading) {
            return
        }
        const param = [
            state.count,
        ]

        dispatch('updateLoading', true,{root:true})
        return getList(...param).then((body) => {
            console.log(body);
            let list = state.list || []
            list.push(...body.list)
            dispatch('updateLoading', false,{root:true})
            commit(types.UPDATE_LIST, list)
        })
    },
    changeCount(context) {
        context.commit(types.UPDATE_COUNT, 1)
    },
}

// mutations
const mutations = {
    // params
    [types.UPDATE_LIST](state, list) {
        state.list = list
    },
    [types.UPDATE_COUNT](state, count) {
        state.count = count + 1
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
