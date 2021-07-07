import React, { useState } from 'react'
import { Table, Divider, Button } from 'antd'

const AdminOrderDetailsTable = () => {
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
      title: '月份',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: '推廣總額',
      dataIndex: 'promoteAmount',
      key: 'promoteAmount',
    },
    {
      title: '總佣金',
      dataIndex: 'totalBonus',
      key: 'totalBonus',
    },
    {
      title: '狀態',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '銀行代碼',
      dataIndex: 'swiftCode',
      key: 'swiftCode',
    },
    {
      title: '戶名',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: '銀行帳戶',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: '備註',
      dataIndex: 'marks',
      key: 'marks',
    },
  ]
  const data = [
    {
      key: '1',
      userName: '00001',
      orderNumber: '00001',
      month: '2020-02',
      promoteAmount: '355',
      totalBonus: '35',
      status: '已確認',
      swiftCode: '001',
      accountName: '張曉明',
      account: '3678-3789-4738',
      marks: '無相關備註',
    },
    {
      key: '2',
      orderNumber: '00002',
      userName: '00002',
      month: '2020-02',
      promoteAmount: '2999',
      totalBonus: '299',
      status: '已確認',
      swiftCode: '007',
      accountName: '陳曉明',
      account: '3434-6767-6767',
      marks: '無相關備註',
    },
    {
      key: '3',
      userName: '00003',
      orderNumber: '00003',
      month: '2020-02',
      promoteAmount: '457',
      totalBonus: '45',
      status: '待確認',
      swiftCode: '812',
      accountName: '王曉明',
      account: '4340-6565-6767',
      marks: '無相關備註',
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
      <div>
        <Button type="primary">匯出報表</Button>
      </div>
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

export default AdminOrderDetailsTable
