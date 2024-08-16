import { Card, CardContent, TextField } from '@mui/material';
import React from 'react';
import styles from "./CategoryForm.module.css"
import { useForm } from 'react-hook-form';
import { Category } from '../../models/category.model';
import schema from "../../validationSchema/CategoryFormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { createCategoryThunk, getCategoriesThunk } from '../../store/thunk/category.thunk';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';

const CategoryForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { categoriesLoading } = useAppSelector(state => state.category)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Category>({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const createCategorySuccess = () => {
        reset();
        dispatch(getCategoriesThunk());
    }
    const onSubmit = (data: Category) => {
        dispatch(createCategoryThunk(data, createCategorySuccess));
    }
    const onSubmitError = () => {
        toast.error('Category Creation failed!, please retry.')
    }
    return <Card>
        <CardContent style={{ padding: '1rem' }}>
            <form className={styles.category_form} onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                <TextField placeholder='enter title' error={!!errors.title} helperText={errors.title?.message} {...register("title")} />
                <TextField multiline placeholder='enter description' rows={5} error={!!errors.description} helperText={errors.description?.message}  {...register("description")} />
                <LoadingButton loading={categoriesLoading} type="submit" variant='contained' className='secondary-button'>Create</LoadingButton>
            </form>
        </CardContent>
    </Card>
}
export default CategoryForm;