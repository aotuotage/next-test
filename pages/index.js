import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import '../public/less/reset.less'
import '../public/less/index.less'
import Nav from './Nav'


import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

const Home = () => {
  return(
    <>
      <Nav/>
      <div className="indexpage"> 
          <div className="jackma">
              <div className="header_img"></div>
          </div>
      </div>
    </>
  )

}
Router.events.on('routeChangeStart',(...args)=>{
  console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})
export default Home