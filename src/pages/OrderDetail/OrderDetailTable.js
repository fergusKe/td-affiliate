import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, DatePicker, Radio, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import moment from 'moment'

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
        title: '未請款',
        dataIndex: 'confirmData',
        key: 'confirmData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '請款中',
        dataIndex: 'dayTimeData',
        key: 'dayTimeData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '已出帳',
        dataIndex: 'invalidData',
        key: 'invalidData',
        fixed: 'center',
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
    ],
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

const today = dayjs().format('dddd')

function getThisWeekStart() {
  if (today === 'Monday') {
    return dayjs()
  }
  if (today === 'Tuesday') {
    return dayjs().subtract(1, 'days')
  }
  if (today === 'Wednesday') {
    return dayjs().subtract(2, 'days')
  }
  if (today === 'Thursday') {
    return dayjs().subtract(3, 'days')
  }
  if (today === 'Friday') {
    return dayjs().subtract(4, 'days')
  }
  if (today === 'Saturday') {
    return dayjs().subtract(5, 'days')
  }
  if (today === 'Sunday') {
    return dayjs().subtract(6, 'days')
  }
}

const thisWeekStart = getThisWeekStart().format('YYYY-MM-DD')
const thisWeekEnd = dayjs().format('YYYY-MM-DD')
const lastWeekStart = getThisWeekStart()
  .subtract(1, 'week')
  .format('YYYY-MM-DD')
const lastWeekEnd = getThisWeekStart()
  .subtract(1, 'day')
  .format('YYYY-MM-DD')
const lastMonthStart = dayjs()
  .subtract(1, 'month')
  .format('YYYY-MM-DD')
const lastMonthEnd = dayjs().format('YYYY-MM-DD')
const lastSeasonStart = dayjs()
  .subtract(3, 'month')
  .format('YYYY-MM-DD')
const lastSeasonEnd = dayjs().format('YYYY-MM-DD')
const lastYearStart = dayjs()
  .subtract(1, 'year')
  .format('YYYY-MM-DD')
const lastYearEnd = dayjs().format('YYYY-MM-DD')

// data = data.map(item => ({
//   ...item,
//   totaltotalRevenue: item.status * item.totalRevenue,
// }))

const OrderDetailTable = props => {
  const { dataSource, fetchOrderDetail } = props
  const [start, setStart] = useState(thisWeekStart)
  const [end, setEnd] = useState(thisWeekEnd)

  console.log('detail = ', dataSource)

  useEffect(() => {
    fetchOrderDetail(thisWeekStart, thisWeekEnd)
  }, [fetchOrderDetail])

  const onPickerChange = (date, dateString) => {
    // console.log('data', date, 'dateString', dateString)
    setStart(dateString[0])
    setEnd(dateString[1])
  }

  const onRadioChange = e => {
    const { value } = e.target
    // console.log('value = ', value)

    if (value === 'thisWeek') {
      setStart(thisWeekStart)
      setEnd(thisWeekEnd)
    }

    if (value === 'lastWeek') {
      setStart(lastWeekStart)
      setEnd(lastWeekEnd)
    }

    if (value === 'lastMonth') {
      setStart(lastMonthStart)
      setEnd(lastMonthEnd)
    }

    if (value === 'lastSeason') {
      setStart(lastSeasonStart)
      setEnd(lastSeasonEnd)
    }

    if (value === 'lastYear') {
      setStart(lastYearStart)
      setEnd(lastYearEnd)
    }
  }

  const onSubmit = () => {
    // console.log('submit')
    fetchOrderDetail(start, end)
  }
  return (
    <div>
      <div className="search-wrap" style={{ backgroundColor: 'white', marginBottom: '40px 0', borderRadius: '10px' }}>
        <span>查詢區間：&ensp;</span>
        <RangePicker
          style={{ marginBottom: '10px', width: '350px' }}
          onChange={onPickerChange}
          // defaultValue={[moment(thisWeekStart, 'YYYY-MM-DD'), moment(thisWeekEnd, 'YYYY-MM-DD')]}
          value={[moment(start, 'YYYY-MM-DD'), moment(end, 'YYYY-MM-DD')]}
        />
        <span>
          <Radio.Group defaultValue="thisWeek" onChange={onRadioChange} style={{ border: 'none' }}>
            <Radio.Button value="thisWeek">本週</Radio.Button>
            <Radio.Button value="lastWeek">上週</Radio.Button>
            <Radio.Button value="lastMonth">一個月</Radio.Button>
            <Radio.Button value="lastSeason">一季</Radio.Button>
            <Radio.Button value="lastYear">一年</Radio.Button>
          </Radio.Group>
        </span>
        <div>
          <Button type="primary" icon={<SearchOutlined />} style={{ margin: '10px 20px 0px 0' }} onClick={onSubmit}>
            查詢
          </Button>
          {/* <Button style={{ margin: '0px 40px', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
          匯出報表
        </Button> */}
        </div>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', marginTop: '10px' }}>
        <span>
          訂單總數：{dataSource.length}&ensp;筆
          {/* （ 確認中&ensp;{orderData.confirmData}
        &ensp;&frasl;&ensp;有效訂單&ensp;{orderData.dayTimeData}&ensp;&frasl;&ensp;獎金入帳&ensp;{orderData.creditData}
        &ensp;&frasl;&ensp;訂單無效&ensp;{orderData.invalidData}） */}
        </span>
      </div>
      <Table columns={columns} dataSource={dataSource} bordered size="middle" />
    </div>
  )
}

OrderDetailTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchOrderDetail: PropTypes.func.isRequired,
}

export default OrderDetailTable
