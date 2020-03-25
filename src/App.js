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
      {/* user-admin */}
      <Route exact path="/user-admin/overview" render={() => <Overview rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/setting" render={() => <Setting rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/report" render={() => <Report rolePath="/user-admin/" />} />
      {/* manager-admin */}
      <Route exact path="/manager-admin/overview" render={() => <Overview rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/setting" render={() => <Setting rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/report" render={() => <Report rolePath="/manager-admin/" />} />
    </Switch>
  </BrowserRouter>
)

export default App
