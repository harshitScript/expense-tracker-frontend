import React from "react";
import styles from "./SectionLayout.module.css";

interface SectionLayoutProps {
    title: string;
    children: React.ReactNode;
}
const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children }) => {
    return <div>
        <h1 className={styles.section_layout_title}>{title}</h1>
        <hr />
        <section className={styles.section_layout_section}>{children}</section>
    </div>
}
export default SectionLayout;