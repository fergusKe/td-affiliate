import React from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import Barchart from '../Barchart/Barchart'
import pageviewConfigSmall from '../../pages/ReportCart/data/pageview-small-config'
import pageviewConfig from '../../pages/ReportCart/data/pageview-config'

import './Card.scss'

const DashboardCard = () => (
  <div className="site-card-wrapper">
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Card title="總銷售額" bordered={false} style={{ minheight: '500px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'normal' }}>今日銷售額 $2,899,000</h2>
          <Row gutter={8}>
            <Col span={12} style={{ margin: '0px 0', textAlign: 'center' }}>
              <Statistic
                title="與同期上週比"
                value={11.28}
                valueStyle={{ color: '#cf1322', fontSize: '48px' }}
                prefix={<CaretUpOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={12} style={{ margin: '0px 0', textAlign: 'center' }}>
              <Statistic
                title="與同期上月比"
                value={9.3}
                valueStyle={{ color: '#3f8600', fontSize: '48px' }}
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
      <Col span={12}>
        <Card title="總瀏覽量" bordered={false} style={{ minheight: '500px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'normal' }}>今日瀏覽量 63,000</h2>
          <Barchart style={{ height: '400px', marginTop: '-50px' }} option={pageviewConfigSmall} />
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
      <Col span={12}>
        <Card title="總銷售量" bordered={false} style={{ minheight: '500px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 'normal' }}>今日銷售量 6,560</h2>
          <Barchart style={{ height: '400px', marginTop: '-50px' }} option={pageviewConfig} />
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
