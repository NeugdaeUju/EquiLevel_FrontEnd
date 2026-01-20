import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { racesCreate } from "./racesAPI";

interface Races {
    _id: string;
    name: string;
    especeId: string;
}

interface RacesState {
    race: Races | null;
    loading: boolean;
    error: string | null;
}

const initialState: RacesState = {
    race: null,
    loading : false,
    error: null
}

export const createRace = createAsyncThunk<Races, { name: string; especeId: string }>(
    'races/create',
    async ({ name, especeId }, thunkAPI) => {
        try {
            const data = await racesCreate(name, especeId);
            return data.races;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'erreur lors de la création'
            )
        }
    }
);

export const racesSlice = createSlice({
    name: 'races',
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(createRace.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createRace.fulfilled, (state, action) => {
                state.loading = false;
                state.race = action.payload;
            })
            .addCase(createRace.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Erreur inconnue';
            })
    }
});

export default racesSlice.reducer;