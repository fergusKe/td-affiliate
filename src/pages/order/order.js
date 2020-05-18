import React from 'react'
import { Card, Col, Row } from 'antd'

import OrderTable from './order-table'

import AdminLayout from '../../components/AdminLayout/AdminLayout'

class Order extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="9">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
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
