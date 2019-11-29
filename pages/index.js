import React, { Component } from "react";
import Link from 'next/link'
import Router from 'next/router'
import '../public/less/reset.less'
import '../public/less/index.less'
import Nav from '../components/nav'
import Automobile from '../components/Automobile'
import House from '../components/House'
import Piecemeal from '../components/Piecemeal'
import { createStore } from 'redux';
import { Provider,connect} from "react-redux";
 
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

// 定义counter组件
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showlist:1
    }
  }
  taplist(id){
    this.setState({
      showlist:id
    })
  }
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <>
        <Nav {...this.props}/>
        <div className="indexpage"> 
            <div className="jackma">
                <img className="header_img" src="images/jack-ma.jpg"/>
                <h3>马云模拟器</h3>
                {/* <div className="balance">
                    <button className="balance_baby">把钱存余额宝</button>
                    <span>每秒收益：200元</span>
                </div> */}
            </div>
            <div className="mall">
                <ul>
                  <li>商城：</li>
                  <li className={this.state.showlist==1?'li_on':''} onClick={()=>this.taplist(1)}>交通</li>
                  <li className={this.state.showlist==2?'li_on':''} onClick={()=>this.taplist(2)}>房产</li>
                  <li className={this.state.showlist==3?'li_on':''} onClick={()=>this.taplist(3)}>零碎</li>
                </ul>
            </div>
            {this.state.showlist==1?
              <Automobile {...this.props}/>:''
            }
             {this.state.showlist==2?
              <House {...this.props}/>:''
            }
            {this.state.showlist==3?
              <Piecemeal {...this.props}/>:''
            }
        </div>
      </>
    )
  }
}

//子组件传过来的值
let childrendata;
/*-----------具体通知描述及数据处理方法部分-------------*/
// Action通知及描述
const increaseAction = { type: 'reduce' }
// Reducer计算  基于原有state根据action得到新的state
function counter(state = { count: 279000000000}, action) {
  const count = state.count;

  switch (action.type) {
    case 'reduce'://如果接到action为increase的通知执行
      return { count: childrendata}
    default:
      return state//返回新的state
  }
}

/*-----------数据存储器部分-------------*/
// 根据reducer函数通过createStore()创建store(存储器)
const store = createStore(counter)

/*-----------映射方法及数据部分-------------*/
//  将state映射到Counter组件的props(数据)
function mapStateToProps(state) {
  return {
    value: state.count
  }
}
//  将action映射到Counter组件的props(方法)
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function (data) {
      childrendata = data;
      dispatch(increaseAction)//定义点击方法发送action
    }
  }
}
// 传入上面两个函数参数，将Counter组件变为App组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

const Home = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
export default Home