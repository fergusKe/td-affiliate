import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Sign from './pages/sign/sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import Result from './pages/result/result'
import Effect from './pages/effect/effect'
import ReportCart from './pages/reportCart/reportCart'
import Report from './pages/report/report'
import MemberReport from './pages/member-report/member-report'
import User from './pages/user/user'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={Sign} />
      {/* admin */}
      <Route exact path="/overview" render={() => <Overview />} />
      <Route exact path="/setting" render={() => <Setting />} />
      <Route exact path="/result" render={() => <Result />} />
      <Route exact path="/effect" render={() => <Effect />} />
      <Route exact path="/reportCart" render={() => <ReportCart />} />
      <Route exact path="/report" render={() => <Report />} />
      <Route exact path="/member-report" render={() => <MemberReport />} />
      <Route exact path="/user" render={() => <User />} />
    </Switch>
  </HashRouter>
)

export default Router
