import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Nav from './nav'
import SideBar from './sideBar'

import './layoutWrapper.scss'

const { Content, Sider, Footer } = Layout

class LayoutWrapper extends React.Component {
  state = {
    selectedKeys: '2',
  }

  render() {
    const { selectedKeys } = this.state
    const { children } = this.props

    return (
      <Layout>
        <Layout>
          <Nav selectedKeys={selectedKeys} />
        </Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <SideBar />
          </Sider>
          <Layout>
            <Layout style={{ padding: '24px 24px 0 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 580,
                }}
              >
                {children}
              </Content>
              <Footer style={{ textAlign: 'center' }}>Turing Digital ©2020 Created by Turing-digital Team</Footer>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

LayoutWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutWrapper
