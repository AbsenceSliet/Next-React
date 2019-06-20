import App, {Container} from "next/app"
import React from "react"
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import VmcHeader from '~components/header/index.tsx'
import VmcFooter from '~components/footer/index.tsx'
import Router from 'next/router'
import NProgress from 'nprogress'
import { withRouter } from 'next/router' 
class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }
    public render() {
        Router.onRouteChangeStart = () => {
            NProgress.start()
        }
        Router.onRouteChangeComplete = () => NProgress.done()
        Router.onRouteChangeError = () => NProgress.done()
        const { Component, pageProps, router: { pathname }} = this.props
        return (
            <LocaleProvider locale={zh_CN}>
                <Container>
                    <div className="root">
                        <VmcHeader/>
                        <Component {...pageProps} />
                        <VmcFooter/>
                    </div>
                </Container>
            </LocaleProvider>
        )
    }
}

export default withRouter(MyApp)