import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import LayoutWrapper from '../../components/layoutWrapper'
import OverviewCash from './overview-cash'
import OverviewRecord from './overview-record'
import OverviewNote from './overview-note'

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const Overview = props => {
  const { rolePath } = props

  return (
    <div>
      <LayoutWrapper rolePath={rolePath} selectedKeys="2">
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
      </LayoutWrapper>
    </div>
  )
}

Overview.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Overview
