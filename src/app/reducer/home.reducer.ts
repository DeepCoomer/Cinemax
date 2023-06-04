import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {}
}

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        getApiConfiguration: (state, action: PayloadAction<any>) => {
            state.url = action.payload;
        },
        getApiGenres: (state, action: PayloadAction<any>) => {
            state.genres = action.payload;
        }
    }
});

export const { getApiConfiguration, getApiGenres } = homeSlice.actions;

export default homeSlice.reducer;