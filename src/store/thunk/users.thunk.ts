import API from "../../API"
import { User } from "../../models/user.model";
import { setUser, setUsersLoading } from "../slice/users.slice"
import { AppThunk } from "../types";
import handleError from "../../utils/handleError";

interface CreateUserResponse {
    message: string
}
export const signUpUserThunk = (body: User, successCallBack: () => void, failureCallback: () => void): AppThunk => async (dispatch) => {
    dispatch(setUsersLoading(true));
    try {
        await API.post<CreateUserResponse>('/user/sign-up', body);
        successCallBack();
        dispatch(setUsersLoading(false));
    } catch (error) {
        handleError(error);
        failureCallback();
        dispatch(setUsersLoading(false));
    }
}

export const getUserByIdThunk = (userId: string): AppThunk => async (dispatch) => {
    dispatch(setUsersLoading(true));
    try {
        const response = await API.get<{ user: User }>(`/user/getUserById/${userId}`);
        dispatch(setUsersLoading(false));
        dispatch(setUser(response.data.user));
    } catch (error) {
        handleError(error);
        dispatch(setUsersLoading(false));
    }
} 