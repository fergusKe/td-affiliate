import React from 'react'
import { Table, DatePicker, Radio, Button, Menu, Dropdown } from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'

function handleMenuClick(e) {
  console.log('click', e)
}

const { RangePicker } = DatePicker

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

const orderData = {
  totalData: 10,
  confirmData: 5,
  dayTimeData: 5,
  creditData: 3,
  invalidData: 2,
}

const columns = [
  {
    title: '廠商',
    dataIndex: 'name',
    key: 'name',
    fixed: 'center',
    align: 'center',
  },
  {
    title: '點擊',
    dataIndex: 'click',
    key: 'click',
    fixed: 'center',
    align: 'center',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '訂單數',
    children: [
      {
        title: '確認中',
        dataIndex: 'confirmData',
        key: 'confirmData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '有效',
        dataIndex: 'dayTimeData',
        key: 'dayTimeData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '獎金入帳',
        dataIndex: 'creditData',
        key: 'creditData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '無效',
        dataIndex: 'invalidData',
        key: 'invalidData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
    ],
  },
  {
    title: '預估獎金',
    dataIndex: 'stimatedBonus',
    key: 'stimatedBonus',
    fixed: 'center',
    align: 'center',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '獎金入帳',
    dataIndex: 'realBonus',
    key: 'realBonus',
    fixed: 'center',
    align: 'center',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '轉換率',
    dataIndex: 'conversionRatio',
    key: 'conversionRatio',
    fixed: 'center',
    align: 'center',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '備註',
    dataIndex: 'Remarks',
    key: 'Remarks',
    fixed: 'center',
    align: 'center',
  },
]

let data = [
  {
    name: '廠商 1',
    click: 56,
    confirmData: 5,
    dayTimeData: 5,
    creditData: 3,
    invalidData: 2,
    stimatedBonus: 1299,
    realBonus: 1299,
    conversionRatio: '50%',
    Remarks: '無相關事項',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OrderTable = () => (
  <div>
    <div className="search-wrap" style={{ backgroundColor: 'white', marginBottom: '40px', borderRadius: '10px' }}>
      <span>查詢區間：&ensp;</span>
      <RangePicker style={{ width: '350px' }} format="YYYY年MM月DD日" />
      <span>
        <Radio.Group defaultValue="a" style={{ margin: '0 50px', border: 'none' }}>
          <Radio.Button value="a">本週</Radio.Button>
          <Radio.Button value="b">上週</Radio.Button>
          <Radio.Button value="c">一個月</Radio.Button>
          <Radio.Button value="d">一季</Radio.Button>
          <Radio.Button value="e">一年</Radio.Button>
        </Radio.Group>
      </span>
      <span style={{ position: 'absolute', right: '0px' }}>
        <Button type="primary" icon={<SearchOutlined />}>
          查詢
        </Button>
        <Button style={{ margin: '0px 20px', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
          匯出報表
        </Button>
      </span>
    </div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
      <span>
        [查詢時間]&ensp;&ensp;訂單總數：{orderData.totalData}&ensp;筆（ 確認中&ensp;{orderData.confirmData}
        &ensp;&frasl;&ensp;有效訂單&ensp;{orderData.dayTimeData}&ensp;&frasl;&ensp;獎金入帳&ensp;{orderData.creditData}
        &ensp;&frasl;&ensp;訂單無效&ensp;{orderData.invalidData}）
      </span>
    </div>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </div>
)

export default OrderTable
