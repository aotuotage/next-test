import React, { Component } from "react";
import axios from 'axios'
export default class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            value: this.props.value
        }
        this.addcar = this.addcar.bind(this);
        const {onIncreaseClick} = this.props;
        this.onIncreaseClick = onIncreaseClick;
    }
    componentWillMount(){
        // let _this = this;
        // const promise =new Promise((resolve)=>{
        //     axios('../automobile/list.json').then(
        //         (res)=>{
        //             resolve(res.data)
        //         }
        //     )
        // })
        // promise.then(function(res){
        //     let newarr = res.map(function(item){
        //         return {...item,addnum: 0}
        //     })
        //     _this.setState({
        //         list: newarr 
        //     })
        // })
        this.setState({
            list:[
                {
                    "img":"images/shenzhen.jpg",
                    "name":"深圳一套房",
                    "number":"8000000",
                    "addnum": 0
                },
                {
                    "img":"images/shanghai.jpg",
                    "name":"上海别墅",
                    "number":"50000000",
                    "addnum": 0
                },    
                {
                    "img":"images/gaidao.jpg",
                    "name":"欧洲海岛",
                    "number":"110000000",
                    "addnum": 0
                },
                {
                    "img":"images/beijing.jpg",
                    "name":"北京四合院",
                    "number":"125000000",
                    "addnum": 0
                }
            ]
        })
    }
    addcar(i){
        let newaddnum = this.state.list[i].addnum+=1;
        let newmoney = this.state.list[i].number;
        let newprodata = this.state.value - (newaddnum*newmoney);
        this.onIncreaseClick(newprodata);
        let newlist = Object.assign([],this.state.list);
        this.setState({
            list:newlist
        })
    }
    reducecar(i){
        if(this.state.list[i].addnum > 0){
            let newaddnum = this.state.list[i].addnum-=1;
            let newmoney = this.state.list[i].number;
            let newprodata = this.state.value + (newaddnum*newmoney);
            this.onIncreaseClick(newprodata);
            let newlist = Object.assign([],this.state.list);
            this.setState({
                list:newlist
            })
        }
        return false;
    }
    addlist(){
        let arr;
        if(this.state.list.length){
        arr = this.state.list.map((item,i) =>{
            return (<div className="auto_list" key={i}>
                    <img src={item.img}/>
                    <h3>{item.name}<span className="price">￥{item.number}</span></h3>
                    <div className="add_button">
                        <div className="control">
                            <div className="subtraction" onClick={()=>this.reducecar(i)}>
                                -
                            </div>
                            <div className="addnum">{item.addnum}</div>
                            <div className="addition" onClick={()=>this.addcar(i)}>
                                +
                            </div>
                        </div>
                        <button className="increase" onClick={()=>this.addcar(i)}>加入购物车</button>
                    </div>
                </div>)
            })
        }
        return arr;
    }
    render() {
        return (
            <>         
                <div>{this.addlist()}</div>
            </> 
        );
    }
}