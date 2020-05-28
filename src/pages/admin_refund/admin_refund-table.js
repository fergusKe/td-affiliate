import React from 'react'
import { Table, Tag } from 'antd'

const AdminSettingTable = () => {
  const columns = [
    {
      title: '等級名',
      dataIndex: 'grade',
      key: 'grade',
      render: text => <a>{text}</a>,
    },
    {
      title: '升級規則',
      dataIndex: 'upgradeRules',
      key: 'upgradeRules',
    },
    {
      title: '佣金比例',
      dataIndex: 'gradeBenefit',
      key: 'gradeBenefit',
    },
  ]

  const data = [
    {
      key: '1',
      grade: '普通分銷員',
      upgradeRules: '默認成為分銷員後即為此等級',
      gradeBenefit: '5%',
    },
  ]

  return <Table columns={columns} dataSource={data} />
}

export default AdminSettingTable
