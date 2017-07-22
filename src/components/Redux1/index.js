import React from 'react'
import { connect } from 'react-redux'
import { add,jian,chagecontent } from '../../stores/actions.js'

// 自定义组件
import Son1Component from '../Son1/'

class Redux1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'Redux的基本使用',
            txtnum:0,
            content:''
        }
    }
    changenum=(e)=>{
        this.setState({
            txtnum:e.target.value
        })
    }
    changecontent=(e)=>{
        this.setState(
            {
                content:this.refs.txtcontent.value
            }
        )
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    render(){
        const { num,add,jian,chagecontent } = this.props;
        return (
            <div>                
                <h3>{ this.state.title }</h3>
                <p>
                    <label htmlFor="txtcon">内容：</label> 
                    <input id="txtcon" ref="txtcontent" type="text" placeholder="请输入内容..." value={this.state.content} onChange={this.changecontent}/>
                    <button onClick={ ()=>chagecontent(this.state.content) }>改变</button>
                    <br/>
                    输入的内容是：{this.state.content}
                </p>
                <p>
                    <input type="number" value={this.state.txtnum} onChange={this.changenum}/>
                </p>
                <p>
                    当前数字为：{ this.state.txtnum }
                </p>
                <button onClick={ ()=>add(this.state.txtnum) }>+</button><span>{ num }</span><button onClick={ ()=>jian(this.state.txtnum) }>-</button>
                <p>
                    <Son1Component content={ this.state.content }></Son1Component>
                </p>
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

export default connect(mapStateToProps,{ add,jian,chagecontent })(Redux1);