import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/users.slice";
import authSlice from "./slice/auth.slice";

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [usersSlice.name]: usersSlice.reducer
    }
})


export default store;