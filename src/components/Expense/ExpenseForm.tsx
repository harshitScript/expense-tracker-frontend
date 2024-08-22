import { Button, ButtonGroup, Card, CardContent, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./ExpenseForm.module.css"
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getCategoriesThunk } from "../../store/thunk/category.thunk";
import { useForm } from "react-hook-form";
import { Expense } from "../../models/expense.model";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validationSchema/expenseFormSchema";
import { createExpenseThunk } from "../../store/thunk/expense.thunk";
import { LoadingButton } from "@mui/lab";

interface ExpenseFormProps {
    onDiscard(): void
}
const ExpenseForm: React.FC<ExpenseFormProps> = ({ onDiscard }) => {
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector(state => state.category);
    const { expensesLoading } = useAppSelector(state => state.expense);
    const { register, handleSubmit, formState: { errors } } = useForm<Expense>({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: { title: '', description: '', amount: 0, category: '' }
    });
    useEffect(() => {
        if (categories.length === 0) dispatch(getCategoriesThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const createExpenseSuccess = () => {
        onDiscard();
    }
    const onSubmit = (data: Expense) => {
        const payloadData = {
            title: data.title,
            description: data.description,
            category: data.category,
            amount: data.amount,
            spentAt: new Date(data.spentAt)
        }
        dispatch(createExpenseThunk(payloadData, createExpenseSuccess));
    }
    const onSubmitError = () => {
        toast.error('Failed to create expense.');
    }
    return <Card style={{ margin: '1rem' }} >
        <CardContent style={{ padding: '1rem' }}>
            <form className={styles.expense_form} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                <TextField type="text" placeholder="enter title" label="Title" {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
                <TextField type="text" multiline rows={3} placeholder="enter description" label="Description" {...register('description')} error={!!errors.description} helperText={errors.description?.message} />
                <TextField type="number" placeholder="enter amount" label="Amount" {...register('amount')} error={!!errors.amount} helperText={errors.amount?.message} InputProps={{
                    startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                }} />
                <TextField select={true} placeholder="select category" label="Category" {...register('category')} error={!!errors.category} helperText={errors.category?.message} >
                    {categories.map(category => <MenuItem key={category?._id} value={category?._id}>{category.title}</MenuItem>)}
                </TextField>
                <TextField type="date" label='Spent At' {...register('spentAt')} error={!!errors.spentAt} helperText={errors.spentAt?.message} />
                <ButtonGroup className={styles.expense_form_actions}>
                    <LoadingButton loading={expensesLoading} fullWidth type="submit" variant="contained" className="primary-button">Add</LoadingButton>
                    <Button onClick={onDiscard} variant="contained" className="secondary-button">Discard</Button>
                </ButtonGroup>
            </form>
        </CardContent>
    </Card>
}
export default ExpenseForm