import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logInReducer from './state/logInSlice'


const store = configureStore ({
    reducer:{
        logged: logInReducer,
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()