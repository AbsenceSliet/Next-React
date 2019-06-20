import * as React from 'react';
import {Layout,Menu,Icon} from 'antd'
import Link from 'next/link'
import './index.less'

interface ISubiItem{
    subname:string,
    href:string
}
interface ISiderItem{
    icon:string,
    name:string,
    subs?: ISubiItem[]
}
interface ISiderProps{
    siderinfos: ISiderItem[]
}
export default class Sider extends React.Component < ISiderProps > {
    public state={
        current:''
    }
    public componentDidMount(){
        const { siderinfos } = this.props
        let infos = [] 
        // siderinfos.map(item=>{
        //     if(item.subs){
        //         infos.push(item.name)
        //         this.setState({
        //             openKeys: infos
        //         })
        //     }
        // })
    }
    public menuSelect = e =>{
        this.setState({
            current:e.key
        })
    }
    public  render(){
        const {siderinfos}  = this.props
        return (
            <Layout.Sider className="sider-wrapper">
                <header>
                    <Icon type="user" />
                    <span>我的商城</span>
                </header>
                <Menu selectedKeys={[this.state.current]} onClick={this.menuSelect} mode="inline" className="sider-menu">
                    {siderinfos.map(item=>(
                        item.subs ? (
                        <Menu.SubMenu className="sider-submenu" key={item.name} title={<span><Icon type={item.icon} />{item.name}</span>}>
                            {item.subs.map(val=>(
                                <Menu.Item key={val.subname}>
                                    <Link href={val.href}><a>{val.subname}</a></Link>
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>) : (<Menu.Item>
                            <span>{item.name}</span>
                        </Menu.Item>)
                    ))}  
                </Menu>
            </Layout.Sider>
        )
    }
}