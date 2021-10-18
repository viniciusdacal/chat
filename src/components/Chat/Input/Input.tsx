import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

import * as S from './Input.styles';

interface ChatInput {
  onSubmit: (message: string) => void;
}

// eslint-disable-next-line xss/no-mixed-html
const ChatInput: React.FC<ChatInput> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onSubmit(message);
    setMessage('');
  }

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setMessage(ev.target.value);
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Input value={message} onChange={onChange} />
      <S.SendButton>
        <IoSend />
      </S.SendButton>
    </S.Container>
  );
};

export default ChatInput;
