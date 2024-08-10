import React from "react"
import Page from "../components/Page/Page";
import styles from './styles/LoginPage.module.css'
import LoginForm from "../components/LoginPage/LoginForm";

const LoginPage: React.FC = () => {
    return <Page>
        <div className={styles.login_page_outer}>
            <section className={styles.login_section}>
                <LoginHeader />
                <LoginForm />
            </section>
            <section className={styles.background_section}></section>
        </div>
    </Page>
}

const LoginHeader: React.FC = () => {
    return <div className={styles.login_header}>
        <span>Welcome Back :)</span>
        <span>To keep connected with us please login using your personal information by email address and password. 🧮</span>
    </div>
}

export default LoginPage