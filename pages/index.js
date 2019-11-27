import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import '../public/less/reset.less'
import '../public/less/index.less'
import Nav from './Nav'

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
export default Home