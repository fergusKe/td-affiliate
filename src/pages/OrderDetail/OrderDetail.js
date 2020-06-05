import React from 'react'
import { Card, Col, Row } from 'antd'

import OrderDetailTable from './OrderDetailTable'

import AdminLayout from '../../components/AdminLayout/AdminLayout'

class OrderDetail extends React.Component {
  render() {
    return (
      <div>
        <AdminLayout selectedKeys="9">
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                  <Col span={24}>
                    <OrderDetailTable />
                    <div>
                      <ul>
                        <li>
                          <p>
                            連結&ensp;&frasl;&ensp;無法追蹤：此數據代表已經失效的&ensp;URL&ensp;連結或是特殊簽約的廠商直接算入訂單，所以也可能是自然流入訂單但計算為成功推廣
                          </p>
                        </li>
                        <li>
                          <p>
                            連結&ensp;&frasl;&ensp;未知連結：此數據代表已經不存在的連結，連結或是特殊簽約的廠商直接算入訂單
                          </p>
                        </li>
                        <li>
                          <p>
                            訂單來源&ensp;&frasl;&ensp;無法追蹤：此數據代表無法追蹤到訂單來源，可能的原因例如透過通信軟體傳送或是&ensp;email&ensp;轉送等
                          </p>
                        </li>
                      </ul>
                    </div>
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

export default OrderDetail
