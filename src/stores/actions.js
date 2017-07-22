/**
 * action的定义
 */
import { ADD,JIAN } from './constants.js'

export const add = (n) => {
    return {
        type: ADD,
        n:parseInt(n)
    }
}

export const jian = (n) => {
    return {
        type: JIAN,
        n:parseInt(n)
    }
}