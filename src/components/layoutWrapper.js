import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  SettingOutlined,
  ProfileOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import logo from '../imgs/logo.jpg'

import './layoutWrapper.scss'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

class LayoutWrapper extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const { children } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
            <Menu.Item key="1" className="logoItem" style={{ height: 54 }}>
              <Link to="/user-admin/overview">
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <span className="nav-text">Turing Digital</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user-admin/overview">
                <UserOutlined />
                <span className="nav-text">總覽</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/user-admin/setting">
                <SettingOutlined />
                <span className="nav-text">設定</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/user-admin/report">
                <ProfileOutlined />
                <span className="nav-text">報表</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="5">Tom</Menu.Item>
              <Menu.Item key="6">Bill</Menu.Item>
              <Menu.Item key="7">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <TeamOutlined />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="8">Team 1</Menu.Item>
              <Menu.Item key="9">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Turing Digital ©2020 Created by Turing-digital Team</Footer>
        </Layout>
      </Layout>
    )
  }
}

LayoutWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutWrapper
