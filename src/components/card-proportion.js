import React from 'react'
import { Card, Col, Row, Tabs, Progress } from 'antd'
import Barchart from './barchart'
import pageviewProportion from '../pages/reportCart/data/pageview-proportion-config'
import pageviewConversion from '../pages/reportCart/data/pageview-conversion-config'

import './card.scss'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

class Proportion extends React.Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="銷售額類別占比" bordered={false}>
              <Barchart option={pageviewProportion} />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="商品轉化率" bordered={false} style={{ minheight: '300px' }}>
              <Col span={24}>
                <Tabs defaultActiveKey="1" onChange={callback} style={{ backgroundColor: '#fff' }}>
                  <TabPane tab="配件飾品" key="1">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        轉化率
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={23} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="居家生活" key="2">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        轉化率
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={14} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="包包提袋" key="3">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        轉化率
                        <span style={{ marginLeft: '20px' }}>
                          <Progress type="circle" percent={21} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="衣著良品" key="4">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        轉化率
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={19} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                  <TabPane tab="文具卡片" key="5">
                    <div style={{ margin: '20px 0 -10px 0' }}>
                      <p>
                        轉化率
                        <span style={{ marginLeft: '10px' }}>
                          <Progress type="circle" percent={35} width={80} />
                        </span>
                      </p>
                    </div>
                    <Barchart option={pageviewConversion} style={{ margin: '10px 0 30px 0' }} />
                  </TabPane>
                </Tabs>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Proportion
