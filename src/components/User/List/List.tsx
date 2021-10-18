import { actions as chatActions } from 'components/Chat/reducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UI from 'ui';

import UserCard from '../Card/Card';
import UserForm from '../Form/Form';
import { actions, selectUsers } from '../reducer';
import * as S from './List.styles';

interface UserListProps {
  className?: string;
}

const UserList: React.FC<UserListProps> = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  function onDeleteUser(userId: string) {
    dispatch(actions.remove({ id: userId }));
    dispatch(chatActions.deleteMessages({ userId }));
  }

  return (
    <UI.Grid>
      <UserForm />
      <UI.GridRow>
        <S.List>
          {users.map((user) => (
            <UserCard key={user.id} id={user.id} name={user.name} onDelete={() => onDeleteUser(user.id)} />
          ))}
        </S.List>
      </UI.GridRow>
    </UI.Grid>
  );
};

export default UserList;
