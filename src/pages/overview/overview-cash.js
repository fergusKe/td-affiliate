import React from 'react'
import { Table, DatePicker, Button } from 'antd'

const { RangePicker } = DatePicker
const { Column } = Table

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
    status: '提領現金',
  },
  {
    date: '2018-02-18',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    recordedDate: '2019-02-11',
    totalRevenue: '82',
    status: '提領現金',
  },
  {
    date: '2018-03-11',
    name: '掌心包 - 矽吸管',
    recordedDate: '2019-02-11',
    totalRevenue: '42',
    status: '提領現金',
  },
  {
    date: '2018-04-12',
    name: '復古赫本大衣 - 褐',
    recordedDate: '2019-02-11',
    totalRevenue: '450',
    status: '提領現金',
  },
  {
    date: '2018-05-11',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    recordedDate: '2019-02-11',
    totalRevenue: '63',
    status: '提領現金',
  },
  {
    date: '2018-06-11',
    name: '新羽 100%天絲 薄床包兩用被組床高35公分 台灣製【超取限一組】',
    recordedDate: '2019-02-11',
    totalRevenue: '620',
    status: '審核中',
  },
  {
    date: '2018-07-11',
    name: '獨家 for Pinkoi/ Dicepattern Dress 印花幾何洋裝',
    recordedDate: '2019-02-11',
    totalRevenue: '320',
    status: '審核中',
  },
  {
    date: '2018-08-11',
    name: '全是愛 LOVE & PEACE / 寬版 上衣 彩虹刺繡 T-SHIRT (中性版)',
    recordedDate: '2019-02-11',
    totalRevenue: '70',
    status: '審核中',
  },
  {
    date: '2018-09-11',
    name: '手作好禮 彩虹鑰匙圈小圓包 零錢包 情人節 生日 聖誕交換禮物',
    recordedDate: '2019-02-11',
    totalRevenue: '42',
    status: '審核中',
  },
  {
    date: '2018-10-11',
    name: '#15 撞色方塊包 - 日本帆布 / 防水 / 斜揹',
    recordedDate: '2019-02-11',
    totalRevenue: '532',
    status: '審核中',
  },
  {
    date: '2018-11-11',
    name: '泡泡棉藍白格子 超大擺 寬松連衣裙',
    recordedDate: '2019-02-11',
    totalRevenue: '132',
    status: '審核中',
  },
  {
    date: '2018-012-11',
    name: 'imake女生最愛原木數位化妝架 彩妝/保養/口紅/收納',
    recordedDate: '2019-02-11',
    totalRevenue: '169',
    status: '審核中',
  },
  {
    date: '2018-12-30',
    name: '深藍不可缺少之物Life list/全包款殼/手機殼',
    recordedDate: '2019-02-11',
    totalRevenue: '92',
    status: '審核中',
  },
  {
    date: '2019-03-11',
    name: '【經典原創】Trigonometric_三角函數小露背襯衫_CLT001_黑',
    recordedDate: '2019-02-11',
    totalRevenue: '327',
    status: '審核中',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OverviewCash = () => (
  <div>
    <RangePicker style={{ marginBottom: '20px' }} />
    <Table dataSource={data} size="middle">
      <Column title="日期" dataIndex="date" key="date" />
      <Column title="商品" dataIndex="name" key="name" />
      <Column title="入帳日期" dataIndex="recordedDate" key="recordedDate" />
      <Column title="金額" dataIndex="totalRevenue" key="totalRevenue" />
      <Column
        title="進度狀態"
        key="status"
        dataIndex="status"
        render={text => {
          if (text === '提領現金') {
            return (
              <span>
                <Button>{text}</Button>
              </span>
            )
          }

          return <p style={{ width: '80px', textAlign: 'center' }}>{text}</p>
        }}
      />
    </Table>
  </div>
)

export default OverviewCash
