import React from 'react'
import { Form, Input, Button } from 'antd'

import './setting-content.scss'

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

const SettingContent = () => (
  <Form
    {...layout}
    name="basic"
    initialValues={{
      remember: true,
    }}
  >
    <div className="titleWrap">
      <h2>Please input your URL</h2>
    </div>
    <Form.Item
      label="URL"
      name="url"
      rules={[
        {
          required: true,
          message: 'Please input your URL!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button className="btn-setting" type="primary" htmlType="submit">
        Create
      </Button>
      <Button className="btn-setting" type="primary" htmlType="submit">
        Read
      </Button>
      <Button className="btn-setting" type="primary" htmlType="submit">
        Update
      </Button>
      <Button className="btn-setting" type="primary" htmlType="submit">
        Delete
      </Button>
    </Form.Item>
  </Form>
)

export default SettingContent
