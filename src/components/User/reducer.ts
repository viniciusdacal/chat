import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

import { User } from './types';

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    create: (state, action: PayloadAction<User>) => [...state, action.payload],
    remove: (state, action: PayloadAction<{ id: string }>) => state.filter((user) => user.id !== action.payload.id),
  },
});

export const selectUsers = (state: RootState): User[] => state.users;
export const selectUser =
  (userId: string) =>
  (state: RootState): User | undefined =>
    state.users.find(({ id }) => id === userId);

export const { actions } = usersSlice;

export default usersSlice.reducer;
