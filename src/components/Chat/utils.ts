import { TraceType } from '@voiceflow/base-types/build/node/utils';

import { Message } from './types';

export const supportedMessages = [TraceType.TEXT, TraceType.CHOICE, TraceType.SPEAK];

export const groupByAuthor = (messages: Message[]): Message[][] => {
  if (!messages) {
    return [];
  }

  const result: Message[][] = [[]];
  let counter = 0;
  let lastAuthor = messages[0].author;

  messages
    .map((message, index) => ({
      ...message,
      index,
    }))
    .forEach((message) => {
      if (lastAuthor !== message.author) {
        lastAuthor = message.author;
        counter += 1;
        result[counter] = [];
      }
      if (supportedMessages.includes(message.type)) {
        result[counter].push(message);
      }
    });
  return result;
};
