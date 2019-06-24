import * as React from  "react"
import Link from "next/link"
import { Button, Layout, Avatar, Row,Col,Card, Divider} from 'antd';
import MemberLayout from '~components/member/MemberLayout/index'
import '~static/css/member/index.less'
class MemberIndex extends React.Component{
    public async componentDidMount(){
        
    }
    public render(){
        return (
            <MemberLayout>
                <Row className="member-item" gutter={10}>
                    <Col span={12}>
                        <Card bordered={false} className="profile-item">
                            <Row>
                                <Col span={8}>
                                    <Avatar  size={120} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                    
                                </Col>
                                <Col span={16} className="profile-item-right">
                                    <p>username</p>
                                    <Link href="/setting">
                                        <a className="setting-info">修改个人信息</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card bordered={false} className="profile-item">
                            <p>账户安全:<span>普通</span></p>
                            <p>绑定手机:<span>普通</span></p>
                            <p>绑定邮箱:<span>未绑定</span></p>
                        </Card>
                    </Col>
                </Row>
                <Divider className="profile-divider"/>
                <Row className="member-item" gutter={10}>
                    <Col span={12}>
                        <Card bordered={false} className="profile-item">
                            <Row>
                                <Col span={8}>
                                    <Avatar size={120} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                                </Col>
                                <Col span={16} className="profile-item-right">
                                    <p>待支付订单：<span>0</span></p>
                                    <Link href="/setting">
                                        <a>查看待支付订单</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card bordered={false} className="profile-item">
                            <Row>
                                <Col span={8}>
                                    <Avatar size={120} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                                </Col>
                                <Col span={16} className="profile-item-right">
                                    <p>待支付订单：<span>0</span></p>
                                    <Link href="/setting">
                                        <a>查看待支付订单</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className="member-item" gutter={10}>
                    <Col span={12}>
                        <Card bordered={false} className="profile-item">
                            <Row>
                                <Col span={8}>
                                    <Avatar size={120} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                                </Col>
                                <Col span={16} className="profile-item-right">
                                    <p>待支付订单：<span>0</span></p>
                                    <Link href="/setting">
                                        <a>查看待支付订单</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card bordered={false} className="profile-item">
                            <Row>
                                <Col span={8}>
                                    <Avatar size={120} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

                                </Col>
                                <Col span={16} className="profile-item-right">
                                    <p>待支付订单：<span>0</span></p>
                                    <Link href="/setting">
                                        <a>查看待支付订单</a>
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </MemberLayout>
        )
    }
}
export default MemberIndex