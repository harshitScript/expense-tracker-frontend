import API from "../../API"
import { User } from "../../models/user.model";
import { setUsersLoading } from "../slice/users.slice"
import { AppThunk } from "../types";

export const signUpUserThunk = (body: User): AppThunk => async (dispatch) => {
    dispatch(setUsersLoading(true));
    try {
        await API.post('/user/sign-up', body);
        dispatch(setUsersLoading(false));
    } catch (error) {
        dispatch(setUsersLoading(false));
    }
}