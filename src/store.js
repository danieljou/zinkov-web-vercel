import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthenticationApi } from "./api/AuthenticationApi";
import AuthSlice from "./slices/AuthSlice";
import { UserApi } from "./api/UserApi";
import { ParticipantApi } from "./api/ParticipantApi";



export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
        [UserApi.reducerPath]: UserApi.reducer,
        [ParticipantApi.reducerPath]: ParticipantApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            AuthenticationApi.middleware,
            UserApi.middleware,
            ParticipantApi.middleware,
        ),
});
setupListeners(store.dispatch);
