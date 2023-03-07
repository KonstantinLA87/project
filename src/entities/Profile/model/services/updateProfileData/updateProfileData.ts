import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile } from "../../types/profile";

// CHECK
export const updateProfileData = createAsyncThunk<
  Profile, 
  void, 
  ThunkConfig<string>
>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const formData = getProfileForm(getState());
    
    try {
      const response = await extra.api.put<Profile>('/profile', formData);
      // throw new Error();
      return response.data;

    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  }
);
