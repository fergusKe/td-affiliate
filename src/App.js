import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import Report from './pages/report/report'

// const tdPath = '/affiliate'
const tdPath = ''

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* user-admin */}
      <Route path={`${tdPath}/user-admin/overview`} render={() => <Overview rolePath="/user-admin/" />} />
      <Route path={`${tdPath}/user-admin/setting`} render={() => <Setting rolePath="/user-admin/" />} />
      <Route path={`${tdPath}/user-admin/report`} render={() => <Report rolePath="/user-admin/" />} />
      {/* manager-admin */}
      <Route exact path={`${tdPath}/manager-admin/overview`} render={() => <Overview rolePath="/manager-admin/" />} />
      <Route exact path={`${tdPath}/manager-admin/setting`} render={() => <Setting rolePath="/manager-admin/" />} />
      <Route exact path={`${tdPath}/manager-admin/report`} render={() => <Report rolePath="/manager-admin/" />} />
    </Switch>
  </HashRouter>
)

export default App
