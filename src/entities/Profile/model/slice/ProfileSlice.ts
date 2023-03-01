import { createSlice } from '@reduxjs/toolkit'
import {ProfileSchema } from '../types/Profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readOnly: true,
  error: undefined,
  data: undefined,
}

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {}
})

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;