import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Menu, Avatar, notification } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { removeCookie } from '../../commons/cookie'

const { SubMenu } = Menu

function Header(props) {
  const [current, setCurrent] = useState('')
  const { username, history } = props

  const openNotification = (type, message) => {
    notification[type]({
      message,
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  const logout = () => {
    removeCookie('td_username')
    removeCookie('td_token')
    removeCookie('td_userid')
    openNotification('success', '登出成功')
    history.push('/login')
  }

  const handleClick = e => {
    const { key } = e

    if (key === 'logout') {
      logout()
      setCurrent('')
      return
    }

    setCurrent(key)
  }
  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ textAlign: 'right', height: '52px', padding: '3px 0', paddingRight: '20px' }}
    >
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Avatar size="small" icon={<UserOutlined />} style={{ cursor: 'pointer', marginRight: '10px' }} />
            {username}
          </span>
        }
      >
        <Menu.Item key="logout">登出</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(Header)
