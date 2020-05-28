import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, notification } from 'antd'
import {
  SettingOutlined,
  ProfileOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  CreditCardOutlined,
} from '@ant-design/icons'
import Header from '../Header/Header'
import logo from '../../imgs/logo.jpg'
import { getCookie } from '../../commons/cookie'

import './AdminLayout.scss'

const { Content, Footer, Sider } = Layout

const { SubMenu } = Menu

class AdminLayout extends React.Component {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    const tdUsername = getCookie('td_username')
    const tdToken = getCookie('td_token')
    const tdUserId = getCookie('td_userid')
    const { history } = this.props
    // console.log('tdUsername = ', tdUsername)
    // console.log('tdToken = ', tdToken)
    // console.log('tdUserId = ', tdUserId)
    if (!tdUsername || !tdToken || !tdUserId) {
      console.log('未登入')
      this.openNotification()
      history.push('/login')
    }
  }

  openNotification = () => {
    notification.error({
      message: '請先登入',
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
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
    const { children, selectedKeys } = this.props
    const tdUsername = getCookie('td_username')

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" defaultSelectedKeys={['2']} selectedKeys={[selectedKeys]} mode="inline">
            <Menu.Item key="1" className="logoItem" style={{ height: 54 }}>
              <Link to="/result">
                <div className="logo">
                  <img src={logo} alt="logo" style={{ width: '30px', marginRight: '10px' }} />
                  Turing Digital
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to="/result">
                <LineChartOutlined />
                <span className="nav-text">推廣成效</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/setting">
                <SettingOutlined />
                <span className="nav-text">推薦產品</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/effect">
                <ProfileOutlined />
                <span className="nav-text">成效報告</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/admin/result">
                <LineChartOutlined />
                <span className="nav-text">管理者_推廣成效</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <SettingOutlined />
                  管理者_推薦產品
                </span>
              }
            >
              <Menu.Item key="11">
                <Link to="/admin/setting">
                  <SettingOutlined />
                  <span className="nav-text">管理者_新增產品</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/admin/refund">
                  <SettingOutlined />
                  <span className="nav-text">管理者_調整退傭</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="13">
              <Link to="/admin/effect">
                <ProfileOutlined />
                <span className="nav-text">管理者_成效報告</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header username={tdUsername} />
          <Content style={{ margin: '16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>© 2020 Turing Digital. All Rights Reserved</Footer>
        </Layout>
      </Layout>
    )
  }
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
  selectedKeys: PropTypes.string,
  history: PropTypes.object.isRequired,
}

export default withRouter(AdminLayout)
