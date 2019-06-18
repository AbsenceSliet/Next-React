import * as React from 'react'
import Link from "next/link"
import { Menu,Input } from 'antd';

import HeaderMenu from '~components/headerMenu/index'
interface ISearch{
    menuInfo:any[]
}
export default class HeaderSearch extends React.Component<ISearch > {
    public state={
        searchsifocus:false
    }
    public headersearch: any = (e:any) =>{
        const {value} =  e.target
    }
    public searchOnFocus:any=() => {
        this.setState({
            searchsifocus:true
        })
    }
    public searchOnBlur:any=() => {
        this.setState({
            searchsifocus:false
        })
    }
    public render(){
        return (
            <div>
                <Input.Search onFocus={this.searchOnFocus} onChange={this.headersearch} onBlur={this.searchOnBlur }  size="large" placeholder="input search text" />
                {this.state.searchsifocus && <HeaderMenu navs={this.props.menuInfo} modes="vertical" />}
            </div>
        )
    }
}