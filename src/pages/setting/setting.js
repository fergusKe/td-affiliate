import React from 'react'
import PropTypes from 'prop-types'
import LayoutWrapper from '../../components/layoutWrapper'
import SettingContent from './setting-content'

const Setting = props => {
  const { rolePath } = props

  return (
    <div>
      <LayoutWrapper rolePath={rolePath} selectedKeys="3">
        <SettingContent />
      </LayoutWrapper>
    </div>
  )
}

Setting.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Setting
