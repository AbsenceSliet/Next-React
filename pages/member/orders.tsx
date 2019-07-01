import * as React from "react"
import MemberLayout from '~components/member/MemberLayout/index'
import { Tabs} from  'antd'
import HeaderMenu from '~components/headerMenu/index'
import OrderList from  '~components/member/orderList/index'
import  '~static/css/member/orders.less'
import mockdata from '~mock/all_order.js'
console.log(mockdata, 'mockdata')

const {TabPane} = Tabs;
interface TabsItem{
    name:string,
    href:string,
    key:string
}
let tabs: Array<TabsItem >;
tabs=[{
    name:'全部',
    key:'all',
    href:''
    },{
        name: '待支付',
        href: '',
        key:'unpay'
    }, {
        name: '待发货',
        href: '',
        key:'delivery'
    }, {
        name: '待收货',
        href: '',
        key:'receipt'
    }, {
        name: '已完成',
        href: '',
        key:'finish'
    }, {
        name: '已取消',
        href: '',
        key:'cancel'
    }]

export default class Orders extends React.Component {
    public state={
        defaultSelectedKeys:['all']
    }
    public tabChange =key =>{
        console.log(key)
    }
    async componentDidMount(){
    }
    public render(){
        return (
            <MemberLayout >
                <div className="orders">
                    <h1 className="orders-header">
                        我的订单<small>请谨防钓鱼链接或诈骗电话</small>
                    </h1>
                    <div className="orders-list">
                        <HeaderMenu navs={tabs} defaultSelectedKeys={this.state.defaultSelectedKeys}  />
                        <OrderList listdata={mockdata.order} />
                    </div>
                </div>
            </MemberLayout>
        )
    }
}