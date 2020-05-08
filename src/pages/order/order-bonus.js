import React from 'react'
import { Table, Button } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { CaretRightOutlined } from '@ant-design/icons'

const { Column } = Table

let data = [
  {
    date: '2019-03月',
    promotionBonus: 'NT$180',
    eventBonus: 'NT$180',
    totalBonus: 'NT$360',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OrderBouns = () => (
  <div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
      <span>本月總獎金（ 0.00 元 ）</span>
    </div>
    <div style={{ padding: '30px', height: '110px' }}>
      <span>
        <Link to="/reportCart">
          <CaretRightOutlined />
          訂單總覽
        </Link>
      </span>
      <span>
        <Button type="primary" danger style={{ position: 'absolute', right: '30px' }}>
          我要請款
        </Button>
      </span>
      <div style={{ position: 'absolute', right: '30px', top: '130px', color: 'gray' }}>
        <p>可請款獎金累積到 NT$500 元以上，每月 5~15 日可進行請款</p>
      </div>
    </div>
    <Table dataSource={data} size="default">
      <Column title="月份" dataIndex="date" key="date" />
      <Column title="推廣獎金" dataIndex="promotionBonus" key="promotionBonus" />
      <Column title="活動獎金" dataIndex="eventBonus" key="eventBonus" />
      <Column title="本月獎金" dataIndex="totalBonus" key="totalBonus" />
    </Table>
  </div>
)

export default withRouter(OrderBouns)
