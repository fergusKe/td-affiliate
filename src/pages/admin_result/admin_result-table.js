import React from 'react'
import { Table, DatePicker, Radio, Button } from 'antd'

const { RangePicker } = DatePicker
const { Column } = Table

let data = [
  {
    userName: 'User Name',
    nickName: 'Nick Name',
    userId: 'sdhfj223',
    totalOrderNumber: 20,
    totalBonus: 199,
    date: '2019-03-11',
  },
  {
    userName: 'User Name',
    nickName: 'Nick Name',
    userId: 'sdhfj223',
    totalOrderNumber: 20,
    totalBonus: 199,
    date: '2019-03-11',
  },
  {
    userName: 'User Name',
    nickName: 'Nick Name',
    userId: 'sdhfj223',
    totalOrderNumber: 20,
    totalBonus: 199,
    date: '2019-03-11',
  },
  {
    userName: 'User Name',
    nickName: 'Nick Name',
    userId: 'sdhfj223',
    totalOrderNumber: 20,
    totalBonus: 199,
    date: '2019-03-11',
  },
]

data = data.map(item => ({
  ...item,
  totaltotalRevenue: item.status * item.totalRevenue,
}))

const AdminResultTable = () => (
  <div>
    <div className="search-wrap" style={{ backgroundColor: '#eae6e6', padding: '30px', borderRadius: '10px' }}>
      <span>查詢區間：</span>
      <RangePicker style={{ marginBottom: '20px', width: '350px' }} format="YYYY年MM月DD日" />
      <span>
        <Radio.Group defaultValue="a" style={{ margin: '0 20px', border: 'none' }}>
          <Radio.Button value="a">本週</Radio.Button>
          <Radio.Button value="b">上週</Radio.Button>
          <Radio.Button value="c">一個月</Radio.Button>
          <Radio.Button value="d">一季</Radio.Button>
          <Radio.Button value="e">一年</Radio.Button>
        </Radio.Group>
      </span>
      <div className="btn-wrap">
        <Button style={{ margin: '10px 20px 0px 0', backgroundColor: '#f96982', color: 'white', border: 'none' }}>
          查詢
        </Button>
        <Button style={{ margin: '10px 0 0px 0', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
          匯出報表
        </Button>
      </div>
    </div>
    <Table dataSource={data} size="default">
      <Column title="帳號" dataIndex="userName" key="userName" />
      <Column title="暱稱" dataIndex="nickName" key="nickName" />
      <Column title="標示碼" dataIndex="userId" key="userId" />
      <Column title="累積成交筆數" dataIndex="totalOrderNumber" key="totalOrderNumber" />
      <Column title="累積成交獎金" dataIndex="totalBonus" key="totalBonus" />
      <Column title="加入時間" dataIndex="date" key="date" />
    </Table>
  </div>
)

export default AdminResultTable
