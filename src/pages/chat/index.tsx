import Chat from 'components/Chat/Chat';
import { selectUser } from 'components/User/reducer';
import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as UI from 'ui';

import * as S from './chat.styles';

const PagesChat: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const user = useSelector(selectUser(userId));

  return (
    <UI.Container>
      <S.Header>
        <Link to="/dashboard">
          <BsChevronLeft /> Back
        </Link>{' '}
        Hi {user?.name}
      </S.Header>
      {user ? <Chat userId={userId} /> : <S.NoUser>It seems you tried to access a page that does not exit.</S.NoUser>}
    </UI.Container>
  );
};

export default PagesChat;
