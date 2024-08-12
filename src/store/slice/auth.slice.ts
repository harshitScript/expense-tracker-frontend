import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthSlice {
    authLoading: boolean;
}

const initialState: AuthSlice = { authLoading: false }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLoading(state, action: PayloadAction<boolean>) {
            state.authLoading = action.payload
        }
    }
})

export const { setAuthLoading } = authSlice.actions;

export default authSlice;