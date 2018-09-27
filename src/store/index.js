import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import hello from './modules/hello'
Vue.use(Vuex)

var store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        hello,
    }
})

export default store