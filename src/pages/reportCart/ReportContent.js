import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'id',
    dataIndex: 'key',
  },
  {
    title: '商品',
    dataIndex: 'name',
  },
  {
    title: '售價',
    dataIndex: 'price',
  },
  {
    title: '分潤',
    dataIndex: 'revenue',
  },
  {
    title: '銷售量',
    dataIndex: 'conversion',
  },
  {
    title: '收益',
    dataIndex: 'totalRevenue',
  },
]
let data = [
  {
    key: '1',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    price: 1099,
    revenue: 120,
    conversion: 32,
  },
  {
    key: '2',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    price: 510,
    revenue: 82,
    conversion: 18,
  },
  {
    key: '3',
    name: '掌心包 - 矽吸管',
    price: 320,
    revenue: 42,
    conversion: 11,
  },
  {
    key: '4',
    name: '復古赫本大衣 - 褐',
    price: 2880,
    revenue: 450,
    conversion: 10,
  },
  {
    key: '5',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    price: 490,
    revenue: 63,
    conversion: 8,
  },
  {
    key: '6',
    name: '新羽 100%天絲 薄床包兩用被組床高35公分 台灣製【超取限一組】',
    price: 2480,
    revenue: 620,
    conversion: 3,
  },
  {
    key: '7',
    name: '獨家 for Pinkoi/ Dicepattern Dress 印花幾何洋裝',
    price: 1235,
    revenue: 320,
    conversion: 3,
  },
  {
    key: '8',
    name: '全是愛 LOVE & PEACE / 寬版 上衣 彩虹刺繡 T-SHIRT (中性版)',
    price: 590,
    revenue: 70,
    conversion: 32,
  },
  {
    key: '9',
    name: '手作好禮 彩虹鑰匙圈小圓包 零錢包 情人節 生日 聖誕交換禮物',
    price: 351,
    revenue: 42,
    conversion: 18,
  },
  {
    key: '10',
    name: '#15 撞色方塊包 - 日本帆布 / 防水 / 斜揹',
    price: 3380,
    revenue: 532,
    conversion: 11,
  },
  {
    key: '11',
    name: '泡泡棉藍白格子 超大擺 寬松連衣裙',
    price: 839,
    revenue: 132,
    conversion: 10,
  },
  {
    key: '12',
    name: 'imake女生最愛原木數位化妝架 彩妝/保養/口紅/收納',
    price: 972,
    revenue: 169,
    conversion: 8,
  },
  {
    key: '13',
    name: '深藍不可缺少之物Life list/全包款殼/手機殼',
    price: 880,
    revenue: 92,
    conversion: 3,
  },
  {
    key: '14',
    name: '【經典原創】Trigonometric_三角函數小露背襯衫_CLT001_黑',
    price: 1980,
    revenue: 327,
    conversion: 3,
  },
]

data = data.map(item => ({
  ...item,
  totalRevenue: item.conversion * item.revenue,
}))

const ReportContent = () => (
  <div>
    <h4>報表總覽</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
)

export default ReportContent
