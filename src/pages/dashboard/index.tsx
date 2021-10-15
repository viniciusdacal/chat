import React from 'react';
import { Link } from 'react-router-dom';

const PagesDashboard: React.FC = () => (
  <div>
    <h1>Users</h1>

    <ul>
      <li>
        <Link to="/chat/luke">Luke</Link>
      </li>

      <li>
        <Link to="/chat/john">John</Link>
      </li>

      <li>
        <Link to="/chat/adam">Adam</Link>
      </li>
    </ul>

    <button>Create New User</button>
  </div>
);

export default PagesDashboard;
