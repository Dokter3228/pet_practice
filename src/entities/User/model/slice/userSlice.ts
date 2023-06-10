import { createSlice } from '@reduxjs/toolkit';
import { type UserSchema } from "../types/user";

const initialState: UserSchema = {
  authData: {
    id: "2",
    username: "2"
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
