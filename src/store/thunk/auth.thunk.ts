import API from "../../API";
import { Login, LoginResponse } from "../../models/auth.model";
import handleError from "../../utils/handleError";
import { setAuthLoading } from "../slice/auth.slice";
import { AppThunk } from "../types";

export const loginThunk = (body: Login, successCallback: (data: LoginResponse) => void, failureCallback: () => void): AppThunk => async (dispatch) => {
    dispatch(setAuthLoading(true));
    try {
        const response = await API.post<LoginResponse>('/auth/login', body);
        successCallback(response.data)
        dispatch(setAuthLoading(false));
    } catch (error) {
        handleError(error)
        failureCallback();
        dispatch(setAuthLoading(false));
    }
} 
