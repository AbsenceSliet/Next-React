import * as React from  'react'
import Link from "next/link"
import { Layout, Badge, Row, Col, Icon, Card,Empty, Menu, Button, message, Dropdown} from 'antd';
import HeaderMenu from '~components/headerMenu/index'

import './index.less'
// interface NavItem {
//     href:string,
//     name:string
// }
// let navs: Array<NavItem>;

let navs = [{
    href: 'https://baidu.com',
    name: '百度'
}, {
        href: 'https://baidu.com',
        name: 'VMC商城'
    }]
let usernavs = [{
    href: 'https://baidu.com',
    name: '消息通知'
}, {
        href: 'https://baidu.com',
        name: '我的订单'
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
            <Menu>
                <Menu.Item >
                    <Card>
                        <Empty description="购物车中还没有商品，赶紧选购吧"></Empty>
                    </Card>
                </Menu.Item>
            </Menu >
        )
        return(
            <div className="vmcHeader ">
                <div className="layout header-container">
                    <Row>
                        <Col span={16}>
                            <HeaderMenu navs={navs}/>
                        </Col>
                        <Col span={8} className="header-item">
                            <Dropdown overlay={<HeaderMenu navs={userMenu} modes="vertical" />}>
                                <a className="ant-dropdown-link header-drop-link" href="#">
                                    username <Icon type="down" />
                                </a>
                            </Dropdown>
                            <HeaderMenu navs={usernavs} />
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