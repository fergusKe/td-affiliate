import React from 'react'
import { Table, DatePicker, Radio, Button } from 'antd'

const { Column } = Table

let data = [
  {
    date: '2019-03-11',
    orderNumber: 2,
    orderAmount: 'NT$1800',
    bonus: 'NT$199',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const EffectBouns = () => (
  <div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
      <span>本月總獎金（ 0.00 元 ）</span>
    </div>
    <div style={{ padding: '15px' }}>
      <span>本月總獎金（ 0.00 元 ）</span>
    </div>
    <Table dataSource={data} size="default">
      <Column title="月份" dataIndex="date" key="date" />
      <Column title="訂單數" dataIndex="orderNumber" key="orderNumber" />
      <Column title="訂單金額" dataIndex="orderAmount" key="orderAmount" />
      <Column title="預計獎金" dataIndex="bonus" key="bonus" />
    </Table>
  </div>
)

export default EffectBouns
