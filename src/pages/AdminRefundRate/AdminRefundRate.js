import React from 'react'
import { Card, Col, Row } from 'antd'

import AdminRefundRateTable from './AdminRefundRateTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

class AdminRefundRate extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="12">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <div style={{ margin: '0 0 30px 0' }}>
                  <h1>調整退傭</h1>
                </div>
                <AdminRefundRateTable />
              </Card>
            </Col>
          </Row>
        </AdminLayout>
      </div>
    )
  }
}

export default AdminRefundRate
