import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { especesGet } from "./especesAPI";

interface Especes {
    _id: string;
    name: string;
}

interface EspecesState {
    especes: Especes[];
    loading: boolean;
    error: string | null;
}

const initialState: EspecesState = {
    especes: [],
    loading: false,
    error: null
}

export const fetchEspeces = createAsyncThunk<Especes[], void>(
    'especes/fetch',
    async (_, thunkAPI) => {
        try {
            const data = await especesGet();
            return data.especes;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Erreur lors de la récupération des espèces'
            )
        }
    }
);

export const especesSlice = createSlice({
    name: 'especesGet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEspeces.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEspeces.fulfilled, (state, action) => {
                state.loading = false;
                state.especes = action.payload;
            })
            .addCase(fetchEspeces.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Erreur inconnue';
            })
    }
});

export default especesSlice.reducer;