import React from 'react'
import LayoutWrapper from '../../components/layoutWrapper'
import DashboardCard from '../../components/card'
import Main from '../../components/barchart/barchart'
import OverviewTable from './overview-table'

const Overview = () => (
  <div>
    <LayoutWrapper>
      <DashboardCard />
      <Main />
      <OverviewTable />
    </LayoutWrapper>
  </div>
)

export default Overview
