import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, SettingOutlined, ProfileOutlined } from '@ant-design/icons'

import './userContent.scss'

const { Content, Sider } = Layout

class UserContent extends React.Component {
  render() {
    return (
      <Layout>
        <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '54px' }}>
          <Menu.Item key="1">
            <Link to="/">首頁</Link>
          </Menu.Item>
          <Menu.Item key="2">使用者後台</Menu.Item>
        </Menu>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <UserOutlined />
                <span className="nav-text">總覽</span>
              </Menu.Item>
              <Menu.Item key="2">
                <SettingOutlined />
                <span className="nav-text">設定</span>
              </Menu.Item>
              <Menu.Item key="3">
                <ProfileOutlined />
                <span className="nav-text">報表</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 640,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default UserContent
