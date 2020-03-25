import React from 'react'
import { Card, Col, Row, Progress, Statistic } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import MainChart from './barchart/barchart'

import './card.scss'

const DashboardCard = () => (
  <div className="site-card-wrapper">
    <Row gutter={[24, 24]}>
      <Col span={8}>
        <Card title="總銷售額" bordered={false}>
          <h1 style={{ fontSize: '30px' }}>$2890000</h1>
          <Statistic
            title="日同比"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
          <Statistic
            title="週同比"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="總支付筆數" bordered={false}>
          <div className="progressLine-list">
            <div className="progressLine-item">
              <Progress percent={45} status="active" />
              <Progress percent={55} status="active" />
              <Progress percent={83} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
            </div>
          </div>
          <div>
            <span>總完成筆數 84％ </span>
          </div>
          <div>
            <span>未完成筆數 34％ </span>
          </div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="營運活動效果" bordered={false}>
          <div className="progressLine-list">
            <div className="progressLine-item">
              <h1 style={{ fontSize: '36px' }}>75%</h1>
              <Progress strokeLinecap="square" percent={75} />
            </div>
          </div>
          <div>
            <span>週同比 14％ </span>
          </div>
          <div>
            <span>日同比 12％ </span>
          </div>
        </Card>
      </Col>
    </Row>
    <Row gutter={[24, 24]}>
      <Col>
        <Card title="銷售額" bordered={false}>
          <div span={16}>
            <span>銷售趨勢</span>
          </div>
          <MainChart />
        </Card>
      </Col>
    </Row>
  </div>
)

export default DashboardCard
