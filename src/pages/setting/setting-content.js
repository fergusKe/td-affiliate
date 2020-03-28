import React from 'react'
import { Input } from 'antd'
import './setting-content.scss'

const { Search } = Input

const SettingContent = () => (
  <div>
    <h3>請輸入網址產生您的聯盟行銷連結</h3>
    <Search
      placeholder="請輸入 pinkoi 商品網址"
      enterButton="輸入"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>
)

export default SettingContent
