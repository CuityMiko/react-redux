/**
 * Store的主文件
 */
import { createStore,combineReducers } from 'redux'
import indexreducers from './reducers.js'
import userinforeducers from './userinfo/reducers.js'
import finalCreateStore from './configureStore' // 引入store配置

let reducers = combineReducers({indexreducers,userinforeducers})

let store = finalCreateStore(reducers)

export default store;