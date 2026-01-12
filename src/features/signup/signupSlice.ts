import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupUser } from "./signupAPI.ts";

interface AuthState {
    user: any;
    loading: boolean;
    error: string | null;
};

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};

export const signup = createAsyncThunk(
    'auth/signup',
    async ({ email, password }: { email: string; password: string }, thunkAPI) =>{
        try {
            const data = await signupUser(email, password);
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth/signup',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default authSlice.reducer;