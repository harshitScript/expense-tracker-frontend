import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/users.slice";
import authSlice from "./slice/auth.slice";
import categorySlice from "./slice/category.slice";

const store = configureStore({
    reducer: {
        [authSlice.name]: authSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [categorySlice.name]: categorySlice.reducer
    }
})


export default store;