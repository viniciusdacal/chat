import UserList from 'components/User/List/List';
import React from 'react';
import * as UI from 'ui';

const PagesDashboard: React.FC = () => {
  return (
    <UI.Container>
      <h1>My Bank</h1>
      <UserList />
    </UI.Container>
  );
};

export default PagesDashboard;
