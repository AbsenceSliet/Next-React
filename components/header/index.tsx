import * as React from  'react'
import Link from "next/link"
import { Layout, Row, Col, Icon, Card,Empty, Menu, Button, message, Dropdown} from 'antd';

import './index.less'
interface NavItem {
    href:string,
    name:string
}
let navs: Array<NavItem>;

navs = [{
    href: 'https://baidu.com',
    name: '百度'
}, {
        href: 'https://baidu.com',
        name: 'VMC商城'
    }]

interface MenuUser {
    href: string,
    name: string
}
let userMenu: Array<MenuUser> = [{ href: 'http://www.alipay.com/', name: '1st menu item' }, { href: 'http://www.alipay.com/', name: '2st menu item' }, { href: 'http://www.alipay.com/', name: '3st menu item' }]
class VmcHeader extends React.Component{
    public render(){
        const userdrop: any = (
            <Menu>
                {userMenu.map(item => (
                    <Menu.Item key={item.name} className="header-menu-item">
                        <Link href={item.href}>
                            <a>{item.name}</a>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu >
        )
        const carTip:any =(
            <Card>
                <Empty description="购物车中还没有商品，赶紧选购吧"></Empty>
            </Card>
        )
        return(
            <div className="vmcHeader ">
                <div className="layout header-container">
                    <Row>
                        <Col span={16}>
                            <Menu mode="horizontal" className="header-menu">
                                {navs.map((item)=>(
                                    <Menu.Item key={item.name} className="header-menu-item">
                                    <Link href={item.href}>
                                        <a>{item.name}</a>
                                    </Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Col>
                        <Col span={8} className="header-item">
                            <Dropdown overlay={userdrop}>
                                <a className="ant-dropdown-link header-drop-link" href="#">
                                    username <Icon type="down" />
                                </a>
                            </Dropdown>
                            <Menu mode="horizontal" className="header-menu">
                                <Menu.Item className="header-menu-item">
                                    <a>消息通知</a>
                                </Menu.Item>
                                <Menu.Item className="header-menu-item">
                                    <a>我的订单</a>
                                </Menu.Item>
                            </Menu>
                            <Dropdown overlay={carTip} placement="bottomRight">
                                <Button icon="shopping-cart" className="header-car" >
                                购物车(0)
                                </Button>
                            </Dropdown>      
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default VmcHeader