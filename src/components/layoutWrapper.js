import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
import { AreaChartOutlined, SettingOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
import logo from '../imgs/logo.jpg'

import './layoutWrapper.scss'

const { Content, Footer, Sider } = Layout

const { SubMenu } = Menu

class LayoutWrapper extends React.Component {
  state = {
    collapsed: false,
    current: 'mail',
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
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
    const { current } = this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" defaultSelectedKeys={['2']} selectedKeys={[selectedKeys]} mode="inline">
            <Menu.Item key="1" className="logoItem" style={{ height: 54 }}>
              <Link to={`${rolePath}reportCart`}>
                <div className="logo">
                  <img src={logo} alt="logo" style={{ width: '30px', marginRight: '10px' }} />
                  Turing Digital
                </div>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <ProfileOutlined />
                  銷售收益
                </span>
              }
            >
              <Menu.Item key="4">
                <Link to={`${rolePath}reportCart`}>
                  <span className="nav-text">收益總覽</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to={`${rolePath}report`}>
                  <span className="nav-text">收益報表</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to={`${rolePath}member-report`}>
                  <span className="nav-text">會員報表</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Link to={`${rolePath}setting`}>
                <SettingOutlined />
                <span className="nav-text">推薦產品</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={`${rolePath}overview`}>
                <AreaChartOutlined />
                <span className="nav-text">提領現金</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to={`${rolePath}user`}>
                <UserOutlined />
                <span className="nav-text">帳戶資訊</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{ textAlign: 'right', height: '52px', padding: '3px 0', paddingRight: '20px' }}
          >
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Avatar size="small" icon={<UserOutlined />} style={{ cursor: 'pointer', marginRight: '10px' }} />
                  Hi Jessica
                </span>
              }
            >
              <Menu.Item key="5">
                帳戶資訊
                <Link to={`${rolePath}user`}></Link>
              </Menu.Item>
              <Menu.Item key="setting:1">登出</Menu.Item>
            </SubMenu>
          </Menu>
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
