import React from "react"
import AddExpense from "../components/Expense/AddExpense";
import Page from "../components/Page/Page";
import styles from "./styles/Dashboard.module.css"
import Header1 from "../components/Header/Header1/Header1";
import RenderExpenses from "../components/Expense/RenderExpenses";


const DashboardPage: React.FC = () => {
    return <Page>
        <div className={styles.dashboard_page_outer}>
            <section className={styles.expenses_section}>
                <Header1 title={'Track Your Expenses :)'} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 🧮"} />
                <RenderExpenses />
            </section>
            <section className={styles.background_section} />
        </div>
        <AddExpense />
    </Page>
}
export default DashboardPage;