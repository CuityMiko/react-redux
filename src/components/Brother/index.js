import React from 'react'
import { connect } from 'react-redux'
import './Brother.css'

class Brother extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {content} =this.props;
        return (
            <div className="brother">
                <h3>兄弟组件</h3>
                <p>通过Redux获取值：<strong>{ content }</strong></p>
            </div>
        )
    }
}
const getContent=(state)=>{
    return {
        content:state.content
    }
}
export default connect(getContent)(Brother)