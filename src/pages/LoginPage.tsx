import React from "react"
import Page from "../components/Page/Page";
import styles from './styles/LoginPage.module.css'
import LoginForm from "../components/LoginPage/LoginForm";

const LoginPage: React.FC = () => {
    return <Page>
        <div className={styles.login_page_outer}>
            <section className={styles.login_section}>
                <LoginForm />
            </section>
            <section className={styles.background_section}></section>
        </div>
    </Page>
}
export default LoginPage