import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Sign from './pages/sign/sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import ReportCart from './pages/reportCart/reportCart'
import Report from './pages/report/report'
import MemberReport from './pages/member-report/member-report'
import User from './pages/user/user'

import 'antd/dist/antd.css'
import './App.scss'

// const tdPath = '/affiliate'
// const tdPath = ''

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={Sign} />
      {/* user-admin */}
      <Route exact path="/user-admin/overview" render={() => <Overview rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/setting" render={() => <Setting rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/reportCart" render={() => <ReportCart rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/report" render={() => <Report rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/member-report" render={() => <MemberReport rolePath="/user-admin/" />} />
      <Route exact path="/user-admin/user" render={() => <User rolePath="/user-admin/" />} />
      {/* manager-admin */}
      <Route exact path="/manager-admin/overview" render={() => <Overview rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/setting" render={() => <Setting rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/reportCart" render={() => <ReportCart rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/report" render={() => <Report rolePath="/manager-admin/" />} />
      <Route exact path="/manager-admin/user" render={() => <User rolePath="/manager-admin/" />} />
    </Switch>
  </HashRouter>
)

export default App
