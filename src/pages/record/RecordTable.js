import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: '申請獎金時間',
    dataIndex: 'applicationTime',
    key: 'applicationTime',
  },
  {
    title: '當月申請金額',
    dataIndex: 'application',
    key: 'application',
  },
  {
    title: '匯款手續費',
    dataIndex: 'fee',
    key: 'fee',
  },
  {
    title: '應付稅金(10%)',
    dataIndex: 'tax',
    key: 'tax',
  },
  {
    title: '二代健保(1.91%)',
    dataIndex: 'insurance',
    key: 'insurance',
  },
  {
    title: '捐款',
    dataIndex: 'donate',
    key: 'donate',
  },
  {
    title: '實際領取金額',
    dataIndex: 'bonus',
    key: 'bonus',
  },
  {
    title: '支付狀態',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
  },
  {
    title: '備註',
    dataIndex: 'remarks',
    key: 'remarks',
  },
]

const data = [
  {
    key: '1',
    applicationTime: '2020-01-01',
    application: 1299,
    fee: 10,
    tax: 13,
    insurance: 0,
    donate: 0,
    bonus: 1276,
    paymentStatus: '已支付',
    remarks: '',
  },
  {
    key: '2',
    applicationTime: '2020-01-05',
    application: 799,
    fee: 10,
    tax: 13,
    insurance: 0,
    donate: 0,
    bonus: 776,
    paymentStatus: '已支付',
    remarks: '',
  },
  {
    key: '3',
    applicationTime: '2020-01-10',
    application: 3699,
    fee: 10,
    tax: 13,
    insurance: 0,
    donate: 0,
    bonus: 3676,
    paymentStatus: '已支付',
    remarks: '',
  },
]

const RecordTable = () => (
  <div style={{ marginTop: '30px' }}>
    <Table columns={columns} dataSource={data} />
  </div>
)

export default RecordTable
