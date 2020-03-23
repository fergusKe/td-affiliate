import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Nav = props => {
  const { selectedKeys = '1' } = props
  console.log('selectedKeys = ', selectedKeys)

  return (
    <Menu mode="horizontal" style={{ lineHeight: '54px' }} defaultSelectedKeys={[selectedKeys]}>
      <Menu.Item key="1">
        <Link to="/">首頁</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/user-admin">使用者後台</Link>
      </Menu.Item>
    </Menu>
  )
}

Nav.propTypes = {
  selectedKeys: PropTypes.string,
}

export default Nav
