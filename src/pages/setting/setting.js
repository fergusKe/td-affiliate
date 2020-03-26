import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Button } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import LayoutWrapper from '../../components/layoutWrapper'
import SettingContent from './setting-content'

const { Column } = Table
const { confirm } = Modal

function showCopySuccess() {
  Modal.success({
    title: '複製網址',
    content: '已成功複製商品網址',
  })
}

function showDeleteConfirm() {
  confirm({
    title: '刪除項目',
    icon: <ExclamationCircleOutlined />,
    content: '確認要刪除這個項目嗎?',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}

const columns = [
  {
    title: '商品',
    dataIndex: 'name',
    sorter: (a, b) => {
      const stringA = a.name.toUpperCase() // ignore upper and lowercase
      const stringB = b.name.toUpperCase() // ignore upper and lowercase
      if (stringA < stringB) {
        return -1
      }
      if (stringA > stringB) {
        return 1
      }
      // names must be equal
      return 0
    },
    render: (text, record) => (
      <a target="_blank" href={record.link} rel="noreferrer noopener">
        {record.name}
      </a>
    ),
  },
  {
    title: '售價',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '分潤',
    dataIndex: 'revenue',
    sorter: (a, b) => a.revenue - b.revenue,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: '',
    dataIndex: 'action',
    render: () => (
      <span>
        <Button style={{ marginRight: '10px' }} onClick={showCopySuccess}>
          複製網址
        </Button>
        <Button onClick={showDeleteConfirm}>Delete</Button>
      </span>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'KableCARD 都市生存卡(白) 搞定充電所有事 城市生存必備',
    link: 'https://www.pinkoi.com/product/GCdrYFSU?category=11&ref_itemlist=MsxZRDx2',
    price: 1099,
    revenue: 120,
  },
  {
    key: '2',
    name: '街頭側背包 斜背包 旅行包 小包 男女 穿搭 日常 禮物 推薦 S.Y.E',
    link: 'https://www.pinkoi.com/product/3JNC5cPR?category=1&ref_itemlist=tTtWsrXC',
    price: 510,
    revenue: 82,
  },
  {
    key: '3',
    name: '掌心包 - 矽吸管',
    link: 'https://www.pinkoi.com/product/7Z3NW9nu?category=13&ref_itemlist=qRbLyb9c',
    price: 320,
    revenue: 42,
  },
  {
    key: '4',
    name: '復古赫本大衣 - 褐',
    link: 'https://www.pinkoi.com/product/MQb4keGn?category=0&ref_itemlist=cza9P3cK',
    price: 2880,
    revenue: 450,
  },
  {
    key: '5',
    name: '手作 L型口袋小錢包 L型拉鍊短夾 新年 生日 情人節禮物 2020',
    link: 'https://www.pinkoi.com/product/mc6pVevG?category=1&ref_itemlist=V5ZaKjat',
    price: 290,
    revenue: 63,
  },
]

const Setting = props => {
  const { rolePath } = props

  return (
    <div>
      <LayoutWrapper rolePath={rolePath} selectedKeys="3">
        <div
          style={{
            margin: '0 auto',
            maxWidth: '800px',
          }}
        >
          <SettingContent />
          <Table columns={columns} style={{ marginTop: '20px' }} dataSource={data}>
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
                  <Button onClick={showDeleteConfirm}>Delete</Button>
                </span>
              )}
            />
          </Table>
        </div>
      </LayoutWrapper>
    </div>
  )
}

Setting.propTypes = {
  rolePath: PropTypes.string.isRequired,
}

export default Setting
