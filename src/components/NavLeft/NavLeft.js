import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { SettingOutlined, ProfileOutlined, LineChartOutlined } from '@ant-design/icons'
import logo from '../../imgs/logo.jpg'
import { navUserList, navAdminList } from '../../config/navConfig'

const { Sider } = Layout
const { SubMenu } = Menu

const NavLeft = ({ selectedKeys, user }) => {
  const [navTreeNode, setNavTreeNode] = useState(null)
  const [collapsed] = useState(false)
  console.log('user = ', user)

  const getIcon = icon => {
    if (icon === 'LineChartOutlined') {
      return <LineChartOutlined />
    }
    if (icon === 'SettingOutlined') {
      return <SettingOutlined />
    }
    if (icon === 'ProfileOutlined') {
      return <ProfileOutlined />
    }
    return null
  }

  const renderNav = useCallback(
    data =>
      data.map(item => {
        if (item.children) {
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  {getIcon(item.icon)}
                  {item.title}
                </span>
              }
            >
              {renderNav(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.link}>
              {getIcon(item.icon)}
              {item.title}
            </NavLink>
          </Menu.Item>
        )
      }),
    []
  )

  useEffect(() => {
    if (user.role === 'user') {
      setNavTreeNode(renderNav(navUserList))
    }
    if (user.role === 'company') {
      setNavTreeNode(renderNav(navAdminList))
    }
    if (user.role === 'admin') {
      setNavTreeNode(renderNav([...navUserList, ...navAdminList]))
    }
  }, [renderNav, user.role])

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" defaultSelectedKeys={['2']} selectedKeys={[selectedKeys]} mode="inline">
        <Menu.Item key="1" className="logoItem" style={{ height: 54 }}>
          <Link to="/promotion-overview">
            <div className="logo">
              <img src={logo} alt="logo" style={{ width: '30px', marginRight: '10px' }} />
              Turing Digital
            </div>
          </Link>
        </Menu.Item>
        {navTreeNode}
      </Menu>
    </Sider>
  )
}

NavLeft.propTypes = {
  selectedKeys: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default NavLeft
