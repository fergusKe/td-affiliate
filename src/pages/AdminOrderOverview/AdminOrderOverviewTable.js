import React, { useState } from 'react'
import { Table, Divider, Popconfirm } from 'antd'

const AdminOrderOverviewTable = () => {
  const cancel = () => {
    console.log('cancel')
  }

  const columns = [
    {
      title: '推廣者',
      dataIndex: 'userName',
      key: 'userName',
      render: text => <a>{text}</a>,
    },
    {
      title: '訂單編號',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
      render: text => <a>{text}</a>,
    },
    {
      title: '標示碼',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '累積成交筆數',
      dataIndex: 'totalOrderNumber',
      key: 'totalOrderNumber',
    },
    {
      title: '累積成交金額',
      dataIndex: 'totalOrderAmount',
      key: 'totalOrderAmount',
    },
    {
      title: '狀態',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '訂單成立時間',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Popconfirm title="確定取消?" onConfirm={cancel}>
          <a>取消訂單</a>
        </Popconfirm>
      ),
    },
  ]
  const data = [
    {
      key: '1',
      userName: '00001',
      orderNumber: '00001',
      userId: 'lekfs343',
      totalOrderNumber: '23',
      totalOrderAmount: '799',
      status: '審核中',
      date: '2020-02-10',
    },
    {
      key: '2',
      userName: '00002',
      orderNumber: '00002',
      userId: 'jrjhk34khjfdsfkh',
      totalOrderNumber: '19',
      totalOrderAmount: '245',
      status: '已審核',
      date: '2020-03-04',
    },
    {
      key: '3',
      userName: '00003',
      orderNumber: '00003',
      userId: 'kfgf23h',
      totalOrderNumber: '9',
      totalOrderAmount: '783',
      status: '已退單',
      date: '2020-03-18',
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

  const [selectionType] = useState('checkbox')
  return (
    <div>
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

export default AdminOrderOverviewTable
