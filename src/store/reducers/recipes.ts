import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import data from '../../data';
import { Recipe } from '../../@types/recipe';
import axios from 'axios';
import { RootState } from '..';

interface RecipesState {
  list: Recipe[];
  loading: boolean;
}
export const initialState: RecipesState = {
  list: data,
  loading: false
};

export const loadRecipes = createAsyncThunk<Recipe[]>('RECIPES/LOAD_RECIPES', async () => {
  const { data } = await axios.get("http://localhost:3001/recipes");
  if (!data) {
      throw new Error("aucune recettes trouvée !")
  }
  return data;
})
export const selectRecipes = (state: RootState) => state.recipes.list;
export const selectIsLoading = (state: RootState) => state.recipes.loading;

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadRecipes.pending, (state) => {
    state.loading = true;
}).addCase(loadRecipes.fulfilled, (state, action) => {
    console.log(action);
    state.loading = false;
    state.list = action.payload
}).addCase(loadRecipes.rejected, (state, action) => {
    state.loading = false;
    console.log(action);
})
});

export default recipesReducer;
