import * as React from 'react';
import {Button} from 'antd'
import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'
import "../../static/css/index.less"
type Props = {
    title?: string,
    userAgent: string
}

class App extends React.Component < Props > {
    // static async getInitialProps({req}) {
    //     const userAgent = req
    //         ? req.headers['user-agent']
    //         : navigator.userAgent
    //     return {userAgent}
    // }
    render() {
        console.log(this.props);
        return (
            <Layout title="Home | Next.js + TypeScript Example">
                <Button type='primary'>
                    kaksdkk</Button>
                <span className="themeColor">test</span>
                <Link href="/member">
                    <Button>个人中心</Button>
                </Link>
                <Link href="/list">
                    <Button>列表</Button>
                </Link>
                <Link href="/test">
                    <Button><a>test</a></Button>
                </Link>
                
            </Layout>
        )
    }
}
export default App;