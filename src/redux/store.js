import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { shazamCoreApi } from "./services/shazamCore";

import playerReducer from "./features/playerSlice";

export const store = configureStore ({
    reducer: {
        [ shazamCoreApi.reducerPath ]: shazamCoreApi.reducer,
        player: playerReducer,
    },
    middleware: ( getDefaultMiddlware ) = getDefaultMiddlware().concat( shazamCoreApi.middleware ),
});