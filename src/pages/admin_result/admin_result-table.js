import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, DatePicker, Radio, Button } from 'antd'

const { RangePicker } = DatePicker
const { Column } = Table

// const data = [
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
//   {
//     date: '2019-03-11',
//     orderNumber: 2,
//     orderAmount: 1800,
//     hitNumber: 20,
//     bonus: 199,
//   },
// ]

// data = data.map(item => ({
//   ...item,
//   totaltotalRevenue: item.status * item.totalRevenue,
// }))

const AdminResultTable = props => {
  const { data } = props
  console.log('summary = ', data)
  // useEffect(() => {

  // }, [])
  return (
    <div>
      <div className="search-wrap" style={{ backgroundColor: '#eae6e6', padding: '30px', borderRadius: '10px' }}>
        <span>查詢區間：</span>
        <RangePicker style={{ marginBottom: '10px', width: '350px' }} format="YYYY年MM月DD日" />
        <span>
          <Radio.Group defaultValue="a" style={{ border: 'none' }}>
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
          {/* <Button style={{ margin: '10px 0 0px 0', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
            匯出報表
          </Button> */}
        </div>
      </div>
      <Table dataSource={data} size="default">
        <Column title="日期" dataIndex="date" key="date" />
        <Column title="訂單數" dataIndex="orderNumber" key="orderNumber" />
        <Column title="訂單金額" dataIndex="orderAmount" key="orderAmount" />
        <Column title="點擊數" dataIndex="hitNumber" key="hitNumber" />
        <Column title="獎金金額" dataIndex="bonus" key="bonus" />
      </Table>
    </div>
  )
}

AdminResultTable.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AdminResultTable
