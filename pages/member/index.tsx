import * as React from  "react"
import Link from "next/link"
import { Button, Layout} from 'antd';
import MemberLayout from '~components/MemberLayout/index'
class MemberIndex extends React.Component{
    public async componentDidMount(){
        
    }
    public render(){
        console.log(this.props,'sss')
        return (
            <MemberLayout>
                member page
            </MemberLayout>
        )
    }
}
export default MemberIndex