import React from 'react'
import { Tabs } from 'antd'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import OverviewCash from './OverviewCash'
import OverviewRecord from './OverviewRecord'
// import OverviewNote from './OverviewNote'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const Overview = () => (
  <div>
    <AdminLayout selectedKeys="2">
      <div className="overview">
        <div>
          <h2>現金回饋總覽</h2>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback} style={{ backgroundColor: '#fff', padding: '10px 20px' }}>
          <TabPane tab="現金回饋明細" key="1">
            <OverviewCash style={{ minheight: '600px' }} />
          </TabPane>
          <TabPane tab="提領紀錄" key="2">
            <OverviewRecord style={{ minheight: '600px' }} />
          </TabPane>
          {/* <TabPane tab="瀏覽紀錄" key="3">
              <OverviewNote style={{ minheight: '600px' }} />
            </TabPane> */}
        </Tabs>
      </div>
    </AdminLayout>
  </div>
)

export default Overview
