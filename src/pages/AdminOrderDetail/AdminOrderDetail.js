import React from 'react'
import { Card, Col, Row } from 'antd'

import AdminOrderDetailTable from './AdminOrderDetailTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

class AdminOrderDetails extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="14">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h1>請款報告</h1>
                </div>
                <AdminOrderDetailTable />
              </Card>
            </Col>
          </Row>
        </AdminLayout>
      </div>
    )
  }
}

export default AdminOrderDetails
