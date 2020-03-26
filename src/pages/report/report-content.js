import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'id',
    dataIndex: 'key',
    sorter: (a, b) => a.key - b.key,
    defaultSortOrder: 'ascend',
  },
  {
    title: '商品',
    dataIndex: 'name',
    sorter: (a, b) => {
      const stringA = a.name.toUpperCase() // ignore upper and lowercase
      const stringB = b.name.toUpperCase() // ignore upper and lowercase
      if (stringA < stringB) {
        return -1
      }
      if (stringA > stringB) {
        return 1
      }
      // names must be equal
      return 0
    },
    render: (text, record) => (
      <a target="_blank" href={record.link} rel="noreferrer noopener">
        {record.name}
      </a>
    ),
  },
  {
    title: '售價',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '分潤',
    dataIndex: 'revenue',
    sorter: (a, b) => a.revenue - b.revenue,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '銷售量',
    dataIndex: 'conversion',
    sorter: (a, b) => a.conversion - b.conversion,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '收益',
    dataIndex: 'totalRevenue',
    sorter: (a, b) => a.totalRevenue - b.totalRevenue,
    sortDirections: ['descend', 'ascend'],
  },
]

let data = [
  {
    key: '1',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    link: 'https://www.pinkoi.com/product/GCdrYFSU?category=11&ref_itemlist=MsxZRDx2',
    price: 1099,
    revenue: 120,
    conversion: 32,
  },
  {
    key: '2',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    link: 'https://www.pinkoi.com/product/3JNC5cPR?category=1&ref_itemlist=tTtWsrXC',
    price: 510,
    revenue: 82,
    conversion: 18,
  },
  {
    key: '3',
    name: '掌心包 - 矽吸管',
    link: 'https://www.pinkoi.com/product/7Z3NW9nu?category=13&ref_itemlist=qRbLyb9c',
    price: 320,
    revenue: 42,
    conversion: 11,
  },
  {
    key: '4',
    name: '復古赫本大衣 - 褐',
    link: 'https://www.pinkoi.com/product/MQb4keGn?category=0&ref_itemlist=cza9P3cK',
    price: 2880,
    revenue: 450,
    conversion: 10,
  },
  {
    key: '5',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    link: 'https://www.pinkoi.com/product/mc6pVevG?category=1&ref_itemlist=V5ZaKjat',
    price: 490,
    revenue: 63,
    conversion: 8,
  },
  {
    key: '6',
    name: '新羽 100%天絲 薄床包兩用被組床高35公分 台灣製【超取限一組】',
    link: 'https://www.pinkoi.com/product/Q4eR8E7E?category=5&ref_itemlist=YbccgUd7',
    price: 2480,
    revenue: 620,
    conversion: 3,
  },
  {
    key: '7',
    name: '獨家 for Pinkoi/ Dicepattern Dress 印花幾何洋裝',
    link: 'https://www.pinkoi.com/product/Hi4Mxcym?category=0&ref_itemlist=3UmPeTUJ',
    price: 1235,
    revenue: 320,
    conversion: 3,
  },
  {
    key: '8',
    name: '全是愛 LOVE & PEACE / 寬版 上衣 彩虹刺繡 T-SHIRT (中性版)',
    link: 'https://www.pinkoi.com/product/3BSt8gWS?category=0&ref_itemlist=G4Z7yFBW',
    price: 590,
    revenue: 70,
    conversion: 32,
  },
  {
    key: '9',
    name: '手作好禮 彩虹鑰匙圈小圓包 零錢包 情人節 生日 聖誕交換禮物',
    link: 'https://www.pinkoi.com/product/z3ehPP88?category=1&ref_itemlist=Y8kianY2',
    price: 351,
    revenue: 42,
    conversion: 18,
  },
  {
    key: '10',
    name: '#15 撞色方塊包 - 日本帆布 / 防水 / 斜揹',
    link: 'https://www.pinkoi.com/product/WVcT3XBY?category=1&ref_itemlist=wZ7FBALY',
    price: 3380,
    revenue: 532,
    conversion: 11,
  },
  {
    key: '11',
    name: '泡泡棉藍白格子 超大擺 寬松連衣裙',
    link: 'https://www.pinkoi.com/product/cYuGgZn7?category=0&ref_itemlist=uZ3fDZ63',
    price: 839,
    revenue: 132,
    conversion: 10,
  },
  {
    key: '12',
    name: 'imake女生最愛原木數位化妝架 彩妝/保養/口紅/收納',
    link: 'https://www.pinkoi.com/product/1psHJJfI?category=5&ref_itemlist=kQfzDSKB',
    price: 972,
    revenue: 169,
    conversion: 8,
  },
  {
    key: '13',
    name: '深藍不可缺少之物Life list/全包款殼/手機殼',
    link: 'https://www.pinkoi.com/product/F6DKRifU?category=11&ref_itemlist=iZj5uvyZ',
    price: 880,
    revenue: 92,
    conversion: 3,
  },
  {
    key: '14',
    name: '【經典原創】Trigonometric_三角函數小露背襯衫_CLT001_黑',
    link: 'https://www.pinkoi.com/product/X5W5riE2?category=0&ref_itemlist=bgC43S7L',
    price: 1980,
    revenue: 327,
    conversion: 3,
  },
]

data = data.map(item => ({
  ...item,
  totalRevenue: item.conversion * item.revenue,
}))

const OverviewContent = () => (
  <div>
    <h4>報表總覽</h4>
    <Table columns={columns} dataSource={data} size="middle" />
  </div>
)

export default OverviewContent
