import * as React from  "react"
import Link from "next/link"
import { Button, Layout} from 'antd';
import SiteHeader from '~components/siteHeader/index'
import BreadCurmb from '~components/breadCrumb/index'

const breadmessage=[{
    name:'首页',
    href:'/'
},{
    name:'列表',
    href:'/list'
},{
    name:'个人中心',
}]

class MemberIndex extends React.Component{
    public render(){
        return (
            <div className="member-wrapper main-bg">
                <SiteHeader />
                <Layout.Content className="layout">
                    <BreadCurmb breadinfos={breadmessage}/>
                    <Layout>
                        <Layout.Sider>
                            slider
                        </Layout.Sider>
                            <Layout.Content>
                                content
                        </Layout.Content>
                    </Layout>
                </Layout.Content>
            </div>
        )
    }
}
export default MemberIndex