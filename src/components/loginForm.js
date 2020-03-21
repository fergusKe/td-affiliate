import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Nav from './nav'

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
    initialValues={{
      remember: true,
    }}
  >
    <Nav></Nav>
    <div className="titleWrap">
      <Title>Turing digital</Title>
      <h2>Sign in to InVision</h2>
    </div>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        <Link to="/user-admin">Submit</Link>
      </Button>
    </Form.Item>
  </Form>
)

export default loginForm
