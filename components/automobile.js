import { withRouter} from 'next/router'
import axios from 'axios'
const Automobile =({list})=>{ 
    console.log({list})
    return (
        <>
            <div className="auto_list">
                <img src="images/lafa.jpg"/>
                <h3>拉法<span className="price">￥7000000</span></h3>
                <div className="add_button">
                    <div className="control">
                        <div className="subtraction">
                            -
                        </div>
                        <div className="addnum">0</div>
                        <div className="addition">
                            +
                        </div>
                    </div>
    <div>{list}</div>
                    <button className="increase">加入购物车</button>
                </div>
            </div>
        </> 
    )
}
Automobile.getInitialProps = async ()=>{
    console.log(11)
    const promise =new Promise((resolve)=>{
            axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
                (res)=>{
                    console.log('远程数据结果：',res)
                    resolve(res.data.data)
                }
            )
    })
    return await promise
}
export default withRouter(Automobile)