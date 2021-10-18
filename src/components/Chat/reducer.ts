import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TraceType } from '@voiceflow/base-types/build/node/utils';
import { BaseRequest, RequestType } from '@voiceflow/base-types/build/request';
import { AnyTrace } from '@voiceflow/base-types/build/trace';
import type { RootState } from 'store';
import api from 'utils/api';
import { RequestStatus } from 'utils/types';
import { v4 as uuidv4 } from 'uuid';

import { Message, MessageStatus } from './types';

const initialState: {
  messages: Record<string, Message[]>;
  status: RequestStatus;
} = {
  status: RequestStatus.Idle,
  messages: {},
};

interface sendMessagePayload {
  id?: string;
  userId: string;
  message?: string;
  request?: BaseRequest;
}

interface removeChatStatePayload {
  userId: string;
}

interface resetChatStatePayload {
  userId: string;
}

const tracesToMessages = (traces: AnyTrace[]): Message[] => {
  return traces.map((trace) => ({
    id: uuidv4(),
    status: MessageStatus.Fulfilled,
    type: trace.type,
    payload: trace.payload,
    author: 'bot',
  }));
};

const resetChatstate = createAsyncThunk('chat/resetChatState', async ({ userId }: resetChatStatePayload) => {
  const response = await api.post<AnyTrace[]>('/interact', {
    type: RequestType.LAUNCH,
    userId,
  });

  return {
    userId,
    messages: tracesToMessages(response.data),
  };
});

const removeChatstate = createAsyncThunk('chat/removeChatState', ({ userId }: removeChatStatePayload) => {
  api.post<AnyTrace[]>('/remove', {
    userId,
  });
});

const sendMessage = createAsyncThunk('chat/sendMessage', async ({ userId, message, id, request }: sendMessagePayload, thunkAPI) => {
  const postBody = request
    ? { request, userId }
    : {
        userId,
        message,
        type: RequestType.TEXT,
      };
  const response = await api.post<AnyTrace[]>('/interact', postBody);

  if (response.data.find((trace) => trace.type === TraceType.END)) {
    window.setTimeout(() => {
      thunkAPI.dispatch(resetChatstate({ userId }));
    }, 4000);
  }

  return {
    messageId: id,
    userId,
    messages: tracesToMessages(response.data),
  };
});

export const usersSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    deleteMessages: (state, { payload }: PayloadAction<{ userId: string }>) => {
      const messages = { ...state.messages };
      delete messages[payload.userId];
      return {
        ...state,
        messages,
      };
    },
    playMessage: (state, { payload }: PayloadAction<{ userId: string; messageId: string }>) => {
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.userId]: state.messages[payload.userId].map((message) =>
            message.id !== payload.messageId
              ? message
              : {
                  ...message,
                  status: MessageStatus.Played,
                }
          ),
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessage.pending, (state, action) => {
      const { id, userId, message } = action.meta.arg;

      if (!id) {
        return state;
      }

      const newMessage: Message = {
        id,
        author: 'user',
        type: TraceType.TEXT,
        status: MessageStatus.Pending,
        payload: {
          message,
        },
      };

      return {
        ...state,
        status: RequestStatus.Pending,
        messages: {
          ...state.messages,
          [userId]: [...(state.messages[userId] || []), newMessage],
        },
      };
    });
    builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
      const { userId, messageId, messages } = payload;

      const previousMessages = (state.messages[userId] || []).map((message) =>
        message.id !== messageId
          ? message
          : {
              ...message,
              status: MessageStatus.Fulfilled,
            }
      );

      return {
        ...state,
        status: RequestStatus.Fulfilled,
        messages: {
          ...state.messages,
          [userId]: [...previousMessages, ...messages],
        },
      };
    });

    builder.addCase(resetChatstate.pending, (state) => {
      return {
        ...state,
        status: RequestStatus.Pending,
      };
    });

    builder.addCase(resetChatstate.fulfilled, (state, { payload }) => {
      const { userId, messages } = payload;

      return {
        ...state,
        status: RequestStatus.Fulfilled,
        messages: {
          ...state.messages,
          [userId]: messages,
        },
      };
    });
  },
});

export const selectMessages =
  (userId: string) =>
  (state: RootState): Message[] =>
    state.chat.messages[userId];

export const selectChatStatus = (state: RootState): RequestStatus => state.chat.status;

const { actions: baseActions } = usersSlice;

export const actions = {
  ...baseActions,
  removeChatstate,
  resetChatstate,
  sendMessage,
};

export default usersSlice.reducer;
