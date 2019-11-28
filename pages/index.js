import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import '../public/less/reset.less'
import '../public/less/index.less'
import Nav from '../components/nav'
import Automobile from '../components/Automobile'
import { createStore } from 'redux';
import { Provider } from "react-redux";



import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

const Home = () => {
  return(
    <>

        <Nav/>
        <div className="indexpage"> 
            <div className="jackma">
                <div className="header_img"></div>
                <h3>马云模拟器</h3>
                <div className="balance">
                    <button className="balance_baby">把钱存余额宝</button>
                    <span>每秒收益：200元</span>
                </div>
            </div>
            <div className="mall">
                <ul>
                  <li>商城：</li>
                  <li className="li_on">
                    汽车
                  </li>
                  <li>房产</li>
                  <li>零碎</li>
                </ul>
            </div>
            <Automobile/>
        </div>
  
    </>
  )
}

export default Home