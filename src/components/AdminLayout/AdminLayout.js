import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Layout, notification } from 'antd'
import NavLeft from '../NavLeft/NavLeft'
import Header from '../Header/Header'
import { setCookie, getCookie } from '../../commons/cookie'

import './AdminLayout.scss'

// todo
// 固定側邊欄
// 依照 role 顯示內容
// 設置 jwt

const { Content, Footer } = Layout

const AdminLayout = ({ children, selectedKeys, history }) => {
  // const { children, selectedKeys } = this.props
  const cookieUsername = getCookie('td_username')
  const cookieToken = getCookie('td_token')
  const cookieUserId = getCookie('td_userid')
  const cookieRole = getCookie('td_userrole')
  const cookieUser = JSON.parse(getCookie('td_user'))
  // const cookieUser = getCookie('td_user')
  console.log('cookieUser = ', cookieUser)
  // const [user, setUser] = useState(cookieUser)

  const fetchUser = useCallback(() => {
    const fetchUserLink = `https://utility.turingdigital.com.tw/v1/users/${cookieUserId}`

    console.log('fetchUserLink = ', fetchUserLink)

    axios
      .get(fetchUserLink)
      .then(function(response) {
        const { data } = response
        // console.log('user = ', user)
        // console.log('user data = ', data)
        // console.log('cookieUsername = ', cookieUsername)
        // console.log('user.username = ', cookieUser.username)
        // console.log('cookieUsername !== user.username = ', cookieUsername !== cookieUser.username)
        // console.log('cookieUserId = ', cookieUserId)
        // console.log('String(user.id) = ', String(cookieUser.id))
        // console.log('cookieUserId !== String(user.id) = ', cookieUserId !== String(cookieUser.id))
        // console.log('cookieRole = ', cookieRole)
        // console.log('user.role = ', cookieUser.role)
        // console.log('cookieRole !== user.role = ', cookieRole !== cookieUser.role)

        if (
          cookieUsername !== cookieUser.username ||
          cookieUserId !== String(cookieUser.id) ||
          cookieRole !== cookieUser.role
        ) {
          console.log('============= 更新 user data =============')
          // setUser(data)
          setCookie('td_user', JSON.stringify(data))
          setCookie('td_username', data.username)
          setCookie('td_userid', data.id)
          setCookie('td_userrole', data.role)
        }
      })
      .catch(function(error) {
        console.log(error)
      })
  }, [cookieRole, cookieUser.id, cookieUser.role, cookieUser.username, cookieUserId, cookieUsername])

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
    if (!cookieUsername || !cookieToken || !cookieUserId) {
      console.log('未登入')
      openNotification()
      history.push('/login')
    }

    fetchUser()
  }, [history, fetchUser, cookieUsername, cookieToken, cookieUserId])

  // const toggle = () => {
  //   setCollapsed(!collapsed)
  // }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavLeft user={cookieUser} selectedKeys={selectedKeys} />
      <Layout className="site-layout">
        <Header username={cookieUsername} />
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
