import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { infoUserSlice } from './slices';

const rootReducer = combineReducers({
    info: infoUserSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof rootReducer>;