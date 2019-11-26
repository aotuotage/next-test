import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import runtimeConfig from 'next-server/config';
// const { linkPrefix } = getConfig.runtimeConfig();
console.log(runtimeConfig)
const Home = () => {
  return(
    <>
      <div>我是首页</div>
      <div>
        <Link href="/xiaojiejie?name=波多野结衣" passHref as={`${runtimeConfig}/xiaojiejie?name=波多野结衣`}><a>选波多野结衣</a></Link><br/>
        <Link href="/xiaojiejie?name=苍井空" passHref as={`${runtimeConfig}/xiaojiejie?name=苍井空`}><a>选苍井空</a></Link>
      </div>
    </>
  )

}
Router.events.on('routeChangeStart',(...args)=>{
  console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})
export default Home