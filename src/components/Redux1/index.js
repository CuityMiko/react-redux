import React from 'react'
import { connect } from 'react-redux'
import { add,jian } from '../../stores/actions.js'

class Redux1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'Redux的基本使用',
            txtnum:0
        }
    }
    changenum=(e)=>{
        this.setState({
            txtnum:e.target.value
        })
    }
    render(){
        const { num,add,jian } = this.props;
        return (
            <div>                
                <h3>{ this.state.title }</h3>
                <p>
                    <input type="number" value={this.state.txtnum} onChange={this.changenum}/>
                </p>
                <p>
                    当前数字为：{ this.state.txtnum }
                </p>
                <button onClick={ ()=>add(this.state.txtnum) }>+</button><span>{ num }</span><button onClick={ ()=>jian(this.state.txtnum) }>-</button>
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