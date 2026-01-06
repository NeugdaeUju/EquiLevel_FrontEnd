import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice.ts';
import signupSlice from '../features/signup/signupSlice.ts'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        signup: signupSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;