import React from "react";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    return <div className={styles.navbar_outer}>
        <span>Expense Tracker</span>
    </div>
}
export default Navbar