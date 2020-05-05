import React from 'react'
import { Tabs } from 'antd'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import DashboardCard from '../../components/card'
import Barchart from '../../components/barchart'
import Proportion from '../../components/card-proportion'

import salesConfig from './data/sales-config'
import pageviewConfig from './data/pageview-config'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const ReportCart = props => (
  <div>
    <AdminLayout selectedKeys="4">
      <div className="overview">
        <DashboardCard />
        {/* <Tabs
            defaultActiveKey="1"
            onChange={callback}
            style={{ backgroundColor: '#fff', margin: '20px 0', padding: '10px' }}
          >
            <TabPane tab="銷售額" key="1">
              <Barchart style={{ height: '400px' }} option={salesConfig} />
            </TabPane>
            <TabPane tab="瀏覽量" key="2">
              <Barchart style={{ height: '400px' }} option={pageviewConfig} />
            </TabPane>
          </Tabs> */}
        <Proportion />
      </div>
    </AdminLayout>
  </div>
)

export default ReportCart
