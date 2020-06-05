import React from 'react'
import { Form, Input, Button, Typography, notification } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { TweenMax, Power3, gsap } from 'gsap'
// import Alert from '../../components/Alert/Alert'
import { setCookie } from '../../commons/cookie'

import './Sign.scss'

// gsap.registerPlugin(CSSPlugin)

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

const Sign = () => {
  const history = useHistory()

  const openNotification = (type, message) => {
    notification[type]({
      message,
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  // const hideAlert = e => {
  //   console.log('hideAlert')
  //   console.log('this is:', e)
  //   console.log('this is:', e.target)
  //   const ele = e.target
  //   gsap.to(ele, 0.3, {
  //     opacity: 0,
  //     y: -50,
  //     ease: Power3.easeIn,
  //     onComplete() {
  //       gsap.to(ele, 0.5, { display: 'none' })
  //     },
  //   })
  // }

  const goToAdmin = () => {
    history.push('/promotion-overview')
  }

  const onFinish = (values, e) => {
    console.log('Received values of form: ', values)
    console.log('e = ', e)
    const { username, password } = values

    // 註冊
    axios
      .post('https://utility.turingdigital.com.tw/v1/users', {
        username,
        password,
        // role: 1,
      })
      .then(res => {
        console.log(res)
        // 註冊成功
        if (res.status === 201) {
          console.log('註冊成功')
          const tdUsername = res.data.username
          const tdToken = res.data.token
          const tdUserId = res.data.user_id
          console.log('tdUsername = ', tdUsername)
          console.log('tdToken = ', tdToken)
          console.log('tdUserId = ', tdUserId)
          setCookie('td_username', tdUsername)
          setCookie('td_token', tdToken)
          setCookie('td_userid', tdUserId)
          openNotification('success', '登入成功')
          goToAdmin()
        }
      })
      .catch(error => {
        console.log('註冊失敗')
        const errorInfo = JSON.parse(error.response.request.response)
        console.log(errorInfo)
        errorInfo.errors.forEach(message => {
          openNotification('error', message)
        })
        // setErrorMsg(errorInfo.errors)
        // showAlert(errorInfo)
      })
  }

  return (
    <div className="sign-wrap">
      {/* <div className="alert-box">
        {errorMsg.map((msg, idx) => (
          <Alert
            key={msg}
            idx={idx}
            msg={msg}
            topStyle={{ top: `${idx * 40}px` }}
            // showAlert={showAlert}
            hideAlert={hideAlert}
          />
        ))}
      </div> */}
      <Form
        {...layout}
        style={{ transform: 'translate(0, 60%)' }}
        name="basic"
        fields={[
          {
            name: ['username'],
            value: '',
          },
          {
            name: ['password'],
            value: '',
          },
        ]}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {/* <Nav></Nav> */}
        <div className="titleWrap">
          <Title>Turing digital</Title>
          <h2>註冊會員</h2>
        </div>
        <Form.Item
          label="帳號"
          name="username"
          rules={[
            {
              required: true,
              message: '帳號錯誤',
            },
          ]}
        >
          <Input placeholder="請輸入帳號" />
        </Form.Item>

        <Form.Item
          label="密碼"
          name="password"
          rules={[
            {
              required: true,
              message: '密碼錯誤',
            },
          ]}
        >
          <Input.Password placeholder="請輸入密碼" />
        </Form.Item>

        <Form.Item {...tailLayout} style={{ marginTop: '20px' }}>
          <Button type="primary" htmlType="submit">
            註冊
          </Button>
          <Link to="/" style={{ marginLeft: '20px' }}>
            <Button>登入</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Sign
