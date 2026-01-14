import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice.ts';
import signupSlice from '../features/signup/signupSlice.ts'
import especesSlice from '../features/especes/especesSlice.ts';
import especesGetSlice from '../features/especes/especesGetSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        signup: signupSlice,
        especes: especesSlice,
        especesGet: especesGetSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;