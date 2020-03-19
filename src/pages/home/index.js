import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Index = () => (
  <div>
    <Link to="/user-admin">使用者後台</Link>
    <p>首頁</p>
  </div>
)

export default Index
