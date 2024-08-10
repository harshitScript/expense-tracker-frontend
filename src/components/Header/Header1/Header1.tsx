import React from "react";
import styles from './Header1.module.css';

interface Header1Props {
    title: string;
    description: string;
}

const Header1: React.FC<Header1Props> = ({ title, description }) => {
    return <div className={styles.header1}>
        <span>{title}</span>
        <span>{description}</span>
    </div>
}
export default Header1;
