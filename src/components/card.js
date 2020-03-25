import React from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import Barchart from './barchart'
import pageviewConfigSmall from '../pages/overview/data/pageview-small-config'
import pageviewConfig from '../pages/overview/data/pageview-config'

import './card.scss'

const DashboardCard = () => (
  <div className="site-card-wrapper">
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Card title="總銷售額" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>$ 2,899,000</h1>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title="與同期上週比"
                value={11.28}
                valueStyle={{ color: '#cf1322', fontSize: '16px' }}
                prefix={<CaretUpOutlined />}
                suffix="%"
              />
              <Statistic
                title="與同期上月比"
                value={9.3}
                valueStyle={{ color: '#3f8600', fontSize: '16px' }}
                prefix={<CaretDownOutlined />}
                suffix="%"
              />
            </Col>
            {/* <Col span={12} style={{ height: '100px', margin: '50px 0' }}>
              <Statistic
                title="與同期上月比"
                value={9.3}
                valueStyle={{ color: '#3f8600', fontSize: '16px' }}
                prefix={<CaretDownOutlined />}
                suffix="%"
              />
            </Col> */}
            <Col span={24} style={{ marginTop: '32px' }}>
              <div>
                <p>
                  日銷售額
                  <span> $12,670</span>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="訪問量" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>63,000</h1>
          <Barchart style={{ height: '200px', marginTop: '-50px' }} option={pageviewConfigSmall} />
          <Row>
            <Col span={24} style={{ marginTop: '-15px' }}>
              <div>
                <p>
                  日訪問量
                  <span> $12,670</span>
                </p>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="支付筆數" bordered={false} style={{ minheight: '300px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>6,560</h1>
          <Barchart style={{ height: '200px', marginTop: '-50px' }} option={pageviewConfig} />
          <Row>
            <Col span={24} style={{ marginTop: '-15px' }}>
              <div>
                <p>
                  轉化率
                  <span> 60%</span>
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
