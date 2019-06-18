import * as React from "react"
import Link from "next/link"
import {Button} from 'antd';
import axios from 'axios'
import {getdetail} from "../../constants/api"
interface Propsitem{
    detail:any
}
class Detail extends React.Component < Propsitem > {
    constructor(props){
        super(props)
    }
    static async getInitialProps(req){
        const {id } = req.query
        const detail = await  getdetail(id)
        const data  = detail.data
        return {detail:data}
    }
    public render() {
        return (
            <div className="wrapper">
                <Link href="/member">
                    <Button>个人中心</Button>
                </Link>
                <Link href="/">
                    <Button>首页</Button>
                </Link>
                <Link href="/list">
                    <Button>列表</Button>
                </Link>
                <div>
                    <h1>{this.props.detail.name}</h1>
                    <img src={this.props.detail.image.medium}/>
                </div>
            </div>
        )
    }
}
export default Detail