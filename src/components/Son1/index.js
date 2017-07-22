import React from 'react'
import { connect } from 'react-redux'

import './Son.css'

class Son extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { content1 }=this.props
        return (
            <div className='son'>
                <h3>子组件：</h3>
                <p>通过Props获取值：<strong>{ this.props.content}</strong></p>
                <p>通过Redux获取值：<strong>{ content1 }</strong></p>
            </div>
        )
    }
}

const getContent=(state)=>{
    return {
        content1:state.content
    }
}

export default connect(getContent)(Son)