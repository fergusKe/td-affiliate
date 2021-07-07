import React, { useContext, useState, useEffect, useRef } from 'react'
import { Table, Input, InputNumber, Popconfirm, Form, Card, Col, Row, Button, Modal, Select, DatePicker } from 'antd'
import PropTypes from 'prop-types'

const originData = []

for (let i = 0; i < 100; i += 1) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

const EditableCell = ({ editing, dataIndex, title, inputType, children, ...restProps }) => {
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

class PromotOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '立即推廣' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd = () => {
    const { count, dataSource } = this.state
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <select
        value={value}
        onChange={this.handleChange}
        style={{
          color: '#1890ff',
          textDecoration: 'none',
          backgroundColor: 'transparent',
          outline: 'none',
          cursor: 'pointer',
          transition: 'color 0.3s',
          border: '0',
        }}
      >
        <option value="立即推廣">立即推廣</option>
        <option value="取消推廣">取消推廣</option>
        <option value="移除">移除</option>
      </select>
    )
  }
}

const AdminSettingTable = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = record => record.key === editingKey

  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
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
      title: '產品名稱',
      dataIndex: 'productName',
      key: 'productName',
      width: '20%',
      render: text => <a>{text}</a>,
      editable: true,
    },
    {
      title: '產品 ID',
      dataIndex: 'productId',
      key: 'productId',
      editable: true,
    },
    {
      title: '產品類別',
      dataIndex: 'productCategory',
      key: 'productCategory',
      editable: true,
    },
    {
      title: '店鋪名稱',
      dataIndex: 'shopName',
      key: 'shopName',
      editable: true,
    },
    {
      title: '佣金比例',
      dataIndex: 'bonusProportion',
      key: 'bonusProportion',
      editable: true,
    },
    {
      title: '目前售價',
      dataIndex: 'price',
      key: 'price',
      editable: true,
    },
    {
      title: '預估佣金',
      dataIndex: 'preBonus',
      key: 'preBonus',
      editable: true,
    },
    {
      title: '上架時間',
      dataIndex: 'date',
      key: 'date',
      editable: true,
    },
    {
      title: '商品狀態',
      dataIndex: 'productStatus',
      key: 'productStatus',
      editable: true,
    },
    {
      title: '商品操作',
      dataIndex: 'productOperat',
      key: 'productOperat',
      render: () => <PromotOption />,
      editable: true,
    },
    {
      title: '編輯',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <button
              className="button_save"
              type="button"
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
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })

  const totalData = [
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

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={totalData}
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
  index: PropTypes.number,
  children: PropTypes.array,
  restProps: PropTypes.string,
}

export default AdminSettingTable
