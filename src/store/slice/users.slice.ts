import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user.model";


interface UsersSlice {
    usersLoading: boolean;
    user?: User
}

const initialState: UsersSlice = { usersLoading: false }

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsersLoading(state, action: PayloadAction<boolean>) {
            state.usersLoading = action.payload;
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        }
    }
})

export const { setUsersLoading, setUser } = usersSlice.actions;

export default usersSlice;