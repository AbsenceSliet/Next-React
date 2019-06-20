import * as React from "react"
import {  Layout } from 'antd';
import SiteHeader from '~components/siteHeader/index'
import BreadCurmb from '~components/breadCrumb/index'
import Sider from '~components/sider/index'
const breadmessage = [{
    name: '首页',
    href: '/'
}, {
    name: '列表',
    href: '/list'
}, {
    name: '个人中心',
}]

const siderinfos = [{
    name: '我的',
    icon: 'user',
    p_name:'user',
    subs: [{
        subname: '收藏',
        href: '/list'
    }]
}, {
    name: '列表',
    icon: 'meh',
    p_name: 'list',
    subs: [{
        subname: '商品列表',
        href: '/list'
    }]
}, {
    name: '订单中心',
    p_name:'orders',
    icon: 'meh',
    subs: [{
        subname: '我的订单',
        href: '/member/orders'
    }]
}]
class MemberLayout extends React.Component {
    public async componentDidMount() {

    }
    public render() {
        return (
            <div className="member-wrapper main-bg">
                <SiteHeader />
                <Layout.Content className="layout">
                    <BreadCurmb breadinfos={breadmessage} />
                    <Layout>
                        <Sider siderinfos={siderinfos} />
                        <Layout.Content>
                            {this.props.children}
                        </Layout.Content>
                    </Layout>
                </Layout.Content>
            </div>
        )
    }
}
export default MemberLayout