import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  movieDetailsUrl,
  movieImagesUrl,
  moviesList,
  popular,
  searchMovieUrl,
  topRated,
  upcoming,
} from "../api";

export const popularMovies = createAsyncThunk("popular", async () => {
  try {
    const response = await axios.get(popular);
    return response;
  } catch (err) {
    return err;
  }
});
export const MoviesList = createAsyncThunk("movieslist", async () => {
  try {
    const response = await axios.get(moviesList);
    return response;
  } catch (err) {
    return err;
  }
});
export const topRatedMovies = createAsyncThunk("topratedmovies", async () => {
  try {
    const response = await axios.get(topRated);
    return response;
  } catch (err) {
    return err;
  }
});
export const upcomingMovies = createAsyncThunk("upcomingmovies", async () => {
  try {
    const response = await axios.get(upcoming);
    return response;
  } catch (err) {
    return err;
  }
});

export const loadMovieDetails = createAsyncThunk("moviedetails", async (id) => {
  try {
    const response = await axios.get(movieDetailsUrl(id));
    console.log(response.data);
    return response;
  } catch (err) {
    return err;
  }
});

export const loadImagess = createAsyncThunk("images", async (id) => {
  try {
    const response = await axios.get(movieImagesUrl(id));
    return response;
  } catch (err) {
    return err;
  }
});

export const searchedMovies = createAsyncThunk(
  "seaarched",
  async (game_name) => {
    try {
      const response = await axios.get(searchMovieUrl(game_name));
      return response;
    } catch (err) {
      return err;
    }
  }
);
