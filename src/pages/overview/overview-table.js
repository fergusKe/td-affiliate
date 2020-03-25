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
    sorter: {
      compare: (a, b) => a.conversion - b.conversion,
      multiple: 3,
    },
  },
  {
    title: '百分比 (%)',
    dataIndex: 'percentage',
    sorter: {
      compare: (a, b) => a.percentage - b.percentage,
      multiple: 2,
    },
  },
  {
    title: '分潤',
    dataIndex: 'revenue',
    sorter: {
      compare: (a, b) => a.revenue - b.revenue,
      multiple: 1,
    },
  },
]
const data = [
  {
    key: '1',
    name: 'Current Specials',
    conversion: 12,
    percentage: 32,
    revenue: '100000',
  },
  {
    key: '2',
    name: 'Kitchen Tools',
    conversion: 18,
    percentage: 18,
    revenue: '53000',
  },
  {
    key: '3',
    name: 'Serveware',
    conversion: 23,
    percentage: 11,
    revenue: '24000',
  },
  {
    key: '4',
    name: 'Serveware',
    conversion: 18,
    percentage: 10,
    revenue: '67000',
  },
  {
    key: '5',
    name: 'Serveware',
    conversion: 9,
    percentage: 8,
    revenue: '42800',
  },
  {
    key: '6',
    name: 'Serveware',
    conversion: 11,
    percentage: 3,
    revenue: '2800',
  },
  {
    key: '7',
    name: 'Serveware',
    conversion: 23,
    percentage: 3,
    revenue: '92800',
  },
  {
    key: '8',
    name: 'Current Specials',
    conversion: 11,
    percentage: 32,
    revenue: '100000',
  },
  {
    key: '9',
    name: 'Kitchen Tools',
    conversion: '24',
    percentage: 18,
    revenue: '53000',
  },
  {
    key: '10',
    name: 'Serveware',
    conversion: 5,
    percentage: 11,
    revenue: '24000',
  },
]

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

const OverviewTable = () => (
  <div>
    <h4>商品銷售額排名</h4>
    <Table columns={columns} dataSource={data} size="middle" onChange={onChange} />
    {/* <h4>前 10 項</h4>
    <Table columns={columns} dataSource={data} size="small" /> */}
  </div>
)

export default OverviewTable
