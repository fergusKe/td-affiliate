import React from 'react'
import { Menu, Button } from 'antd'

class SideBar extends React.Component {
  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}></Button>
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
          <Menu.Item key="1">
            <span>總覽</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>設定</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>報表</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default SideBar
