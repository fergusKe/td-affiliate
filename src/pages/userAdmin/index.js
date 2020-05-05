import React from 'react'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import OverviewTable from '../overview/overview-table'

import './index.scss'

const UserAdmin = () => (
  <div>
    <AdminLayout>
      <OverviewTable />
    </AdminLayout>
  </div>
)

export default UserAdmin
