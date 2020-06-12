import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Table, DatePicker, Radio, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import moment from 'moment'

const { RangePicker } = DatePicker

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '訂單數',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '訂單金額',
    dataIndex: 'orderAmount',
    key: 'orderAmount',
  },
  {
    title: '點擊數',
    dataIndex: 'hitNumber',
    key: 'hitNumber',
  },
  {
    title: '獎金金額',
    dataIndex: 'bonus',
    key: 'bonus',
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

const PromotionOverviewTable = props => {
  const { dataSource, fetchSummary } = props
  const [start, setStart] = useState(thisWeekStart)
  const [end, setEnd] = useState(thisWeekEnd)

  console.log('summary = ', dataSource)

  useEffect(() => {
    fetchSummary(thisWeekStart, thisWeekEnd, 'day')
  }, [fetchSummary])

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
    fetchSummary(start, end, 'day')
  }
  return (
    <div>
      <div className="search-wrap" style={{ backgroundColor: '#eae6e6', padding: '30px', borderRadius: '10px' }}>
        <span>查詢區間：</span>
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
        <div className="btn-wrap">
          <Button type="primary" icon={<SearchOutlined />} style={{ margin: '10px 20px 0px 0' }} onClick={onSubmit}>
            查詢
          </Button>
          {/* <Button style={{ margin: '10px 0 0px 0', backgroundColor: '#8c8c8c', color: 'white', border: 'none' }}>
            匯出報表
          </Button> */}
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} size="default"></Table>
    </div>
  )
}

PromotionOverviewTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  fetchSummary: PropTypes.func.isRequired,
}

export default PromotionOverviewTable
