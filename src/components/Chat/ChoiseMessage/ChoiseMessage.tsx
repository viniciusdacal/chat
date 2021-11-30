import { TraceFramePayload } from '@voiceflow/base-types/build/node/interaction';
import { AnyRequestButton } from '@voiceflow/base-types/build/request';
import React from 'react';
import * as UI from 'ui';

import * as S from './ChoiseMessage.styles';

export interface ChatChoiseMessageProps {
  payload: TraceFramePayload;
  onClick: (button: AnyRequestButton) => void;
}

const ChatChoiseMessage: React.FC<ChatChoiseMessageProps> = ({ payload, onClick }) => {
  return (
    <S.Container>
      {payload.buttons?.map((button) => (
        <UI.Button key={button.name} color="blue" variant="bordered" onClick={() => onClick(button)}>
          {button.name}
        </UI.Button>
      ))}
    </S.Container>
  );
};

export default ChatChoiseMessage;
