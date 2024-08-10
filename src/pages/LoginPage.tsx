import React from "react"
import Page from "../components/Page/Page";
import styles from './styles/LoginPage.module.css'
import LoginForm from "../components/LoginPage/LoginForm";
import Header1 from "../components/Header/Header1/Header1";

const LoginPage: React.FC = () => {
    return <Page>
        <div className={styles.login_page_outer}>
            <section className={styles.login_section}>
                <Header1 title={'Welcome Back :)'} description={"To keep connected with us please login using your personal information by email address and password. 🧮"} />
                <LoginForm />
            </section>
            <section className={styles.background_section}></section>
        </div>
    </Page>
}



export default LoginPage