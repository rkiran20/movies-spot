import { createSlice } from "@reduxjs/toolkit";
import { loadImagess, loadMovieDetails } from "./getData";


const detailsSlice = createSlice({
    name:'movieDetails',
    initialState:{
        items:{genres:[]},
        images:{backdrops:[]},
    },
    reducers:{
        addItems:(state,action)=>{
            console.log(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loadMovieDetails.fulfilled, (state, action) => {
            state.items= action.payload.data;
        })
        .addCase(loadImagess.fulfilled, (state, action) => {
            state.images= action.payload.data;
        })
    }
})

export default detailsSlice.reducer;
export const {addItems} = detailsSlice.actions