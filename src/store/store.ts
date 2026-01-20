import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice.ts';
import signupSlice from '../features/signup/signupSlice.ts'
import especesSlice from '../features/especes/especesSlice.ts';
import especesGetSlice from '../features/especes/especesGetSlice.ts';
import racesGetSlice from '../features/races/racesGetSlice.ts';
import racesSlice from '../features/races/racesSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        signup: signupSlice,
        especes: especesSlice,
        especesGet: especesGetSlice,
        racesGet: racesGetSlice,
        races: racesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;