import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import axios from 'axios'
import dayjs from 'dayjs'
import OrderDetailTable from './OrderDetailTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import { getCookie } from '../../commons/cookie'

const OrderDetail = () => {
  const [tableData, setTableData] = useState([])
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

  const fetchOrderDetail = useCallback(
    (start = thisMonthStart, end = thisMonthEnd) => {
      const fetchLink = `http://utility.turingdigital.com.tw/v1/users/${userid}/share_links/order_detail?start_date=${start}&end_date=${end}`

      // const fetchLink = `http://utility.turingdigital.com.tw/v1/users/1/share_links/order_detail?start_date=2020-04-01&end_date=2020-05-01`

      console.log('fetchLink = ', fetchLink)

      axios
        .get(fetchLink)
        .then(function(response) {
          console.log('response = ', response)
          const { data } = response
          // let revenue = 0
          const table = []

          const keys = Object.keys(data)
          // const dataSource = [
          //   {
          //     key: 1,
          //     name: 'tdsb_e0oh',
          //     click: 56,
          //     confirmData: 3,
          //     dayTimeData: 5,
          //     invalidData: 2,
          //     realBonus: 1299,
          //     conversionRatio: '50%',
          //     Remarks: '無相關事項',
          //   },
          // ]
          keys.forEach(function(item) {
            // console.log('item = ', data[item])
            const itemClick = data[item].click
            const itemUncharge = data[item].orders.uncharge
            const itemCharging = data[item].orders.charging
            const itemCharged = data[item].orders.charged
            const itemBonus = data[item].total_bonus
            const itemConversionRate = data[item].conversion_rate
            const itemMemo = data[item].memo

            table.push({
              key: item,
              name: item,
              click: itemClick,
              confirmData: itemUncharge,
              dayTimeData: itemCharging,
              invalidData: itemCharged,
              realBonus: itemBonus,
              conversionRatio: itemConversionRate,
              Remarks: itemMemo,
            })
          })

          setTableData(table)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    [thisMonthEnd, thisMonthStart, userid]
  )

  useEffect(() => {
    fetchOrderDetail(thisMonthStart, thisMonthEnd, true)
  }, [fetchOrderDetail, thisMonthEnd, thisMonthStart])

  return (
    <div>
      <AdminLayout selectedKeys="9">
        <div className="site-card-wrapper">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
                <Link to="/order-overview">
                  <CaretRightOutlined />
                  返回
                </Link>
                <hr />
                <Col span={24}>
                  <OrderDetailTable dataSource={tableData} fetchOrderDetail={fetchOrderDetail} />
                  <div>
                    <ul>
                      <li>
                        <p>
                          連結&ensp;&frasl;&ensp;無法追蹤：此數據代表已經失效的&ensp;URL&ensp;連結或是特殊簽約的廠商直接算入訂單，所以也可能是自然流入訂單但計算為成功推廣
                        </p>
                      </li>
                      <li>
                        <p>
                          連結&ensp;&frasl;&ensp;未知連結：此數據代表已經不存在的連結，連結或是特殊簽約的廠商直接算入訂單
                        </p>
                      </li>
                      <li>
                        <p>
                          訂單來源&ensp;&frasl;&ensp;無法追蹤：此數據代表無法追蹤到訂單來源，可能的原因例如透過通信軟體傳送或是&ensp;email&ensp;轉送等
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Card>
            </Col>
          </Row>
        </div>
      </AdminLayout>
    </div>
  )
}

export default OrderDetail
