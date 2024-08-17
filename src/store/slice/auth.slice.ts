import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthSlice {
    authLoading: boolean;
    userId: string,
    authToken: string,
    authTokenExpiry: number
}

const initialState: AuthSlice = { authLoading: false, userId: '', authToken: '', authTokenExpiry: 0 }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLoading(state, action: PayloadAction<boolean>) {
            state.authLoading = action.payload
        },
        setLoginData(state, action: PayloadAction<{ userId: string, authToken: string, authTokenExpiry: number }>) {
            state.userId = action.payload.userId;
            state.authToken = action.payload.authToken;
            state.authTokenExpiry = action.payload.authTokenExpiry
        }
    }
})

export const { setAuthLoading, setLoginData } = authSlice.actions;

export default authSlice;