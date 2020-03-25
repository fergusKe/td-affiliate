import React from 'react'
import { Menu } from 'antd'
import { UserOutlined, SettingOutlined, ProfileOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <UserOutlined />
          <Link to="/user-admin/overview">
            <span className="nav-text">總覽</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <SettingOutlined />
          <Link to="/user-admin/setting">
            <span className="nav-text">設定</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <ProfileOutlined />
          <span className="nav-text">
            <Link to="/user-admin/report">報表</Link>
          </span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default SideBar
