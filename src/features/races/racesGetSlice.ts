import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { racesGet } from "./racesAPI";

interface Races {
    _id: string;
    name: string;
}

interface RacesState {
    races: Races[];
    loading: boolean;
    error: string | null;
}

const initialState: RacesState = {
    races: [],
    loading: false,
    error: null
}

export const fetchRaces = createAsyncThunk<Races[], void>(
    'races/fetch',
    async (_, thunkAPI) => {
        try {
            const data = await racesGet();
            return data.races;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Erreur lors de la récupération des races'
            )
        }
    }
);

export const racesSlice = createSlice({
    name: 'racesGet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRaces.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRaces.fulfilled, (state, action) => {
                state.loading = false;
                state.races = action.payload;
            })
            .addCase(fetchRaces.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Erreur inconnue';
            })
    }
});

export default racesSlice.reducer;