import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthSlice {
    authLoading: boolean;
    userId: string,
    authToken: string,
}

const initialState: AuthSlice = { authLoading: false, userId: '', authToken: '' }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthLoading(state, action: PayloadAction<boolean>) {
            state.authLoading = action.payload
        },
        setLoginData(state, action: PayloadAction<{ userId: string, authToken: string }>) {
            state.userId = action.payload.userId;
            state.authToken = action.payload.authToken;
        }
    }
})

export const { setAuthLoading, setLoginData } = authSlice.actions;

export default authSlice;