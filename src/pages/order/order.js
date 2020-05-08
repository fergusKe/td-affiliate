import React from 'react'
import { Tabs, Menu, message, Card, Col, Row, Timeline, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined, NotificationOutlined, BarChartOutlined } from '@ant-design/icons'
import OrderTable from './order-table'
import OrderBouns from './order-bonus'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

function callback() {
  console.log(message)
}

const { TabPane } = Tabs

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      上月
    </Menu.Item>
  </Menu>
)

class Order extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="9">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card title="訂單總覽" bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <OrderTable />
                  </Col>
                </Card>
              </Col>
            </Row>
          </div>
        </AdminLayout>
      </div>
    )
  }
}

export default Order
