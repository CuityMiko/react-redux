/**
 * 项目初始化数据使用Redux进行管理
 */
import React from 'react'
import { connect } from 'react-redux'
import './Redux2.css'

import { getBasicInfo } from '../../stores/userinfo/actions.js'

class Redux2 extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        // 页面加载完毕的时候可以异步初始化数据
        const { getBasicInfo }=this.props;
        getBasicInfo('grade')
    }
    render(){
        const { news,grade,subject,getBasicInfo }=this.props;
        return (
            <div>
                <h3>一、获取本地数据</h3>
                <ol>
                    {
                        news.map((item,index)=>{
                            return <li key={index}><a href={item.url} target="_brank">{item.title}</a></li>
                        })
                    }
                </ol>
                <hr/>
                <h3>二、异步获取数据</h3>
                 <p>
                    <button onClick={ ()=>getBasicInfo('grade') }>获取班级数据</button> <button onClick={ ()=>getBasicInfo('subject') }>获取科目数据</button>
                    <div className="basicdata">
                        <div className="basicitem">
                            <strong>班级数据</strong>
                            <ol>
                                {
                                    grade.map((item,index)=>{
                                        return <li key={ index }>{ item.name }</li>
                                    })
                                }
                            </ol>
                        </div>
                        <div className="basicitem">
                            <strong>科目数据</strong>
                            <ol>
                                {
                                    subject.map((item,index)=>{
                                        return <li key={ item.id }>{ item.name }</li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </p> 
            </div>
        )
    }
}

const getUserinfos=(state)=>{
    return {
        news:state.userinforeducers.news,
        grade:state.userinforeducers.grade,
        subject:state.userinforeducers.subject
    }
}

export default connect(getUserinfos,{ getBasicInfo })(Redux2)