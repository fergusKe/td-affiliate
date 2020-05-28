import React from 'react'
import { Card, Col, Row } from 'antd'

import AdminCollectTable from './admin_collect-table'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

class AdminCollect extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="14">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <div style={{ margin: '0 0 30px 0' }}>
                  <h1>請款報告</h1>
                </div>
                <AdminCollectTable />
              </Card>
            </Col>
          </Row>
        </AdminLayout>
      </div>
    )
  }
}

export default AdminCollect
