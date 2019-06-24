import * as React from 'react';
import { Breadcrumb } from 'antd';
import './index.less'
interface IBreadcurmbinfo {
    name:string,
    href?:string
}
interface IBreadcurmb{
    breadinfos: IBreadcurmbinfo[],
    separator?:string
}

export default class BreadCurmb extends React.Component < IBreadcurmb > {
    public render(){
        const { breadinfos, separator='>'} = this.props
        return (
            <Breadcrumb className="breadcumb">
                {breadinfos.map(item=>(
                    <Breadcrumb.Item key={item.name}>
                        {item.href ? (<a href={item.href}>{item.name}</a>):(<span>{item.name}</span>)}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        )
    }
}