import React from 'react';
import Page from '../components/Page/Page';
import styles from './styles/AdminPanelPage.module.css';
import SectionLayout from '../components/AdminPanelPage/SectionLayout';
import ActionCard from '../components/AdminPanelPage/ActionCard';
import CategoryIcon from "../assets/svg/category-icon.svg"
import { useNavigate } from 'react-router-dom';

const AdminPanelPage: React.FC = () => {
    const navigate = useNavigate();
    const handleCategoryClick = () => navigate('/admin-panel/categories');
    return <Page>
        <div className={styles.admin_panel_page_outer}>
            <section className={styles.admin_panel_page_section}>
                <SectionLayout title='Creator'>
                    <ActionCard title='Category' icon={CategoryIcon} onClick={handleCategoryClick} />
                </SectionLayout></section>
            <section className={styles.admin_panel_page_section}></section>
            <section className={styles.admin_panel_page_section}></section>
        </div>
    </Page>
}
export default AdminPanelPage; 