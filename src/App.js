import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import Report from './pages/report/report'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/user-admin/overview" component={UserAdmin} /> */}
      <Route exact path="/user-admin/overview" component={Overview} />
      <Route exact path="/user-admin/setting" component={Setting} />
      <Route exact path="/user-admin/report" component={Report} />
    </Switch>
  </BrowserRouter>
)

export default App
