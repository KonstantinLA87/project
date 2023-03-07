import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Profile, ProfileSchema } from '../types/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readOnly: true,
  error: undefined,
  data: undefined,
}

export const ProfileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
      state.validateErrors = undefined;
    },
    saveEdit: (state) => {
      state.readOnly = true;
      state.data = state.form;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    }
  },
  extraReducers: (builder) => {
    builder
    // fetch
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
      state.form = action.payload;
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // update
    .addCase(updateProfileData.pending, (state) => {
      state.validateErrors = undefined;
      state.isLoading = true;
    })
    .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readOnly = true;
      state.validateErrors = undefined;
    })
    .addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;