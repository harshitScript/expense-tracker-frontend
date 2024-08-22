import API from "../../API";
import { Expense } from "../../models/expense.model";
import handleError from "../../utils/handleError";
import { setExpenses, setExpensesLoading } from "../slice/expense.slice";
import { AppThunk } from "../types";

export const createExpenseThunk = (data: any, successCallBack?: (data: Expense) => void, failureCallback?: () => void): AppThunk => async (dispatch) => {
    dispatch(setExpensesLoading(true));
    try {
        const response = await API.post('/expense/create', data);
        successCallBack?.(response.data);
        dispatch(setExpensesLoading(false));
    } catch (error) {
        handleError(error);
        failureCallback?.();
        dispatch(setExpensesLoading(true));
    }
}

export const getExpensesThunk = (successCallBack?: () => void, failureCallback?: () => void): AppThunk => async (dispatch) => {
    dispatch(setExpensesLoading(true));
    try {
        const response = await API.get('/expense/getExpenses');
        dispatch(setExpenses(response.data.expenses));
        successCallBack?.();
        dispatch(setExpensesLoading(false));
    } catch (error) {
        handleError(error)
        failureCallback?.();
        dispatch(setExpensesLoading(false));
    }
}