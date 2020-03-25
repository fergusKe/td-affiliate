import React from 'react'
import PropTypes from 'prop-types'
import LayoutWrapper from '../../components/layoutWrapper'
import SettingContent from './report-content'

const Report = props => {
  const { rolePath } = props

  return (
    <div>
      <LayoutWrapper rolePath={rolePath} selectedKeys="4">
        <SettingContent />
      </LayoutWrapper>
    </div>
  )
}

Report.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Report
