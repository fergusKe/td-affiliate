import React, { useState } from 'react'
import { Form, Input, Select, Button, AutoComplete } from 'antd'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 8,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const User = () => {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="886">+886</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`))
    }
  }

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }))

  return (
    <div>
      <AdminLayout selectedKeys="6">
        <Form
          {...formItemLayout}
          form={form}
          name="userAccount"
          onFinish={onFinish}
          fields={[
            {
              name: ['username'],
              value: 'username',
            },
            {
              name: ['nickname'],
              value: 'nickname',
            },
            {
              name: ['email'],
              value: 'email@gmail.com',
            },
            {
              name: ['password'],
              value: 'password',
            },
            {
              name: ['phone'],
              value: '987654321',
            },
          ]}
          initialValues={{
            prefix: '886',
          }}
          scrollToFirstError
        >
          <div>
            <h2>修改帳戶資訊</h2>
          </div>
          <Form.Item name="username" label="帳號">
            <Input />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="匿名"
            rules={[
              {
                required: false,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="信箱"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: false,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密碼"
            rules={[
              {
                required: false,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="確認密碼"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: false,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }

                  return Promise.reject`('The two passwords that you entered do not match!')`
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="電話"
            rules={[
              {
                required: false,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="website"
            label="網站"
            rules={[
              {
                required: false,
                message: 'Please input website!',
              },
            ]}
          >
            <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
              <Input />
            </AutoComplete>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              更新帳戶資訊
            </Button>
          </Form.Item>
        </Form>
      </AdminLayout>
    </div>
  )
}

export default User
