import React from 'react'
import { Table, DatePicker, Radio, Button, Menu, Dropdown } from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'

function handleMenuClick(e) {
  console.log('click', e)
}
const { RangePicker } = DatePicker
const { Column } = Table

const menu1 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">廠商&ensp;1</Menu.Item>
    <Menu.Item key="2">廠商&ensp;2</Menu.Item>
    <Menu.Item key="3">廠商&ensp;3</Menu.Item>
  </Menu>
)

const menu2 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">名稱&ensp;1</Menu.Item>
    <Menu.Item key="2">名稱&ensp;2</Menu.Item>
    <Menu.Item key="3">名稱&ensp;3</Menu.Item>
  </Menu>
)

const menu3 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">連結&ensp;1</Menu.Item>
    <Menu.Item key="2">連結&ensp;2</Menu.Item>
    <Menu.Item key="3">連結&ensp;3</Menu.Item>
  </Menu>
)

const menu4 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">廠商類別&ensp;1</Menu.Item>
    <Menu.Item key="2">廠商類別&ensp;2</Menu.Item>
    <Menu.Item key="3">廠商類別&ensp;3</Menu.Item>
  </Menu>
)
const menu5 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">訂單來源&ensp;1</Menu.Item>
    <Menu.Item key="2">訂單來源&ensp;2</Menu.Item>
    <Menu.Item key="3">訂單來源&ensp;3</Menu.Item>
  </Menu>
)
const menu6 = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">成效標籤 (UID)&ensp;1</Menu.Item>
    <Menu.Item key="2">成效標籤 (UID)&ensp;2</Menu.Item>
    <Menu.Item key="3">成效標籤 (UID)&ensp;3</Menu.Item>
  </Menu>
)

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

const OrderTable = () => (
  <div>
    <div className="search-wrap" style={{ backgroundColor: 'white', marginBottom: '50px', borderRadius: '10px' }}>
      <div>
        <span>查詢區間：&ensp;</span>
        <RangePicker style={{ marginBottom: '30px', width: '350px' }} format="YYYY年MM月DD日" />
        <span>
          <Radio.Group defaultValue="a" style={{ margin: '0 50px', border: 'none' }}>
            <Radio.Button value="a">本週</Radio.Button>
            <Radio.Button value="b">上週</Radio.Button>
            <Radio.Button value="c">一個月</Radio.Button>
            <Radio.Button value="d">一季</Radio.Button>
            <Radio.Button value="e">一年</Radio.Button>
          </Radio.Group>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '30px' }}>
        <div style={{ marginRight: '50px' }}>
          <span>查詢指標：&ensp;</span>
          維度&ensp;1&ensp;
          <Dropdown overlay={menu1}>
            <Button>
              廠商
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div style={{ marginRight: '20px' }}>
          <span>查詢指標：&ensp;</span>
          維度&ensp;2&ensp;
          <Dropdown overlay={menu2}>
            <Button>
              名稱
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'start', marginBottom: '30px' }}>
        <div style={{ marginRight: '50px' }}>
          <span>篩選條件：&ensp;</span>
          <Dropdown overlay={menu1}>
            <Button>
              廠商
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu3}>
            <Button>
              連結
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu4}>
            <Button>
              廠商類別
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu5}>
            <Button>
              訂單來源
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={menu6}>
            <Button>
              成效標籤 (UID)
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div style={{ position: 'absolute', right: '0px' }}>
          <Button type="primary" icon={<SearchOutlined />} style={{ margin: '0px 20px' }}>
            查詢
          </Button>
          <Button style={{ margin: '0px 20px', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
            匯出報表
          </Button>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
      <span>[查詢時間] 訂單總數：0 筆</span>
    </div>
    <Table dataSource={data} size="default">
      <Column title="月份" dataIndex="date" key="date" />
      <Column title="訂單數" dataIndex="orderNumber" key="orderNumber" />
      <Column title="訂單金額" dataIndex="orderAmount" key="orderAmount" />
      <Column title="預計獎金" dataIndex="bonus" key="bonus" />
    </Table>
  </div>
)

export default OrderTable
