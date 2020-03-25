import React from 'react'
import LayoutWrapper from '../../components/layoutWrapper'
import DashboardCard from '../../components/card'
import OverviewTable from './overview-table'

const Overview = () => (
  <div>
    <LayoutWrapper>
      <DashboardCard />
      <OverviewTable />
    </LayoutWrapper>
  </div>
)

export default Overview
