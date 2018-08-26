import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Dinheiro from '../billingCycle/emCaixa'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
            <Route path='meuDinheiro' component={Dinheiro} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)