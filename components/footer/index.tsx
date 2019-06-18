import * as React from 'react'
import Link from "next/link"
import './index.less'
import {Row, Col,BackTop,Layout} from  'antd'
const {Footer} = Layout
export default class VmcFooter extends  React.Component{
    public render(){
        return(
            <Footer className="vmcFooter">
                <div className="layout">
                    vmc footer
                </div>
            </Footer>
        )
    }
}