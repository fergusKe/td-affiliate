import React from './node_modules/react'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import OverviewTable from '../Overview/OverviewTable'

import './UserAdmin.scss'

const UserAdmin = () => (
  <div>
    <AdminLayout>
      <OverviewTable />
    </AdminLayout>
  </div>
)

export default UserAdmin
