import { TraceType } from '@voiceflow/base-types/build/node/utils';

export enum MessageStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Played = 'played',
}

export interface Message<PayloadT = unknown> {
  id: string;
  type: TraceType;
  status: MessageStatus;
  payload: PayloadT;
  author: 'user' | 'bot';
}

export interface ChoiseButton {
  name: string;
  request: {
    type: string;
    payload: {
      label: string;
    };
  };
}
