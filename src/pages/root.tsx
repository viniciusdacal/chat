import Chat from 'pages/chat';
import Dashboard from 'pages/dashboard';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const DASHBOARD_ROUTE = '/dashboard';
const CHAT_ROUTE = '/chat/:userId';

const PagesRoot: React.FC = () => (
  <Router>
    <Switch>
      <Route path={DASHBOARD_ROUTE} component={Dashboard} />
      <Route path={CHAT_ROUTE} component={Chat} />
      <Redirect to={DASHBOARD_ROUTE} />
    </Switch>
  </Router>
);

export default PagesRoot;
