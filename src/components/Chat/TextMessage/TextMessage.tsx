import React from 'react';

import type { MessageColorKeys } from './TextMessage.styles';
import * as S from './TextMessage.styles';

export interface ChatTextMessageProps {
  color: MessageColorKeys;
  payload: {
    message: string;
  };
}

const ChatTextMessage: React.FC<ChatTextMessageProps> = ({ payload, color }) => {
  return <S.Container color={color}>{payload.message}</S.Container>;
};

export default ChatTextMessage;
