import * as React from  "react"
import Link from "next/link"
import {Button,Layout} from 'antd';
import SiteHeader from '~components/siteHeader/index'

class MemberIndex extends React.Component{
    public render(){
        return (
            <div className="member-wrapper">
                <Layout className="layout">
                    <SiteHeader></SiteHeader>
                </Layout>
            </div>
        )
    }
}
export default MemberIndex