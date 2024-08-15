import React from "react";
import styles from './Navbar.module.css';
import ExpenseLogo from '../../assets/svg/expense-tracker-logo.svg'
import GoBack from "../GoBackButton";
import AdminPanelButton from "../AdminPanelButton";

const Navbar: React.FC = () => {
    return <div className={styles.navbar_outer}>
        <img src={ExpenseLogo} alt='expense tracker logo' loading="lazy" />
        <div style={{ gap: '1rem' }}>
            <AdminPanelButton />
            &nbsp;&nbsp;
            <GoBack />
        </div>
    </div>
}
export default Navbar