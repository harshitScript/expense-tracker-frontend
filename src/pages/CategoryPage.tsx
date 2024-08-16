import React, { useEffect } from "react";
import Page from "../components/Page/Page";
import styles from "./styles/CategoryPage.module.css";
import Header1 from "../components/Header/Header1/Header1";
import CategoryForm from "../components/CategoryPage/CategoryForm";
import { useAppDispatch } from "../store/hook";
import { getCategoriesThunk } from "../store/thunk/category.thunk";
import RenderCategories from "../components/CategoryPage/RenderCategories";

const CategoryPage: React.FC = () => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { dispatch(getCategoriesThunk()) }, [])
    return <Page>
        <div className={styles.category_page_outer}>
            <section className={styles.category_page_section}>
                <Header1 title={'Create a Category'} description={"Create a category to distinguish your expenses."} />
                <hr />
                <CategoryForm />
            </section>
            <section className={styles.category_page_section}>
                <RenderCategories />
            </section>
        </div>
    </Page>
}
export default CategoryPage;