import React from 'react'
import { Table, DatePicker } from 'antd'

const { RangePicker } = DatePicker

const columns = [
  {
    title: '點擊日期',
    dataIndex: 'date',
  },
  {
    title: '商品',
    dataIndex: 'name',
  },
  {
    title: '金額',
    dataIndex: 'totalRevenue',
  },
]
let data = [
  {
    date: '2018-02-11',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    totalRevenue: '120',
  },
  {
    date: '2018-02-18',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    totalRevenue: '82',
  },
  {
    date: '2018-03-11',
    name: '掌心包 - 矽吸管',
    totalRevenue: '42',
  },
  {
    date: '2018-04-12',
    name: '復古赫本大衣 - 褐',
    totalRevenue: '450',
  },
  {
    date: '2018-05-11',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    totalRevenue: '63',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OverviewNote = () => (
  <div>
    <RangePicker style={{ marginBottom: '20px' }} />
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
)

export default OverviewNote
