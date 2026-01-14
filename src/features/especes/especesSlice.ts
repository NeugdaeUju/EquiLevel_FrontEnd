import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { especesCreate } from "./especesAPI";

interface Especes {
    id: string;
    name: string;
}

interface EspecesState {
    espece: Especes | null;
    loading: boolean;
    error: string | null;
}

const initialState: EspecesState = {
    espece: null,
    loading : false,
    error: null
}

export const createEspece = createAsyncThunk<Especes, string>(
    'especes/create',
    async ( name, thunkAPI ) => {
        try {
            const data = await especesCreate(name);
            return data.especes;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'erreur lors de la création'
            )
        }
    }
);

export const especesSlice = createSlice({
    name: 'especes',
    initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(createEspece.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createEspece.fulfilled, (state, action) => {
                state.loading = false;
                state.espece = action.payload;
            })
            .addCase(createEspece.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Erreur inconnue';
            })
    }
});

export default especesSlice.reducer;