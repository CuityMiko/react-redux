### 通过creact-react-app脚手架快速创建项目并实现react + redux 的基本使用
+ 1.安装 redux、react-redux
```
npm i redux react-redux -S
```
+ 2.创建stores目录
+ 3.在stores目录中创建：
-   states.js ： 状态的保存
-   actions.js : antions的定义
-   reducers.js : reducer的定义
-   constants.js : 变量的定义
-   index.js : store的主文件
-   configureStore.js : Store的配置，中间件的配置文件
-   等六个文件
- states.js
```javascript
/**
 * state的定义
 */
export default{
    num:0
}
```
- constants.js
```javascript
/**
 * 基本变量名的常量属性的配置
 */
export const ADD = 'add' // 加
export const JIAN = 'jian' // 减
```
- actions.js
```javascript
/**
 * action的定义
 */
import { ADD,JIAN } from './constants.js'

export const add = () => {
    return {
        type: ADD
    }
}

export const jian = () => {
    return {
        type: JIAN
    }
}
```
- reducers.js
```javascript
/**
 * reducer的定义
 */
import states from './states.js'
import { ADD,JIAN } from './constants.js'

export default function JiSuan(state=states,action){
    switch (action.type) {
        case ADD: // 加
            return Object.assign({},state,{ num:state.num+1 })
        case JIAN: // 减
            return Object.assign({},state,{ num:state.num-1 }) 
        default:
            return state;
    }
}
```
- configureStore.js
```javascript
/**
 * store配置，中间件的使用
 */
// redux-thunk 支持 dispatch function，并且可以异步调用它
import thunk from 'redux-thunk' 
// 引入redux createStore、中间件及compose 
import { createStore, applyMiddleware, compose } from 'redux' 

// 创建一个中间件集合
const middleware = [thunk]

// 利用compose增强store，这个 store 与 applyMiddleware 一起使用
const finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore)

export default finalCreateStore
```
- index.js
```javascript
/**
 * Store的主文件
 */
import { createStore } from 'redux'
import reducers from './reducers.js'
import finalCreateStore from './configureStore' // 引入store配置

let store = finalCreateStore(reducers)

export default store;
```
+ 4.在项目入口文件中的使用:
```javascript
// Redux & Store
import { Provider } from 'react-redux'
import Store from './stores/'

ReactDOM.render(
    <Provider store={ Store }>
        <App />
    </Provider>, 
    document.getElementById('root'));
```
+ 5.在组件中的使用：
```javascript
import React from 'react'
import { connect } from 'react-redux'
import { add,jian } from '../../stores/actions.js'

class Redux1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'Redux的基本使用'
        }
    }
    render(){
        const { num,add,jian } = this.props;
        return (
            <div>
                <h3>{ this.state.title }</h3>
                <button onClick={ add }>+</button><span>{ num }</span><button onClick={ jian }>-</button>
            </div>
        )
    }
}

// 将state属性映射到props上
const mapStateToProps=(state)=>{
    return {
        num:state.num
    }
}

export default connect(mapStateToProps,{ add,jian })(Redux1);
```

### v1版本引入redux-devtools可以在项目中进行调试和管理redux

### v2版本通过redux初始化数据以及异步动态加载数据