import React from 'react'
import { Card, Col, Row } from 'antd'
import EffectTable from './effect-table'
import EffectBouns from './effect-bonus'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

import './effect.scss'

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
