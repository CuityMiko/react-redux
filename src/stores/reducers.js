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