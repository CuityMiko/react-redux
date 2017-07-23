/**
 * userinfo的reducer的定义
 */
import states from './states.js'
import { GETBASICINFO } from './constants.js'

export default function UserInfoOperate(state=states,action){
    switch(action.type){
        case GETBASICINFO:
            switch (action.flag) {
                case 'grade':
                    return Object.assign({},state,{ grade:action.result });
                case 'subject':
                    return Object.assign({},state,{ subject:action.result });
                default:
                    return state;
            }
        default:
            return state;
    }
}