import * as React from  'react'
import { List, Table, Button, Row, Col, Avatar } from 'antd';

import Link from  'next/link'
import {getImage} from '~constants/api'
import  './index.less'
interface IOrderList {
    listdata:any
}
interface OrderHeader {
    name:string,
    span:number
}
let orderheader: Array<OrderHeader>;
orderheader = [{ name: '商品名称/规格',span:12},
    { name: '商品价格', span: 4 },
    { name: '商品数量', span: 4 },
    { name: '实付款', span: 4 }]

let dealorderstatus = function(ship,pay){
    let pays = { 0: '待支付', 1: '已支付', 3: '部分付款', 4: '部分退款', 5: '已退款' }
    let ships = { 0: '待发货', 1: '已发货', 2: '部分发货', 3: '部分退货', 4: '已退货', 5: '确认收货'  }
    let message:string;
    if (ship=='0' && pay=='0'){
        return(
            <Button size="small">待支付</Button>   
        )
    }
}

function OrderStatus(props:any):any{
    let { status, ship_status, pay_status } = props.orderstatus
    let message:any;
    let pays = { 0: '待支付', 1: '已支付', 3: '部分付款', 4: '部分退款', 5: '已退款' }
    let ships = { 0: '待发货', 1: '已发货', 2: '部分发货', 3: '部分退货', 4: '已退货', 5: '确认收货' }
    console.log(props,'-----111')
    if(status == 'active'){
        message = (
            <span className="order-status">
                <span>{pays[pay_status]}</span>
                <span>{ships[ship_status]}</span>
            </span>
        )
    }else{
        message = (<span className="order-status">已取消</span>)
    }
    return message
}
export default class OrderList extends React.Component<IOrderList>{
    public state = {
        sourceList:[]
    }
    constructor(props){
        super(props)
    }
    public getimage = async (images) => {
        let imagedata = await getImage({ images })
        console.log(imagedata.data.data.data[0])
        return imagedata.data.data.data[0]
    }
    componentDidMount(){
        this.predealorder()
    }
    public predealorder= ()=>{
        const { listdata } = this.props
        let order_group = listdata.data.order_items_group,
            order_list = listdata.data.order_list;
        for (let order in order_group ){
            
        }
        order_list.map(item => {
            item.products=listdata.data.order_items_group[item.order_id]
        })
        this.setState({
            sourceList: order_list
        })
    }
    
    public render(){
        return(
            <div className="order-container">
                <Row className="order-header">
                    <Col span={20}>
                        <Row>
                            {
                                orderheader.map(item => (
                                    <Col span={item.span} key={item.name}>{item.name}</Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col span={4}>订单状态及操作</Col>
                </Row>
                <List
                    dataSource={this.state.sourceList}
                    itemLayout="horizontal"
                    renderItem= {item=>(
                        <List.Item className="order-list-item">
                            <Row className="order-list-item-header" align="middle">
                                <Col span={4}>{item.createtime}</Col>
                                <Col span={6}>订单号:{item.order_id}</Col>
                                <Col span={10}></Col>
                                <Col span={4} >
                                    <OrderStatus orderstatus={item} />
                                </Col>
                            </Row>
                            <Row align="middle" style={{padding:'15px'}}>
                                <Col span={20}>
                                    {
                                        item.products.map(product => (
                                            <Row key={product.product_id} align="middle">
                                                <Col span={12}>
                                                    <List.Item.Meta avatar={<Avatar src={this.getimage(product.image_id)}  />}
                                                        title={product.name} description={product.spec_info} />
                                                </Col>
                                                <Col span={4} >{product.price}</Col>
                                                <Col span={4} >X{product.nums}</Col>
                                                <Col span={4} >{product.amount}</Col>
                                            </Row>
                                        ))
                                    }
                                </Col>
                                <Col span={4}>
                                   
                                </Col>
                            </Row>
                            
                        </List.Item>    
                    )}
                />
            </div>
        )
    }
}