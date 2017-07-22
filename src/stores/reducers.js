/**
 * reducer的定义
 */
import states from './states.js'
import { ADD,JIAN,CHANGECONTENT } from './constants.js'

export default function JiSuan(state=states,action){
    switch (action.type) {
        case ADD: // 加
            return Object.assign({},state,{ num:state.num+action.n })
        case JIAN: // 减
            return Object.assign({},state,{ num:state.num-action.n }) 
        case CHANGECONTENT: // 改变内容
            return Object.assign({},state,{ content:action.content }) 
        default:
            return state;
    }
}