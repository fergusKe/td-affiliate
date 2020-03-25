import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
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
    const { children, selectedKeys, rolePath } = this.props

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" defaultSelectedKeys={['2']} selectedKeys={[selectedKeys]} mode="inline">
            <Menu.Item key="1" className="logoItem" style={{ height: 54 }}>
              <Link to={`${rolePath}overview`}>
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <span className="nav-text">Turing Digital</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`${rolePath}overview`}>
                <UserOutlined />
                <span className="nav-text">總覽</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={`${rolePath}setting`}>
                <SettingOutlined />
                <span className="nav-text">設定</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={`${rolePath}report`}>
                <ProfileOutlined />
                <span className="nav-text">報表</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: '#fff', textAlign: 'right', paddingRight: '10px' }}
          >
            <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
          </Header>
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>© 2020 Turing Digital. All Rights Reserved</Footer>
        </Layout>
      </Layout>
    )
  }
}

LayoutWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  selectedKeys: PropTypes.string,
  rolePath: PropTypes.string.isRequired,
}

export default LayoutWrapper
