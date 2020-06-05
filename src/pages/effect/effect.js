import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Table, Button } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

import './Effect.scss'

const columns = [
  {
    title: '月份',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '訂單數',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '訂單金額',
    dataIndex: 'orderAmount',
    key: 'orderAmount',
  },
  {
    title: '預計獎金',
    dataIndex: 'bonus',
    key: 'bonus',
  },
  {
    title: '狀態',
    dataIndex: 'status',
    key: 'status',
  },
]

const dataSource = [
  {
    key: '1',
    date: '2019-03月',
    orderNumber: 2,
    orderAmount: 'NT$1800',
    bonus: 'NT$199',
    status: '未領取',
  },
]

const Effect = () => {
  const handleRequestPayment = () => {
    console.log('請款')
  }

  return (
    <div>
      <AdminLayout selectedKeys="9">
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <Col span={24}>
                  <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
                    <span>本月訂單 ( {dataSource.length} 筆 )</span>
                  </div>
                  <div style={{ padding: '30px', height: '110px' }}>
                    <span>
                      <Link to="/Order">
                        <CaretRightOutlined />
                        訂單總覽
                      </Link>
                    </span>
                    <span>
                      <Button
                        type="primary"
                        danger
                        onClick={handleRequestPayment}
                        style={{ position: 'absolute', right: '30px' }}
                      >
                        我要請款
                      </Button>
                    </span>
                    <div style={{ position: 'absolute', right: '30px', top: '130px', color: 'gray' }}>
                      <p>可請款獎金累積到 NT$500 元以上，每月 5~15 日可進行請款</p>
                    </div>
                  </div>
                  <Table dataSource={dataSource} columns={columns} size="default"></Table>
                </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default Effect
