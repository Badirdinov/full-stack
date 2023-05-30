import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "../slice/auth";

export const store = configureStore({
    reducer: {
        Auth: authSlice.reducer,
    },
})