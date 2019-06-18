import App, {Container} from "next/app"
import React from "react"
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import VmcHeader from '~components/header/index.tsx'
import VmcFooter from '~components/footer/index.tsx'
class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }
    public render() {
        const {Component, pageProps} = this.props
        return (
            <LocaleProvider locale={zh_CN}>
                <Container>
                    <div className="root">
                        <VmcHeader/>
                        <div className="layout"><Component {...pageProps} /></div>
                        <VmcFooter/>
                    </div>
                </Container>
            </LocaleProvider>
        )
    }
}

export default MyApp