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