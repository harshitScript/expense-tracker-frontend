import React from 'react';
import Page from '../components/Page/Page';
import styles from "./styles/SignUpPage.module.css"
import Header1 from '../components/Header/Header1/Header1';
import SignUpForm from '../components/SignUpPage/SignUpForm';

const SignUpPage: React.FC = () => {
    return <Page>
        <div className={styles.sign_up_page_outer}>
            <section className={styles.sign_up_section}>
                <Header1 title={'Create an Account ;)'} description={"Welcome to a distinguished community of over 300,000 experts in personal expense management. We are delighted to have you join our network.💻"} />
                <SignUpForm />
            </section>
            <section className={styles.background_section}></section>
        </div>
    </Page>
}
export default SignUpPage 