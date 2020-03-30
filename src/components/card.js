import React from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import Barchart from './barchart'
import pageviewConfigSmall from '../pages/reportCart/data/pageview-small-config'
import pageviewConfig from '../pages/reportCart/data/pageview-config'

import './card.scss'

const DashboardCard = () => (
  <div className="site-card-wrapper">
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card title="總銷售額" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>$ 2,899,000</h1>
          <Row gutter={16}>
            <Col span={12} style={{ margin: '26px 0' }}>
              <Statistic
                title="與同期上週比"
                value={11.28}
                valueStyle={{ color: '#cf1322', fontSize: '16px' }}
                prefix={<CaretUpOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={12} style={{ margin: '26px 0' }}>
              <Statistic
                title="與同期上月比"
                value={9.3}
                valueStyle={{ color: '#3f8600', fontSize: '16px' }}
                prefix={<CaretDownOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={24} style={{ marginTop: '32px' }}>
              <div>
                <p>
                  月銷售額
                  <span> $612,670</span>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="瀏覽量" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>63,000</h1>
          <Barchart style={{ height: '200px', marginTop: '-50px' }} option={pageviewConfigSmall} />
          <Row>
            <Col span={24} style={{ marginTop: '-15px' }}>
              <div>
                <p>
                  月瀏覽量
                  <span> 512,670</span>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="銷售量" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>6,560</h1>
          <Barchart style={{ height: '200px', marginTop: '-50px' }} option={pageviewConfig} />
          <Row>
            <Col span={24} style={{ marginTop: '-15px' }}>
              <div>
                <p>
                  月銷售量
                  <span> 21,463</span>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
)

export default DashboardCard
