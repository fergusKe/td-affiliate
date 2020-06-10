import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Layout, notification } from 'antd'
import NavLeft from '../NavLeft/NavLeft'
import Header from '../Header/Header'
import { getCookie } from '../../commons/cookie'

import './AdminLayout.scss'

// todo
// 固定側邊欄
// 依照 role 顯示內容
// 設置 jwt

const { Content, Footer } = Layout

const AdminLayout = ({ children, selectedKeys, history }) => {
  const [user, setUser] = useState({})

  // const { children, selectedKeys } = this.props
  const username = getCookie('td_username')
  const token = getCookie('td_token')
  const userId = getCookie('td_userid')

  const fetchUser = useCallback(() => {
    const fetchUserLink = `https://utility.turingdigital.com.tw/v1/users/${userId}`

    console.log('fetchUserLink = ', fetchUserLink)

    axios
      .get(fetchUserLink)
      .then(function(response) {
        console.log('response = ', response)
        const { data } = response
        setUser(data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [userId])

  const openNotification = () => {
    notification.error({
      message: '請先登入',
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  useEffect(() => {
    if (!username || !token || !userId) {
      console.log('未登入')
      openNotification()
      history.push('/login')
    }

    fetchUser()
  }, [history, fetchUser, username, token, userId])

  // const toggle = () => {
  //   setCollapsed(!collapsed)
  // }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavLeft user={user} selectedKeys={selectedKeys} />
      <Layout className="site-layout">
        <Header username={username} />
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2020 Turing Digital. All Rights Reserved</Footer>
      </Layout>
    </Layout>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
  selectedKeys: PropTypes.string,
  history: PropTypes.object.isRequired,
}

export default withRouter(AdminLayout)
