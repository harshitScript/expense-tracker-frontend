import API from "../../API"
import { User } from "../../models/user.model";
import { setUsersLoading } from "../slice/users.slice"
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