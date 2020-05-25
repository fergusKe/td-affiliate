import React, { useState } from 'react'
import { Table, Radio, Divider } from 'antd'

const columns = [
  {
    title: '產品名稱',
    dataIndex: 'productName',
    key: 'productName',
    render: text => <a>{text}</a>,
  },
  {
    title: '產品 ID',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: '產品類別',
    dataIndex: 'productCategory',
    key: 'productCategory',
  },
  {
    title: '店鋪名稱',
    dataIndex: 'shopName',
    key: 'shopName',
  },
  {
    title: '佣金比例',
    dataIndex: 'bonusProportion',
    key: 'bonusProportion',
  },
  {
    title: '目前售價',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '預估佣金',
    dataIndex: 'preBonus',
    key: 'preBonus',
  },
  {
    title: '上架時間',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '商品狀態',
    dataIndex: 'productStatus',
    key: 'productStatus',
  },
  {
    title: '商品操作',
    dataIndex: 'productOperat',
    key: 'productOperat',
  },
]

const data = [
  {
    key: '1',
    productName: '【水哦X果貿吳媽家】獨家聯名－千歲豬腳麵線禮盒★限量組數',
    productId: 'djk334',
    productCategory: '豬腳麵線禮盒',
    shopName: '水哦X果貿吳媽家',
    bonusProportion: '5%',
    price: 'NT 399',
    preBonus: 'NT 59',
    date: '2020-01-01',
    productStatus: '未上架',
    productOperat: '立即推廣',
  },
  {
    key: '2',
    productName: '【果貿吳媽家】❤愛的美味 海陸雙拼組',
    productId: 'jsd234',
    productCategory: '海陸雙拼組',
    shopName: '果貿吳媽家',
    bonusProportion: '5%',
    price: 'NT 599',
    preBonus: 'NT 59',
    date: '2020-01-05',
    productStatus: '未上架',
    productOperat: '立即推廣',
  },
  {
    key: '3',
    productName: '【果貿吳媽家】小資必買 首購嚐鮮最超值',
    productId: 'rwe324',
    productCategory: '小資必買',
    shopName: '果貿吳媽家',
    bonusProportion: '5%',
    price: 'NT 599',
    preBonus: 'NT 59',
    date: '2020-01-12',
    productStatus: '未上架',
    productOperat: '立即推廣',
  },
]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
}

const AdminSettingTable = () => {
  const [selectionType, setSelectionType] = useState('checkbox')
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}
      >
        {/* <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio> */}
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default AdminSettingTable
