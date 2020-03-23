import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Nav = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '54px' }}>
    <Menu.Item key="1">首頁</Menu.Item>
    <Menu.Item key="2">
      <Link to="/user-admin">使用者後台</Link>
    </Menu.Item>
  </Menu>
)

export default Nav
