import Head from 'next/head'
import "../public/less/nav.less"
import React, { Component } from "react";

class Nav extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <>
                <Head>
                    <title>马云模拟器</title>
                    <meta charSet='utf-8' />
                </Head>
                <div className="navclass">
                    <h3>余额：{value}</h3>
                    {/* <button type="button">购物车</button> */}
                </div>
            </> 
        )
    }
}
export default Nav