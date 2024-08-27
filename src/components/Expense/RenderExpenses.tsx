import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getExpensesThunk } from "../../store/thunk/expense.thunk";
import { Card, CardContent, CardHeader } from "@mui/material";

const RenderExpenses: React.FC = () => {
    const dispatch = useAppDispatch();
    const { expenses } = useAppSelector(state => state.expense);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { expenses.length === 0 && dispatch(getExpensesThunk()) }, [])
    return <>{
        (expenses && expenses.length) ? expenses.map(expense => <Card>
            <CardHeader title={expense.title} />
            <CardContent>
                <sub><b>{`${expense.amount}`}</b>{expense.description}</sub>
            </CardContent>
        </Card>) : <></>
    }
    </>
}
export default RenderExpenses;