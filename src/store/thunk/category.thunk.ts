import API from "../../API";
import { Category } from "../../models/category.model";
import handleError from "../../utils/handleError";
import { setCategories, setCategoriesLoading } from "../slice/category.slice";
import { AppThunk } from "../types";

export const createCategoryThunk = (body: Category, successCallBack?: () => void, failureCallback?: () => void): AppThunk => async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    try {
        await API.post('/category/create', body);
        dispatch(setCategoriesLoading(false));
        successCallBack?.();
    } catch (error) {
        failureCallback?.();
        handleError(error);
        dispatch(setCategoriesLoading(false));
    }
}

export const getCategoriesThunk = (successCallBack?: () => void, failureCallback?: () => void): AppThunk => async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    try {
        const response = await API.get<{ categories: Category[] }>('/category/getCategories');
        dispatch(setCategories(response.data.categories))
        dispatch(setCategoriesLoading(false));
        successCallBack?.();
    } catch (error) {
        failureCallback?.();
        handleError(error);
        dispatch(setCategoriesLoading(false));
    }
}