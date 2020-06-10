import React from 'react'
import { Table, DatePicker, Radio, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker

const orderData = {
  totalData: 10,
  confirmData: 5,
  dayTimeData: 5,
  creditData: 3,
  invalidData: 2,
}

const columns = [
  {
    title: '推廣連結',
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
      // {
      //   title: '獎金入帳',
      //   dataIndex: 'creditData',
      //   key: 'creditData',
      //   fixed: 'center',
      //   align: 'center',
      //   sorter: (a, b) => a.age - b.age,
      // },
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
  // {
  //   title: '預估獎金',
  //   dataIndex: 'stimatedBonus',
  //   key: 'stimatedBonus',
  //   fixed: 'center',
  //   align: 'center',
  //   sorter: (a, b) => a.age - b.age,
  // },
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
    key: 1,
    name: 'tdsb_e0oh',
    click: 56,
    confirmData: 3,
    dayTimeData: 5,
    // creditData: 3,
    invalidData: 2,
    // stimatedBonus: 1299,
    realBonus: 1299,
    conversionRatio: '50%',
    Remarks: '無相關事項',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const OrderDetailTable = () => (
  <div>
    <div className="search-wrap" style={{ backgroundColor: 'white', marginBottom: '40px 0', borderRadius: '10px' }}>
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
      <div style={{ margin: '20px 0' }}>
        <Button type="primary" icon={<SearchOutlined />}>
          查詢
        </Button>
        {/* <Button style={{ margin: '0px 40px', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
          匯出報表
        </Button> */}
      </div>
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

export default OrderDetailTable
