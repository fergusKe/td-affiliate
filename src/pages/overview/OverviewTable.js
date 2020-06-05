import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '商品',
    dataIndex: 'name',
  },
  {
    title: '轉換',
    dataIndex: 'conversion',
  },
  {
    title: '百分比 (%)',
    dataIndex: 'percentage',
  },
  {
    title: '分潤',
    dataIndex: 'revenue',
  },
]
const data = [
  {
    key: '1',
    name: 'Current Specials',
    conversion: 'conversion',
    percentage: 32,
    revenue: '$100000',
  },
  {
    key: '2',
    name: 'Kitchen Tools',
    conversion: 'conversion',
    percentage: 18,
    revenue: '$53000',
  },
  {
    key: '3',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 11,
    revenue: '$24000',
  },
  {
    key: '4',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 10,
    revenue: '$67000',
  },
  {
    key: '5',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 8,
    revenue: '$42800',
  },
  {
    key: '6',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 3,
    revenue: '$2800',
  },
  {
    key: '7',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 3,
    revenue: '$92800',
  },
  {
    key: '8',
    name: 'Current Specials',
    conversion: 'conversion',
    percentage: 32,
    revenue: '$100000',
  },
  {
    key: '9',
    name: 'Kitchen Tools',
    conversion: 'conversion',
    percentage: 18,
    revenue: '$53000',
  },
  {
    key: '10',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 11,
    revenue: '$24000',
  },
  {
    key: '11',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 10,
    revenue: '$67000',
  },
  {
    key: '12',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 8,
    revenue: '$42800',
  },
  {
    key: '13',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 3,
    revenue: '$2800',
  },
  {
    key: '14',
    name: 'Serveware',
    conversion: 'conversion',
    percentage: 3,
    revenue: '$92800',
  },
]

const OverviewTable = () => (
  <div>
    <h4>商品總覽</h4>
    <Table columns={columns} dataSource={data} size="middle" />
    {/* <h4>前 10 項</h4>
    <Table columns={columns} dataSource={data} size="small" /> */}
  </div>
)

export default OverviewTable
