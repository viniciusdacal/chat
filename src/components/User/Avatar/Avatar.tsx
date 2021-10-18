import React from 'react';

import * as S from './Avatar.styles';

interface UserAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  id?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ id, ...restProps }) => (
  <S.Container {...restProps} src={id ? `https://i.pravatar.cc/150?u=${id}` : '/bot.svg'} />
);

export default UserAvatar;
