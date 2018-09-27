import Vue from 'vue'
// const isProduction = process.env.NODE_ENV === 'production'
const SERVER = {
    ROOT_URL: '',
}
// 构造get promise
const get = (url, options) => {
    return Vue.axios.get(url, options)
}
// 构造 jsonp promise
const jsonp = (url, options) => {
    return Vue.axios.jsonp(url, options)
}

/**
 * 获取list
 * @param  {Number} count
 * @return {Promise}
 */
const getList = (count) => {
    let url = SERVER.ROOT_URL + '/news/index'
    return Vue.axios.get(url,{count:count})
}
const getListJsonp = (count) => {
    let url = SERVER.ROOT_URL + '/news/jsonp'
    return Vue.axios.jsonp(url,{count:count})
}


export {
    get,
    jsonp,
    getList,
    getListJsonp
}
