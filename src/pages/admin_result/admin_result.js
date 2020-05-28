import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import { Tabs, Menu, message, Card, Col, Row, Timeline, Radio, Button, Select } from 'antd'
import { DownOutlined, UserOutlined, NotificationOutlined, BarChartOutlined } from '@ant-design/icons'
import AdminResultTable from './admin_result-table'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

function callback() {
  console.log(message)
}

const { TabPane } = Tabs
const { Option } = Select

const announce = [
  '【果貿吳媽家】千千進食中推薦-眷村員外雞湯/1份3500g★訂購請選到貨區間，如需指定日期請備註，單筆訂單僅限統一到貨 2020-05-07',
  '【水哦X果貿吳媽家】獨家聯名－千歲豬腳麵線禮盒★限量組數，售完為止★（一組699免運）2020-05-04',
  '【果貿吳媽家】五月寵愛媽咪/愛的99免運組❤4盒96顆/999元-超值79折免運優惠 2020-05-01',
]

const AdminResult = () => {
  const [tdUsername, setTdUsername] = useState('')
  const [tdToken, setTdToken] = useState('')
  const [tdUserId, setTdUserId] = useState('')
  const [totalBonus, setTotalBonus] = useState(0)
  const [totalClick, setTotalClick] = useState(0)
  const [totalOrder, setTotalOrder] = useState(0)
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [summary, setSummary] = useState('')
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const username = getCookie('td_username')
    const token = getCookie('td_token')
    const userid = getCookie('td_userid')

    setTdUsername(username)
    setTdToken(token)
    setTdUserId(userid)
    console.log('tdUserId = ', userid)

    // 本月
    console.log('day = ', dayjs().format('YYYY-M-D'))
    // const thisMonthStartDate = `${dayjs().year()}-${dayjs().month() + 1}-1`
    // const thisMonthEndDate = `${dayjs().year()}-${dayjs().month() + 1}-${dayjs().date()}`
    const thisMonthStartDate = '2020-03-01'
    const thisMonthEndDate = '2020-05-01'
    console.log('thisMonthStartDate = ', thisMonthStartDate)
    console.log('thisMonthEndDate = ', thisMonthEndDate)

    axios
      .get(
        `https://utility.turingdigital.com.tw/v1/users/${userid}/share_links/summary?start_date=${thisMonthStartDate}&end_date=${thisMonthEndDate}`
      )
      .then(function(response) {
        console.log('all orders = ', response)
        const { data } = response
        let bonus = 0
        let click = 0
        let order = 0
        let revenue = 0
        const table = []
        console.log('Object.keys = ', Object.keys(data))
        setSummary(data)
        const keys = Object.keys(data)
        keys.forEach(function(item) {
          console.log('item = ', data[item])
          const itemBonus = data[item].total_bonus
          const itemClick = data[item].total_click
          const itemOrder = data[item].total_order
          const itemRevenue = data[item].total_revenue
          bonus += itemBonus
          click += itemClick
          order += itemOrder
          revenue += itemRevenue
          table.push({
            date: item,
            bonus: itemBonus,
            hitNumber: itemClick,
            orderNumber: itemOrder,
            orderAmount: itemRevenue,
          })
        })

        console.log('bonus = ', bonus)
        console.log('click = ', click)
        console.log('order = ', order)
        console.log('revenue = ', revenue)
        console.log('table = ', table)
        // setTotalBonus(parseInt(bonus, 10))
        // setTotalClick(parseInt(click, 10))
        // setTotalOrder(parseInt(order, 10))
        // setTotalRevenue(parseInt(revenue, 10))
        setTotalBonus(bonus)
        setTotalClick(click)
        setTotalOrder(order)
        setTotalRevenue(revenue)
        setTableData(table)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  function onChange(e) {
    console.log(`radio checked:${e.target.value}`)
  }

  return (
    <div>
      <AdminLayout selectedKeys="10">
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
                  <Select defaultValue="thisMonth" style={{ width: 120, margin: '0 20px' }} onChange={handleChange}>
                    <Option value="thisMonth">本月</Option>
                    <Option value="lastMonth">上月</Option>
                  </Select>
                </div>
                <Col span={24} style={{ minheight: '400px', paddingLeft: '10px' }}>
                  <div className="tabs">
                    <div className="tab">
                      獎金金額
                      <br />
                      {totalRevenue}元
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
                    <div className="tab">
                      曝光數
                      <br />
                      0次
                    </div>
                  </div>
                </Col>
              </Card>
            </Col>
            <Col span={8} className="announce">
              <div className="announce-wrap-header">
                <Card title="最新公告" bordered={false} style={{ minheight: '400px', paddingLeft: '10px' }}>
                  <Timeline style={{ padding: '10px' }}>
                    {announce.map(data => (
                      <Timeline.Item>
                        <Link to="#">{data}</Link>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </Card>
              </div>
            </Col>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <Col span={24}>
                  <AdminResultTable data={tableData} />
                </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default AdminResult
