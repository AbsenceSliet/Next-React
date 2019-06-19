import * as React from 'react'
import Link from "next/link"
import { Layout, Row, Col, Icon, Card, Empty, Menu, Button, message, Dropdown,Input } from 'antd';
import HeaderMenu from '~components/headerMenu/index'

import HeaderSearch from '~components/headerSearch/index'
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

    public render(){
        return(
            <section className="vmc-site-header">
                <Layout.Header className="layout">
                    <Row>
                        <Col span={1}><Icon type="code-sandbox" /></Col>
                        <Col span={17}>
                            <HeaderMenu navs={navs} />
                        </Col>
                        <Col span={6}>
                            <HeaderSearch menuInfo={navs} />
                        </Col>
                    </Row>
                </Layout.Header>
            </section>
        )
    }
}

