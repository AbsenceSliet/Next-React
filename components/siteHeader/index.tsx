import * as React from 'react'
import Link from "next/link"
import { Layout, Row, Col, Icon, Card, Empty, Menu, Button, message, Dropdown,Input } from 'antd';

import './index.less'
interface NavItem {
    href: string,
    name: string
}
let navs: Array<NavItem>;

navs = [{
    href: 'https://baidu.com',
    name: '百度'
}, {
    href: 'https://baidu.com',
    name: 'VMC商城'
}]
export default class SiteHeader extends React.Component{
    
    public headersearch :any = (value:any) =>{
        console.log(`this is ${this}`)
    }

    public render(){
        return(
            <Layout className="vmc-site-header">
                <Layout.Header className="layout ">
                    <Row>
                        <Col span={1}><Icon type="code-sandbox" /></Col>
                        <Col span={17}>
                            <Menu mode="horizontal" className="site-header-menu">
                                {navs.map((item) => (
                                    <Menu.Item key={item.name} className="header-menu-item">
                                        <Link href={item.href}>
                                            <a>{item.name}</a>
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Col>
                        <Col span={6}>
                            <Input.Search onChange={this.headersearch} size="large" placeholder="input search text" />
                        </Col>
                    </Row>
                </Layout.Header>
            </Layout>
        )
    }
}