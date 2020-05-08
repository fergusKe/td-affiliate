import React from 'react'
import { Tabs, Menu, message, Card, Col, Row, Timeline, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined, NotificationOutlined, BarChartOutlined } from '@ant-design/icons'
import EffectTable from './effect-table'
import EffectBouns from './effect-bonus'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

import './effect.scss'

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

class Effect extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="9">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <EffectTable />
                  </Col>
                </Card>
              </Col>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <EffectBouns />
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

export default Effect
