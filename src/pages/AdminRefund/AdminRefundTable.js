import React, { useState } from 'react'
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd'

import PropTypes from 'prop-types'

const originData = [
  {
    key: 1,
    grade: '普通分銷員',
    gradeRule: '默認成為分銷員後極為該等級',
    rate: `${5}`,
  },
]

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  console.log('editing = ', editing)
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const AdminSettingTable = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = record => record.key === editingKey

  const edit = record => {
    form.setFieldsValue({
      grade: '',
      gradeRule: '',
      rate: '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const save = async key => {
    try {
      const row = await form.validateFields()
      const newData = [...data]
      const index = newData.findIndex(item => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const columns = [
    {
      key: 'grade',
      title: '等級名',
      dataIndex: 'grade',
      editable: true,
    },
    {
      key: 'gradeRule',
      title: '升級規則',
      dataIndex: 'gradeRule',
      editable: true,
    },
    {
      key: 'rate',
      title: '佣金比例 (%)',
      dataIndex: 'rate',
      editable: true,
    },
    {
      key: 'operation',
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <button
              // role="button"
              className="button_save"
              type="submit"
              onClick={() => save(record.key)}
              onKeyPress={() => save(record.key)}
              style={{
                marginRight: 8,
                color: '#1890ff',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s',
                border: '0',
              }}
            >
              儲存
            </button>
            <Popconfirm title="確定取消?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <button
            className="button_edit"
            type="button"
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
            onKeyPress={() => edit(record)}
            style={{
              marginRight: 8,
              color: '#1890ff',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              transition: 'color 0.3s',
              border: '0',
            }}
          >
            編輯
          </button>
        )
      },
    },
  ]
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'rate' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}

EditableCell.propTypes = {
  editing: PropTypes.bool,
  dataIndex: PropTypes.string,
  title: PropTypes.string,
  inputType: PropTypes.string,
  record: PropTypes.object,
  index: PropTypes.string,
  children: PropTypes.array,
}

export default AdminSettingTable
