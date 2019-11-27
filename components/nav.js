import Head from 'next/head'
import "../public/less/nav.less"

function Nav(){ 
    return (
        <>
            <Head>
                <title>马云模拟器</title>
                <meta charSet='utf-8' />
            </Head>
            <div className="navclass">
                <h3>余额：279,000,000,000</h3>
                <button type="button">购物车</button>
            </div>
        </> 
    )
}
export default Nav