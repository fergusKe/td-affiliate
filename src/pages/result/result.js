import React from 'react'
import { Menu, Card, Col, Row, Timeline, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons'
import ResultTable from './result-table'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

import './result.scss'

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      上月
    </Menu.Item>
  </Menu>
)

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <AdminLayout selectedKeys="8">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={16}>
                <Card
                  className="result-wrap"
                  bordered={false}
                  style={{ minheight: '400px', paddingLeft: '10px', height: '100%' }}
                >
                  <span style={{ color: 'rgba(0, 0, 0, 0.85)', fontWigth: '500', fontSize: '16px' }}>
                    <BarChartOutlined style={{ margin: '0 10px' }} />
                    總覽
                    <Dropdown overlay={menu}>
                      <Button style={{ margin: '0 20px' }}>
                        本月 <DownOutlined />
                      </Button>
                    </Dropdown>
                  </span>
                  <Col span={24} className="result-report" style={{ minheight: '400px', paddingLeft: '10px' }}>
                    <div className="result-report-tabs" style={{ display: 'block', padding: '42px 24px 50px' }}>
                      <div className="tabs-wrap">
                        <div className="tablist" defaultActiveKey="1" style={{ textAlign: 'center', fontSize: '16px' }}>
                          <div className="tab" key="1" style={{ width: '80px', textAlign: 'center' }}>
                            獎金金額
                            <div>NT 2699</div>
                          </div>
                          <div className="tab" key="2" style={{ width: '80px', textAlign: 'center' }}>
                            訂單數
                            <div>343 筆</div>
                          </div>
                          <div className="tab" key="3" style={{ width: '80px', textAlign: 'center' }}>
                            點擊數
                            <div>2343 次</div>
                          </div>
                          <div className="tab" key="4" style={{ width: '80px', textAlign: 'center' }}>
                            曝光數
                            <div>3562 次</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Card>
              </Col>
              <Col span={8}>
                <div className="announce-wrap-header">
                  <Card title="最新公告" bordered={false} style={{ minheight: '400px', paddingLeft: '10px' }}>
                    <Timeline style={{ padding: '10px' }}>
                      <Timeline.Item>
                        【果貿吳媽家】千千進食中推薦-眷村員外雞湯/
                        1份3500g★訂購請選到貨區間，如需指定日期請備註，單筆訂單僅限統一到貨 2020-05-07
                      </Timeline.Item>
                      <Timeline.Item>
                        【水哦X果貿吳媽家】獨家聯名－千歲豬腳麵線禮盒★限量組數，售完為止★（一組699免運）2020-05-04
                      </Timeline.Item>
                      <Timeline.Item>
                        【果貿吳媽家】五月寵愛媽咪/愛的99免運組❤4盒96顆/999元-超值79折免運優惠 2020-05-01
                      </Timeline.Item>
                    </Timeline>
                  </Card>
                </div>
              </Col>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <ResultTable />
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

export default Result
