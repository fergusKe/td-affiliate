import React from 'react'
import { Card, Col, Row, Tabs, Progress } from 'antd'
import Barchart from './barchart'
import pageviewProportion from '../pages/overview/data/pageview-proportion-config'
import pageviewConversion from '../pages/overview/data/pageview-conversion-config'

import './card.scss'

const { TabPane } = Tabs

class Proportion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'top',
    }
  }

  handleModeChange = e => {
    const mode = e.target.value
    this.setState({ mode })
  }

  render() {
    const { mode } = this.state
    return (
      <div className="site-card-wrapper">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Card title="銷售額類別占比" bordered={false} style={{ minheight: '300px' }}>
              <Barchart option={pageviewProportion} />
            </Card>
          </Col>
          <Col span={24}>
            <Card title="轉化率" bordered={false} style={{ minheight: '300px' }}>
              <div>
                <Tabs defaultActiveKey="1" tabPosition={mode}>
                  {[...Array(12).keys()].map(i => (
                    <TabPane tab={`${i + 1}月`} key={i}>
                      <Col span={24}>
                        <div>
                          <p>轉化率 75%</p>
                          <Progress type="circle" width={60} percent={75} format={percent => `${percent} %`} />
                        </div>
                      </Col>
                      <Barchart option={pageviewConversion} />
                    </TabPane>
                  ))}
                </Tabs>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Proportion
