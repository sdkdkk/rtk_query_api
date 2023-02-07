import { configureStore } from "@reduxjs/toolkit";
import { usersapi } from "./services/Users";

console.log(usersapi);

export const store = configureStore({
    reducer: {
        [usersapi.reducerPath]: usersapi.reducer,
    },
    middleware: (gDM) => gDM().concat(usersapi.middleware),
});


export const { useGetAllUsersQuery } = usersapi;