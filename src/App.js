import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import UserAdmin from './pages/userAdmin'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/user-admin" component={UserAdmin} />
  </BrowserRouter>
)

export default App
