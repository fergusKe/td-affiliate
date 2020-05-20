import React from 'react'
import { Card, Col, Row } from 'antd'
import AdminEffectTable from './admin_effect-table'
import AdminEffectBouns from './admin_effect-bonus'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

import './admin_effect.scss'

class AdminEffect extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="12">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <AdminEffectTable />
                  </Col>
                </Card>
              </Col>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <AdminEffectBouns />
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

export default AdminEffect
