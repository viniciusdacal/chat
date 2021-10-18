import { TraceFramePayload as TraceSpeackPayload } from '@voiceflow/base-types/build/node/speak';
import React from 'react';

import * as S from './SpeakMessage.styles';

export interface ChatSpeakMessageProps {
  payload: TraceSpeackPayload;
}

const ChatSpeakMessage: React.FC<ChatSpeakMessageProps> = ({ payload }) => {
  return <S.Container>{payload.message}</S.Container>;
};

export default ChatSpeakMessage;
