import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Sign from './pages/sign/sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/overview/overview'
import Setting from './pages/setting/setting'
import Result from './pages/result/result'
import Effect from './pages/effect/effect'
import Order from './pages/order/order'
import Record from './pages/record/record'
import ReportCart from './pages/reportCart/reportCart'
import Report from './pages/report/report'
import MemberReport from './pages/member-report/member-report'
import User from './pages/user/user'

import AdminResult from './pages/admin_result/admin_result'
import AdminSetting from './pages/admin_setting/admin_setting'
import AdminEffect from './pages/admin_effect/admin_effect'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={Sign} />
      {/* user */}
      <Route exact path="/result" render={() => <Result />} />
      <Route exact path="/setting" render={() => <Setting />} />
      <Route exact path="/effect" render={() => <Effect />} />
      <Route exact path="/overview" render={() => <Overview />} />
      <Route exact path="/order" render={() => <Order />} />
      <Route exact path="/record" render={() => <Record />} />
      <Route exact path="/reportCart" render={() => <ReportCart />} />
      <Route exact path="/report" render={() => <Report />} />
      <Route exact path="/member-report" render={() => <MemberReport />} />
      <Route exact path="/user" render={() => <User />} />
      {/* admin */}
      <Route exact path="/admin/result" render={() => <AdminResult />} />
      <Route exact path="/admin/setting" render={() => <AdminSetting />} />
      <Route exact path="/admin/effect" render={() => <AdminEffect />} />
    </Switch>
  </HashRouter>
)

export default Router
