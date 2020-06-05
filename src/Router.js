import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Sign from './pages/Sign/Sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/Overview/Overview'
import Setting from './pages/Setting/Setting'
import Result from './pages/Result/Result'
import Effect from './pages/Effect/Effect'
import Order from './pages/Order/Order'
import Record from './pages/Record/Record'
import ReportCart from './pages/ReportCart/ReportCart'
import Report from './pages/Report/Report'
import MemberReport from './pages/MemberReport/MemberReport'
import User from './pages/User/User'

import AdminResult from './pages/AdminResult/AdminResult'
import AdminSetting from './pages/AdminSetting/AdminSetting'
import AdminRefund from './pages/AdminRefund/AdminRefund'
import AdminOrder from './pages/AdminOrder/AdminOrder'
import AdminCollect from './pages/AdminCollect/AdminCollect'

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
      <Route exact path="/report-cart" render={() => <ReportCart />} />
      <Route exact path="/report" render={() => <Report />} />
      <Route exact path="/member-report" render={() => <MemberReport />} />
      <Route exact path="/user" render={() => <User />} />
      {/* admin */}
      <Route exact path="/admin/result" render={() => <AdminResult />} />
      <Route exact path="/admin/setting" render={() => <AdminSetting />} />
      <Route exact path="/admin/refund" render={() => <AdminRefund />} />
      <Route exact path="/admin/order" render={() => <AdminOrder />} />
      <Route exact path="/admin/collect" render={() => <AdminCollect />} />
    </Switch>
  </HashRouter>
)

export default Router
