import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import { Card, Col, Row, Table, Button, notification } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

import './OrderOverview.scss'

const columns = [
  {
    title: '月份',
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
    title: '預計獎金',
    dataIndex: 'bonus',
    key: 'bonus',
  },
  {
    title: '狀態',
    dataIndex: 'chargeState',
    key: 'chargeState',
    render: text => {
      let status = ''
      if (text === 'uncharge') {
        status = '未申請'
      }
      if (text === 'charging') {
        status = '審核中'
      }
      if (text === 'charged') {
        status = '已審核'
      }
      return status
    },
  },
]

const userid = getCookie('td_userid')

const OrderOverview = () => {
  const [tableData, setTableData] = useState([])

  const fetchSummary = useCallback(() => {
    const fetchSummaryLink = `https://utility.turingdigital.com.tw/v1/users/${userid}/share_links/summary?group_by=month&last=5`

    console.log('fetchSummaryLink = ', fetchSummaryLink)

    axios
      .get(fetchSummaryLink)
      .then(function(response) {
        console.log('response = ', response)
        const { data } = response
        const table = []

        const keys = Object.keys(data)
        keys.forEach(function(item) {
          // console.log('item = ', data[item])
          const month = dayjs(item).format('YYYY-MM')
          const itemBonus = data[item].total_bonus
          const itemClick = data[item].total_click
          const itemOrder = data[item].total_order
          const itemRevenue = data[item].total_revenue
          const itemChargeState = data[item].charge_state

          table.push({
            key: month,
            date: month,
            bonus: itemBonus,
            hitNumber: itemClick,
            orderNumber: itemOrder,
            orderAmount: itemRevenue,
            chargeState: itemChargeState,
          })
        })
        console.log('table = ', table)
        setTableData(table)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchSummary()
  }, [fetchSummary])

  const openNotification = (type, message) => {
    notification[type]({
      message,
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  const handleRequestPayment = () => {
    const fetchRequestLink = `https://utility.turingdigital.com.tw/v1/users/${userid}/orders/request_status`

    tableData.forEach(function(item) {
      console.log('item = ', item)
      const { date } = item
      const dateStart = dayjs(date, 'YYYY-MM').format('YYYY-MM-DD')
      const dateLength = dayjs(date, 'YYYY-MM').daysInMonth()
      const dateEnd = dayjs(dateStart, 'YYYY-MM-DD')
        .add(dateLength - 1, 'day')
        .format('YYYY-MM-DD')
      console.log('dateStart = ', dateStart)
      console.log('dateEnd = ', dateEnd)
      console.log('dateLength = ', dateLength)

      // "錯誤，範例：傳入SJON {"start_date":"2020-03-01","end_date":"2020-05-01", "request_status":"1"} 0:未請款 1:請款中 2:已出帳 3:其他"
      axios
        .post(fetchRequestLink, {
          start_date: dateStart,
          end_date: dateEnd,
          request_status: 1,
        })
        .then(function(res) {
          console.log(res)
          if (res.data === 'ok') {
            openNotification('success', `${date} 申請成功`)
          } else {
            openNotification('error', `${date} 申請失敗`)
          }
        })
        .catch(function(error) {
          console.log(error)
        })
    })
  }

  return (
    <div>
      <AdminLayout selectedKeys="9">
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <Col span={24}>
                  <div style={{ backgroundColor: '#f5f5f5', padding: '15px' }}>
                    <span>本月訂單 ( {tableData.length} 筆 )</span>
                  </div>
                  <div style={{ padding: '30px', height: '110px' }}>
                    <span>
                      <Link to="/order-detail">
                        <CaretRightOutlined />
                        訂單明細
                      </Link>
                    </span>
                    <span>
                      <Button
                        type="primary"
                        danger
                        onClick={handleRequestPayment}
                        style={{ position: 'absolute', right: '30px' }}
                      >
                        我要請款
                      </Button>
                    </span>
                    <div style={{ position: 'absolute', right: '30px', top: '130px', color: 'gray' }}>
                      <p>可請款獎金累積到 NT$500 元以上，每月 5~15 日可進行請款</p>
                    </div>
                  </div>
                  <Table dataSource={tableData} columns={columns} size="default"></Table>
                </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default OrderOverview
