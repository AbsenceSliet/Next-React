import * as React from "react"
import Link from "next/link"
import {Button} from 'antd';
import {getlist} from "../../constants/api"
type Props = {
    list:any[]
}
class ListIndex extends React.Component<Props> {
    constructor(props) {
        super(props)
    }
    static async getInitialProps(req){
        const res = await getlist()
        return {list: res.data}
    }
    public render() {
        return (
            <div className="wrapper">
                <Link href="/member">
                    <Button>个人中心页面</Button>
                </Link>
                <ul>
                    {
                        this.props.list.map((item)=>(
                            <li key={item.show.id}>
                                <Link as={`/detail/${item.show.id}`} href={`/list/detail/?id=${item.show.id}`}>
                                    <h1>{item.show.name}</h1>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
// ListIndex.getInitialProps = async({req}) => {
//     const res = await getlist()
//     // const json = await res.json()
//     return {list: res}
// }
export default ListIndex