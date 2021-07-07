import React, { useContext, useState, useEffect, useRef } from 'react'
import { Card, Col, Row, Button, Modal, Form, Input, Select, DatePicker, InputNumber, Table, Popconfirm } from 'antd'
import AdminProductLaunchTable from './AdminProductLaunchTable'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

const FormSizeDemo = () => (
  <div>
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 18,
      }}
      layout="horizontal"
    >
      <Form.Item label="產品名稱">
        <Input />
      </Form.Item>
      <Form.Item label="產品 ID">
        <Input />
      </Form.Item>
      <Form.Item label="產品類別">
        <Input />
      </Form.Item>
      <Form.Item label="店鋪名稱">
        <Input />
      </Form.Item>
      <Form.Item label="佣金比例">
        <InputNumber /> %
      </Form.Item>
      <Form.Item label="目前售價">
        <InputNumber /> 元
      </Form.Item>
      <Form.Item label="預估佣金">
        <InputNumber /> 元
      </Form.Item>
      <Form.Item label="上架時間">
        <DatePicker />
      </Form.Item>
      <Form.Item label="商品狀態">
        <Select>
          <Select.Option value="demo">未上架</Select.Option>
          <Select.Option value="demo">已上架</Select.Option>
          <Select.Option value="demo">移除</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  </div>
)

class AddNewProduct extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false,
    })
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          上架產品
        </Button>
        <Modal title="編輯產品資訊" visible={visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <FormSizeDemo />
        </Modal>
      </div>
    )
  }
}

const AdminProductLaunch = () => (
  <div>
    <AdminLayout selectedKeys="11">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card bordered={false} style={{ minheight: '700px', paddingLeft: '10px' }}>
            <h1>新增產品</h1>
            <div style={{ display: 'flex', margin: '30px 0' }}>
              <AddNewProduct />
            </div>
            <AdminProductLaunchTable />
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  </div>
)

export default AdminProductLaunch
