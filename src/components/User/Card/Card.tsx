import React from 'react';
import { Link } from 'react-router-dom';
import * as UI from 'ui';

import * as S from './Card.styles';

interface UserCardProps {
  id: string;
  name: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, onDelete }) => {
  return (
    <S.Container>
      <S.Avatar src={`https://i.pravatar.cc/150?u=${id}`} />
      <S.FullName>{name}</S.FullName>
      <S.Actions>
        <UI.Button color="red" onClick={onDelete}>
          Delete
        </UI.Button>
        <Link to={`/chat/${id}`}>
          <UI.Button color="green">Chat</UI.Button>
        </Link>
      </S.Actions>
    </S.Container>
  );
};

export default UserCard;
