import React from 'react'
import { Card, Col, Row } from 'antd'

import AdminOrderOverviewTable from './AdminOrderOverviewTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

class AdminOrderOverview extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="13">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <div style={{ margin: '0 0 30px 0' }}>
                  <h1>訂單總覽</h1>
                </div>
                <AdminOrderOverviewTable />
              </Card>
            </Col>
          </Row>
        </AdminLayout>
      </div>
    )
  }
}

export default AdminOrderOverview