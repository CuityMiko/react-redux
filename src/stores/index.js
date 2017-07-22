/**
 * Store的主文件
 */
import { createStore } from 'redux'
import reducers from './reducers.js'
import finalCreateStore from './configureStore' // 引入store配置

let store = finalCreateStore(reducers)

export default store;