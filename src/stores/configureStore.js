/**
 * store配置，中间件的使用
 */
// redux-thunk 支持 dispatch function，并且可以异步调用它
import thunk from 'redux-thunk' 
// 引入redux createStore、中间件及compose 
import { createStore, applyMiddleware, compose } from 'redux' 
// 引入DevTools调试组件
import DevTools from '../js/reduxDevtools.js' 
// 创建一个中间件集合
const middleware = [thunk]

// 利用compose增强store，这个 store 与 applyMiddleware 一起使用
const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument()
)(createStore)

export default finalCreateStore