import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Category } from "../../models/category.model"

interface CategorySlice {
    categories: Category[],
    categoriesLoading: boolean
}
const initialState: CategorySlice = { categories: [], categoriesLoading: false }
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategoriesLoading(state, action: PayloadAction<boolean>) {
            state.categoriesLoading = action.payload;
        },
        setCategories(state, action: PayloadAction<Category[]>) {
            state.categories = [...action.payload];
        }
    }
})

export const { setCategories, setCategoriesLoading } = categorySlice.actions;

export default categorySlice
