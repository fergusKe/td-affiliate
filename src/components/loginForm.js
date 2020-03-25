import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { Link } from 'react-router-dom'

import './loginForm.scss'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const { Title } = Typography

const loginForm = () => (
  <Form
    {...layout}
    name="basic"
    fields={[
      {
        name: ['username'],
        value: 'username',
      },
      {
        name: ['password'],
        value: 'password',
      },
    ]}
    initialValues={{
      remember: false,
    }}
  >
    {/* <Nav></Nav> */}
    <div className="titleWrap">
      <Title>Turing digital</Title>
      <h2>Sign in to InVision</h2>
    </div>
    <Form.Item
      label="帳號"
      name="username"
      rules={[
        {
          required: true,
          message: '請輸入帳號',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密碼"
      name="password"
      rules={[
        {
          required: true,
          message: '請輸入密碼',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>記住資訊</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Link to="/user-admin/overview">
        <Button type="primary" htmlType="submit">
          登入
        </Button>
      </Link>
      {/* <Link to="/manager-admin/overview">
        <Button type="primary" htmlType="submit" style={{ marginLeft: '20px' }}>
          manager-admin
        </Button>
      </Link> */}
    </Form.Item>
  </Form>
)

export default loginForm
