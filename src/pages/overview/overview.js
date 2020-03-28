import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import LayoutWrapper from '../../components/layoutWrapper'
import DashboardCard from '../../components/card'
import Barchart from '../../components/barchart'
import Proportion from '../../components/card-proportion'

import salesConfig from './data/sales-config'
import pageviewConfig from './data/pageview-config'

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
          <DashboardCard />
          <Tabs
            defaultActiveKey="1"
            onChange={callback}
            style={{ backgroundColor: '#fff', margin: '20px 0', padding: '10px' }}
          >
            <TabPane tab="銷售額" key="1">
              <Barchart style={{ height: '400px' }} option={salesConfig} />
            </TabPane>
            <TabPane tab="訪問量" key="2">
              <Barchart style={{ height: '400px' }} option={pageviewConfig} />
            </TabPane>
          </Tabs>
          {/* <OverviewTable /> */}
          <Proportion />
        </div>
      </LayoutWrapper>
    </div>
  )
}

Overview.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Overview
