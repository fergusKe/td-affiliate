import React from 'react'
import { Table, DatePicker } from 'antd'

const { RangePicker } = DatePicker

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '商品',
    dataIndex: 'name',
  },
  {
    title: '入帳日期',
    dataIndex: 'recordedDate',
  },
  {
    title: '金額',
    dataIndex: 'totalRevenue',
  },
  {
    title: '進度狀態',
    dataIndex: 'status',
  },
]
let data = [
  {
    date: '2018-02-11',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    recordedDate: '2019-02-11',
    totalRevenue: '120',
    status: '提領完成',
  },
  {
    date: '2018-02-18',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    recordedDate: '2019-02-11',
    totalRevenue: '82',
    status: '提領完成',
  },
  {
    date: '2018-03-11',
    name: '掌心包 - 矽吸管',
    recordedDate: '2019-02-11',
    totalRevenue: '42',
    status: '提領完成',
  },
  {
    date: '2018-04-12',
    name: '復古赫本大衣 - 褐',
    recordedDate: '2019-02-11',
    totalRevenue: '450',
    status: '提領完成',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OverviewRecord = () => (
  <div>
    <RangePicker style={{ marginBottom: '20px' }} />
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
)

export default OverviewRecord
