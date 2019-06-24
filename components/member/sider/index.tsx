import * as React from 'react';
import {Layout,Menu,Icon} from 'antd'
import Link from 'next/link'
import './index.less'
import {withRouter} from  'next/router'
interface ISubiItem{
    subname:string,
    href:string
}
interface ISiderItem{
    icon:string,
    name:string,
    subs?: ISubiItem[],
    p_name:string,
}
interface ISiderProps{
    siderinfos: ISiderItem[],
    router:any
}
 class Sider extends React.Component < ISiderProps > {
    public state={
        current:'',
        defaultOpenKeys: []
    }
     public componentWillMount(){
         const { siderinfos, router: { pathname } } = this.props
         let defaultopenkeys = []
         siderinfos.filter(item => {
             if (item.subs) {
                 item.subs.filter(val => {
                     val.href == pathname ? defaultopenkeys.push(item.p_name) : defaultopenkeys
                 })
             }
         })
         this.setState({
             current: pathname,
             defaultOpenKeys: defaultopenkeys
         })
     }
    public componentDidMount(){
        
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
     public onOpenChange = openkeys =>{
         console.log(openkeys)
        //  this.setState({
        //     defaultOpenKeys: openkeys
        //  })
     }
    public  render(){
        const { siderinfos}  = this.props
        
        return (
            <Layout.Sider className="sider-wrapper">
                <header>
                    <Icon type="user" />
                    <span>我的商城</span>
                </header>
                <Menu defaultOpenKeys={this.state.defaultOpenKeys} onOpenChange={this.onOpenChange} selectedKeys={[this.state.current]} onClick={this.menuSelect} mode="inline" className="sider-menu">
                    {siderinfos.map(item=>(
                        item.subs ? (
                            <Menu.SubMenu className="sider-submenu" key={item.p_name} title={<span><Icon type={item.icon} />{item.name}</span>}>
                            {item.subs.map(val=>(
                                <Menu.Item key={val.href}>
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
export default withRouter(Sider)