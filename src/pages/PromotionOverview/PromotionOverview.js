import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { Card, Col, Row, Timeline, Select } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
import PromotionOverviewTable from './PromotionOverviewTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

import './PromotionOverview.scss'

const { Option } = Select

const PromotionOverview = () => {
  const [totalBonus, setTotalBonus] = useState(0)
  const [totalClick, setTotalClick] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
  // const [totalRevenue, setTotalRevenue] = useState(0)
  const [tableData, setTableData] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const userid = getCookie('td_userid')

  // 總覽日期
  const thisMonthStart = `${dayjs().format('YYYY')}-${dayjs().format('MM')}-01`
  const thisMonthEnd = dayjs().format('YYYY-MM-DD')
  const lastMonthStart = `${dayjs()
    .subtract(1, 'month')
    .format('YYYY-MM')}-01`
  const lastMonthEnd = `${dayjs()
    .subtract(1, 'month')
    .format('YYYY-MM')}-${dayjs()
    .subtract(1, 'month')
    .daysInMonth()}`

  const fetchSummary = useCallback(
    (start = thisMonthStart, end = thisMonthEnd, updateDataType = 'both') => {
      const fetchLink = `https://utility.turingdigital.com.tw/v1/users/${userid}/share_links/summary?start_date=${start}&end_date=${end}`

      console.log('fetchLink = ', fetchLink)

      axios
        .get(fetchLink)
        .then(function(response) {
          console.log('response = ', response)
          const { data } = response
          let bonus = 0
          let click = 0
          let order = 0
          // let revenue = 0
          const table = []

          const keys = Object.keys(data)
          keys.forEach(function(item) {
            // console.log('item = ', data[item])
            const itemBonus = data[item].total_bonus
            const itemClick = data[item].total_click
            const itemOrder = data[item].total_order
            const itemRevenue = data[item].total_revenue
            bonus += itemBonus
            click += itemClick
            order += itemOrder
            // revenue += itemRevenue

            table.push({
              key: item,
              date: item,
              bonus: itemBonus,
              hitNumber: itemClick,
              orderNumber: itemOrder,
              orderAmount: itemRevenue,
            })
          })

          if (updateDataType === 'day') {
            setTableData(table)
          } else if (updateDataType === 'month') {
            setTotalBonus(bonus)
            setTotalClick(click)
            setTotalOrder(order)
            // setTotalRevenue(revenue)
          } else {
            setTableData(table)
            setTotalBonus(bonus)
            setTotalClick(click)
            setTotalOrder(order)
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    [thisMonthEnd, thisMonthStart, userid]
  )

  const fetchAnnouncements = useCallback(() => {
    axios
      .get(`https://utility.turingdigital.com.tw/v1/companies/1/announcements`)
      .then(function(response) {
        const { data } = response
        console.log('announcements response = ', data)
        setAnnouncements(data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchSummary(thisMonthStart, thisMonthEnd)
    fetchAnnouncements()
  }, [fetchAnnouncements, fetchSummary, thisMonthEnd, thisMonthStart])

  function handleMonthChange(value) {
    // console.log(`selected ${value}`)
    if (value === 'thisMonth') {
      fetchSummary(thisMonthStart, thisMonthEnd, 'month')
    } else {
      fetchSummary(lastMonthStart, lastMonthEnd, 'month')
    }
  }

  return (
    <div>
      <AdminLayout selectedKeys="8">
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            <Col span={16}>
              <Card
                className="result-wrap"
                bordered={false}
                style={{ minheight: '400px', paddingLeft: '10px', height: '100%' }}
              >
                <div
                  style={{
                    color: 'rgba(0, 0, 0, 0.85)',
                    fontWigth: '500',
                    fontSize: '16px',
                    borderBottom: '1px solid #f0f0f0',
                    padding: '0 0 16px',
                  }}
                >
                  <BarChartOutlined style={{ margin: '0 10px' }} />
                  總覽
                  <Select
                    defaultValue="thisMonth"
                    style={{ width: 120, margin: '0 20px' }}
                    onChange={handleMonthChange}
                  >
                    <Option value="thisMonth">本月</Option>
                    <Option value="lastMonth">上月</Option>
                  </Select>
                </div>
                <Col span={24} style={{ minheight: '400px', paddingLeft: '10px' }}>
                  <div className="tabs">
                    <div className="tab">
                      獎金金額
                      <br />
                      {totalBonus}元
                    </div>
                    <div className="tab">
                      訂單數
                      <br />
                      {totalOrder}筆
                    </div>
                    <div className="tab">
                      點擊數
                      <br />
                      {totalClick}次
                    </div>
                  </div>
                </Col>
              </Card>
            </Col>
            <Col span={8} className="announce">
              <div className="announce-wrap-header">
                <Card title="最新公告" bordered={false} style={{ minheight: '400px', paddingLeft: '10px' }}>
                  <Timeline style={{ padding: '10px' }}>
                    {announcements.map(data => (
                      <Timeline.Item key={data.id}>
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                          {data.content}
                        </a>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </Card>
              </div>
            </Col>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <Col span={24}>
                  <PromotionOverviewTable dataSource={tableData} fetchSummary={fetchSummary} />
                </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default PromotionOverview
