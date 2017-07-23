/**
 * userinfo的actions定义
 */
import { GETBASICINFO } from './constants.js'
import axios from 'axios'

// 获取基本数据
const fetchBasicInfo = (flag) => {
    return dispatch => {
        return axios.get('/data/basicinfo.json').then((res)=>{
            return res.data;
        }).then((data)=>{
            switch (flag) {
                case 'grade':
                    dispatch(basicinfo(flag,data.grade))
                    break;
                case 'subject':
                    dispatch(basicinfo(flag,data.subject))
                default:
                    break;
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
}

// 获取基础信息
export const basicinfo = (flag,result) =>{
    return {
        type:GETBASICINFO,
        result,
        flag
    }
}

/**
 * 获取基本信息数据
 * 这里的方法返回一个函数进行异步操作
 */
export function getBasicInfo(flag){
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(fetchBasicInfo(flag))
    }
}