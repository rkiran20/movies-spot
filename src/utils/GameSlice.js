import { createSlice } from "@reduxjs/toolkit";
import {
  popularMovies,
  searchedMovies,
  topRatedMovies,
  upcomingMovies,
} from "./getData";

const gameSlice = createSlice({
  name: "games",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    searchedMovies: [],
  },
  reducers: {
    clearSearchedMovies: (state, action) => {
      state.searchedMovies.length = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(popularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload.data.results;
      })
      .addCase(topRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload.data.results;
      })
      .addCase(upcomingMovies.fulfilled, (state, action) => {
        state.upComingMovies = action.payload.data.results;
      })
      .addCase(searchedMovies.fulfilled, (state, action) => {
        state.searchedMovies = action.payload.data.results;
      });
  },
});

export default gameSlice.reducer;
export const { clearSearchedMovies } = gameSlice.actions;
