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