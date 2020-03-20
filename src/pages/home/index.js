import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../components/loginForm'

import './index.scss'
import NormalUser from '../../components/normalUser'

const Index = () => (
  <div>
    <Link to="/user-admin">使用者後台</Link>
    <p>首頁</p>
    <LoginForm></LoginForm>
    <NormalUser></NormalUser>
  </div>
)

export default Index
