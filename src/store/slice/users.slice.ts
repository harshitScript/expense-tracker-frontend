import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UsersSlice {
    usersLoading: boolean;
}

const initialState: UsersSlice = { usersLoading: false }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersLoading(state, action: PayloadAction<boolean>) {
            state.usersLoading = action.payload
        }
    }
})

export const { setUsersLoading } = usersSlice.actions;

export default usersSlice;