import React, { useEffect, useRef, useState } from 'react'
import { Form, Input, Button, Checkbox, Typography, notification } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { TweenMax, Power3, gsap } from 'gsap'
import Alert from '../../components/Alert/Alert'
import { setCookie, getCookie } from '../../commons/cookie'

import './login.scss'

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

const Login = () => {
  const history = useHistory()

  const [errorMsg, setErrorMsg] = useState([])

  // useEffect(() => {
  //   const tdUser = getCookie('td_user')
  //   const tdJwt = getCookie('td_jwt')
  //   console.log('tdUser = ', tdUser)
  //   console.log('tdJwt = ', tdJwt)
  // }, [])

  const openNotification = (type, message) => {
    notification[type]({
      message,
      description: '',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  const goToAdmin = () => {
    history.push('/setting')
  }

  const onFinish = values => {
    console.log('Received values of form: ', values)
    const { username, password } = values

    // axios.get('http://utility.turingdigital.com.tw/users').then(data => {
    //   console.log(data)
    // })

    // 登入
    axios
      .post('http://utility.turingdigital.com.tw/auth/login', {
        username,
        password,
        // role: 1,
      })
      .then(res => {
        console.log(res)
        // 註冊成功
        if (res.status === 200) {
          console.log('登入成功')
          const tdUser = res.data.username
          const tdJwt = res.data.token
          console.log('tdUser = ', tdUser)
          console.log('tdJwt = ', tdJwt)
          setCookie('td_user', tdUser)
          setCookie('td_jwt', tdJwt)
          openNotification('success', '登入成功')
          goToAdmin()
        }
      })
      .catch(error => {
        console.log('登入失敗')
        const errorInfo = JSON.parse(error.response.request.response)
        console.log(errorInfo)
        errorInfo.errors.forEach(message => {
          openNotification('error', message)
        })
        // setErrorMsg(errorInfo.errors)
        // showAlert(errorInfo)
      })
  }

  const hideAlert = e => {
    console.log('hideAlert')
    console.log('this is:', e)
    console.log('this is:', e.target)
    const ele = e.target
    gsap.to(ele, 0.3, {
      opacity: 0,
      y: -50,
      ease: Power3.easeIn,
      onComplete() {
        gsap.to(ele, 0.5, { display: 'none' })
      },
    })
  }

  return (
    <div className="login-wrap">
      <div className="alert-box">
        {errorMsg.map((msg, idx) => (
          <Alert
            key={msg}
            idx={idx}
            msg={msg}
            topStyle={{ top: `${idx * 40}px` }}
            // showAlert={showAlert}
            hideAlert={hideAlert}
            // ref={el => (alertRef = el)}
          />
        ))}
      </div>
      <Form
        {...layout}
        style={{ transform: 'translate(0, 50%)' }}
        name="basic"
        fields={[
          {
            name: ['username'],
            value: 'user1',
          },
          {
            name: ['password'],
            value: '123456',
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
          <h2>登入系統</h2>
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
          <Button type="primary" htmlType="submit">
            登入
          </Button>
          <Link to="/sign" style={{ marginLeft: '20px' }}>
            <Button>註冊</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
