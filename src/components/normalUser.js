import React from 'react'
// import SideBar from './sideBar'
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content, Footer, Sider } = Layout

class NormalUser extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>總覽</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>設計</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span>報表</span>
            </Menu.Item>
            <Menu.Item key="9"></Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Turing Digital ©2020 Created by Turing Digital Team</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default NormalUser
