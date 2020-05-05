import React from 'react'
import { Table, Modal, Button } from 'antd'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import SettingContent from './setting-content'

const { Column } = Table

const data = [
  {
    key: '1',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    price: 1099,
    revenue: 120,
  },
  {
    key: '2',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    price: 510,
    revenue: 82,
  },
  {
    key: '3',
    name: '掌心包 - 矽吸管',
    price: 320,
    revenue: 42,
  },
  {
    key: '4',
    name: '復古赫本大衣 - 褐',
    price: 2880,
    revenue: 450,
  },
  {
    key: '5',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    price: 290,
    revenue: 63,
  },
]

function showCopySuccess() {
  Modal.success({
    title: '複製網址',
    content: '已成功複製商品網址',
  })
}

const Setting = () => (
  <div>
    <AdminLayout selectedKeys="3">
      <div
        style={{
          margin: '0 auto',
          maxWidth: '800px',
        }}
      >
        <SettingContent />
        <Table style={{ marginTop: '20px' }} dataSource={data}>
          <Column title="商品" dataIndex="name" key="name" />
          <Column title="售價" dataIndex="price" key="price" />
          <Column title="分潤" dataIndex="revenue" key="revenue" />
          <Column
            title=""
            key="action"
            render={() => (
              <span>
                <Button style={{ marginRight: '10px' }} onClick={showCopySuccess}>
                  複製網址
                </Button>
              </span>
            )}
          />
        </Table>
      </div>
    </AdminLayout>
  </div>
)

export default Setting
