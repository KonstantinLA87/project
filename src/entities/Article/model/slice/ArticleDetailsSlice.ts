import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const ArticleDetailsSlice = createSlice({
  name: 'ArticleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // fetch
    .addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(fetchArticleById.fulfilled, (
      state, 
      action: PayloadAction<Article>,
    ) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  },
})

// Action creators are generated for each case reducer function
export const { actions: ArticleDetailsActions } = ArticleDetailsSlice;
export const { reducer: ArticleDetailsReducer } = ArticleDetailsSlice;