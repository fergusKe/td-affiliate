import React from 'react'
import { Menu } from 'antd'

class Nav extends React.Component {
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="homePage">HomePage</Menu.Item>
        <Menu.Item key="userAdmin">UserAdmin</Menu.Item>
      </Menu>
    )
  }
}

export default Nav
