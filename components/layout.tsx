import * as React from 'react';
import Head from "next/head"
type Props = {
    title?: string
}

class Layout extends React.Component < Props > {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <meta name='viewport' content='width=device-width, initial-scale=1'/>
                    <meta charSet='utf-8'/>
                    <title>{this.props.title}</title>
                </Head>
                {this.props.children}
            </React.Fragment>
        )
    }
}
export default Layout;