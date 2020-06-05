import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'antd'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const LinkTable = props => {
  const { dataSource, showCopySuccess } = props

  const columns = [
    {
      title: '商品',
      dataIndex: 'link',
      key: 'link',
      render: item => (
        <a href={item} target="_blank" rel="noopener noreferrer">
          {item}
        </a>
      ),
    },
    {
      title: '點擊次數',
      dataIndex: 'click',
      key: 'click',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (item, record) => (
        <span>
          <CopyToClipboard onCopy={showCopySuccess} text={record.link}>
            <Button style={{ marginRight: '10px' }}>複製網址</Button>
          </CopyToClipboard>
        </span>
      ),
    },
  ]

  return <Table style={{ marginTop: '20px' }} dataSource={dataSource} columns={columns}></Table>
}

LinkTable.propTypes = {
  dataSource: PropTypes.array.isRequired,
  showCopySuccess: PropTypes.func.isRequired,
}

export default LinkTable
