import React from 'react'
import { Table } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { CaretRightOutlined } from '@ant-design/icons'

const { Column } = Table

let data = [
  {
    date: '2019-03月',
    orderNumber: 2,
    orderAmount: 'NT$1800',
    bonus: 'NT$199',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const EffectTable = () => (
  <div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
      <span>本月訂單 ( 0 筆 )</span>
    </div>
    <div style={{ padding: '30px' }}>
      <div>
        <Link to="/Order">
          <CaretRightOutlined />
          訂單總覽
        </Link>
      </div>
    </div>
    <Table dataSource={data} size="default">
      <Column title="月份" dataIndex="date" key="date" />
      <Column title="訂單數" dataIndex="orderNumber" key="orderNumber" />
      <Column title="訂單金額" dataIndex="orderAmount" key="orderAmount" />
      <Column title="預計獎金" dataIndex="bonus" key="bonus" />
    </Table>
  </div>
)

export default withRouter(EffectTable)
