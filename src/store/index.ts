import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slice/users.slice";
import authSlice from "./slice/auth.slice";
import categorySlice from "./slice/category.slice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storageSession from "redux-persist/lib/storage/session";
import expenseSlice from "./slice/expense.slice";

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
    [expenseSlice.name]: expenseSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persister = persistStore(store);

export default store;