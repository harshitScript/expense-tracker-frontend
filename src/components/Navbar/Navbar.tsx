import React from "react";
import styles from './Navbar.module.css';
import ExpenseLogo from '../../assets/svg/expense-tracker-logo.svg'

const Navbar: React.FC = () => {
    return <div className={styles.navbar_outer}>
        <img src={ExpenseLogo} alt='expense tracker logo' loading="lazy" />
    </div>
}
export default Navbar