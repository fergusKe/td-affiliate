import React from 'react'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import ReportContent from './ReportContent'

const Report = () => (
  <div>
    <AdminLayout selectedKeys="5">
      <ReportContent />
    </AdminLayout>
  </div>
)

export default Report
