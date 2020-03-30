import React from 'react'
import { Input, Modal, AutoComplete } from 'antd'
import './setting-content.scss'

const { Search } = Input

const options = [
  {
    value: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
  },
  {
    value: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
  },
  {
    value: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
  },
]

function showCopySuccess() {
  console.log('showCopySuccess')
  Modal.success({
    title: '複製網址',
    content: '已成功複製商品網址',
  })
}

const SettingContent = () => (
  <div>
    <h2>分享您的推廣連結:</h2>
    <Search
      placeholder=""
      enterButton="複製連結"
      size="large"
      defaultValue="https://www.pinkoi.com/?affiliate=turingdigital"
      onSearch={showCopySuccess}
    />
    <hr style={{ margin: '40px 0 30px' }} />
    <h2>分享特定產品連結:</h2>
    <h3>搜尋想分享的產品</h3>
    <AutoComplete
      style={{
        width: '100%',
      }}
      options={options}
      filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    >
      <Input.Search size="large" placeholder="請輸入想搜尋的產品名稱或網址" enterButton />
    </AutoComplete>
  </div>
)

export default SettingContent
