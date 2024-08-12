import { UnknownAction } from "@reduxjs/toolkit";
import store from ".";
import { ThunkAction } from "redux-thunk"


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, UnknownAction>