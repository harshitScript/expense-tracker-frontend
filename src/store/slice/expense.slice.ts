import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../../models/expense.model";

interface ExpenseSlice {
    expensesLoading: boolean,
    expenses: Expense[]
}
const initialState: ExpenseSlice = {
    expensesLoading: false,
    expenses: []
}
const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setExpensesLoading(state, action: PayloadAction<boolean>) {
            state.expensesLoading = action.payload
        },
        setExpenses(state, action: PayloadAction<Expense[]>) {
            state.expenses = [...action.payload]
        },
        clearExpenseData(state) {
            state = initialState;
        }
    }
})

export const { setExpensesLoading, setExpenses, clearExpenseData } = expenseSlice.actions;
export default expenseSlice;