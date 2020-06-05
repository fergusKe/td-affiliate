import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Sign from './pages/Sign/Sign'
// import UserAdmin from './pages/userAdmin'
import Overview from './pages/Overview/Overview'
import PromotionLink from './pages/PromotionLink/PromotionLink'
import PromotionOverview from './pages/PromotionOverview/PromotionOverview'
import OrderOverview from './pages/OrderOverview/OrderOverview'
import OrderDetail from './pages/OrderDetail/OrderDetail'
import Record from './pages/Record/Record'
import ReportCart from './pages/ReportCart/ReportCart'
import Report from './pages/Report/Report'
import MemberReport from './pages/MemberReport/MemberReport'
import User from './pages/User/User'

import AdminPromotionOverview from './pages/AdminPromotionOverview/AdminPromotionOverview'
import AdminProductLaunch from './pages/AdminProductLaunch/AdminProductLaunch'
import AdminRefundRate from './pages/AdminRefundRate/AdminRefundRate'
import AdminOrderOverview from './pages/AdminOrderOverview/AdminOrderOverview'
import AdminOrderDetail from './pages/AdminOrderDetail/AdminOrderDetail'

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign" component={Sign} />
      {/* user */}
      <Route exact path="/promotion-overview" render={() => <PromotionOverview />} />
      <Route exact path="/promotion-link" render={() => <PromotionLink />} />
      <Route exact path="/order-overview" render={() => <OrderOverview />} />
      <Route exact path="/order-detail" render={() => <OrderDetail />} />
      <Route exact path="/overview" render={() => <Overview />} />
      <Route exact path="/record" render={() => <Record />} />
      <Route exact path="/report-cart" render={() => <ReportCart />} />
      <Route exact path="/report" render={() => <Report />} />
      <Route exact path="/member-report" render={() => <MemberReport />} />
      <Route exact path="/user" render={() => <User />} />
      {/* admin */}
      <Route exact path="/admin/promotion-overview" render={() => <AdminPromotionOverview />} />
      <Route exact path="/admin/produc-launch" render={() => <AdminProductLaunch />} />
      <Route exact path="/admin/refund-rate" render={() => <AdminRefundRate />} />
      <Route exact path="/admin/order-overview" render={() => <AdminOrderOverview />} />
      <Route exact path="/admin/order-detail" render={() => <AdminOrderDetail />} />
    </Switch>
  </HashRouter>
)

export default Router
