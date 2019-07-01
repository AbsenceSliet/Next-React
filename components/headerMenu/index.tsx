import * as React from 'react'
import Link from "next/link"
import { Menu } from 'antd';
import './index.less'
interface NavItem {
    href: string,
    name: string,
    key:string
}
interface INavs{
    navs: Array<NavItem>,
    modes: string,
    defaultSelectedKeys?:string[]
}

export default class HeaderMenu extends React.Component<INavs>{
    public render(){
        const { navs, modes = 'horizontal', defaultSelectedKeys } = this.props
        return (
            < Menu className="header-menu" mode={modes} defaultSelectedKeys={defaultSelectedKeys} 
             >
                {navs.map((item) => (
                    <Menu.Item key={item.key} className="header-menu-item">
                        <Link href={item.href}>
                            <a>{item.name}</a>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        )
    }
}