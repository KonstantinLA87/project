import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Profile, ProfileSchema } from '../types/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readOnly: true,
  error: undefined,
  data: undefined,
}

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchProfileData.fulfilled, (
      state, 
      action: PayloadAction<Profile>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;