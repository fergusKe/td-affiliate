import React from 'react'
import { Card, Col, Row } from 'antd'

import AdminSettingTable from './admin_setting-table'

import AdminLayout from '../../components/AdminLayout/AdminLayout'

class AdminSetting extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="11">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <h1>新增產品</h1>
                    <AdminSettingTable />
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

export default AdminSetting
