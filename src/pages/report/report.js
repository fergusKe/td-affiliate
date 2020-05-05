import React from 'react'
import PropTypes from 'prop-types'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import ReportContent from './report-content'

const Report = props => {
  const { rolePath } = props

  return (
    <div>
      <AdminLayout rolePath={rolePath} selectedKeys="5">
        <ReportContent />
      </AdminLayout>
    </div>
  )
}

Report.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Report
