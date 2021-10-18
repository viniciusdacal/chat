import { TraceFramePayload as TraceChoisePayload } from '@voiceflow/base-types/build/node/interaction';
import { TraceFramePayload as TraceSpeackPayload } from '@voiceflow/base-types/build/node/speak';
import { TraceType } from '@voiceflow/base-types/build/node/utils';
import { AnyRequestButton } from '@voiceflow/base-types/build/request';
import React, { useEffect, useMemo, useRef } from 'react';
import { BsFillPiggyBankFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as UI from 'ui';
import { RequestStatus } from 'utils/types';
import { v4 as uuidv4 } from 'uuid';

import * as S from './Chat.styles';
import ChoiseMessage from './ChoiseMessage/Choise';
import ChatInput from './Input/Input';
import { actions, selectChatStatus, selectMessages } from './reducer';
import SpeakMessage from './SpeakMessage/SpeakMessage';
import TextMessage from './TextMessage/TextMessage';
import { Message } from './types';
import useAudioQueue from './useAudioQueue';
import useScrollToBottom from './useScrollToBottom';
import { groupByAuthor } from './utils';

interface ChatProps {
  userId: string;
}

const Chat: React.FC<ChatProps> = ({ userId }) => {
  const audioQueue = useAudioQueue(userId);
  const messages = useSelector(selectMessages(userId));
  const chatStatus = useSelector(selectChatStatus);
  const dispatch = useDispatch();
  const scrollContainerRef = useScrollToBottom<HTMLUListElement>(messages);
  const audioControlRef = useRef<{ current: number; lastIndex: number; toPlay: (Message & { index: number })[] }>({
    current: 0,
    lastIndex: 0,
    toPlay: [],
  });

  const groupedByAuthor: Message[][] = useMemo(() => groupByAuthor(messages), [messages]);

  useEffect(() => {
    async function request() {
      await dispatch(actions.resetChatstate({ userId }));
    }
    if (!messages?.length) {
      request();
    }
  }, []);

  useEffect(() => {
    if (messages) {
      const newAudios = messages
        .slice(audioControlRef.current.lastIndex, messages.length)
        .filter(({ type, status }) => type === TraceType.SPEAK && status !== 'played');

      if (newAudios.length) {
        audioControlRef.current.lastIndex = messages.length - 1;
        audioQueue.push(newAudios as Message<TraceSpeackPayload>[]);
      }
    }
  }, [messages]);

  function onChoose(button: AnyRequestButton) {
    dispatch(actions.sendMessage({ id: uuidv4(), userId, request: button.request, message: button.name }));
  }

  function onSendMessage(message: string) {
    dispatch(
      actions.sendMessage({
        id: uuidv4(),
        userId,
        message,
      })
    );
  }

  return (
    <S.Container>
      <S.Messages ref={scrollContainerRef}>
        {groupedByAuthor.map(
          (messages, index) =>
            messages[0] && (
              <S.Group key={index} isUser={messages[0].author === 'user'}>
                {messages[0].author === 'user' && <S.AuthorAvatar id={userId} />}
                {messages[0].author === 'bot' && (
                  <S.BotAvatar>
                    <BsFillPiggyBankFill />
                  </S.BotAvatar>
                )}
                {messages.map((message) => {
                  if (message.type === TraceType.TEXT) {
                    return (
                      <TextMessage
                        key={message.id}
                        payload={message.payload as { message: string }}
                        color={message.author === 'user' ? 'grey' : 'blue'}
                      />
                    );
                  }
                  if (message.type === TraceType.CHOICE) {
                    return <ChoiseMessage key={message.id} payload={message.payload as TraceChoisePayload} onClick={onChoose} />;
                  }
                  if (message.type === TraceType.SPEAK) {
                    return <SpeakMessage key={message.id} payload={message.payload as TraceSpeackPayload} />;
                  }
                  return null;
                })}
              </S.Group>
            )
        )}
        {chatStatus === RequestStatus.Pending && (
          <S.Typing>
            <UI.TypingIndicator />
          </S.Typing>
        )}
      </S.Messages>
      <ChatInput onSubmit={onSendMessage} />
    </S.Container>
  );
};

export default Chat;
