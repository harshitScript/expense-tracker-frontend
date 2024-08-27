import { Drawer, Fab } from "@mui/material"
import React from "react"
import Header1 from "../Header/Header1/Header1"
import ExpenseForm from "./ExpenseForm"
import AddIcon from "@mui/icons-material/Add";
import useToggle from "../../hooks/useToggle";

const AddExpense: React.FC = () => {
    const [showDrawer, toggleDrawer] = useToggle(false)
    return <>
        <Fab className="primary-button" style={{ position: 'absolute', bottom: 30, right: 30 }} onClick={toggleDrawer} variant="extended" size="medium" color="secondary" aria-label="add expense">
            <AddIcon sx={{ mr: 1 }} />
            Add Expense
        </Fab>
        <Drawer anchor="right" open={showDrawer} sx={{
            width: '35%', // Set the width here
            '& .MuiDrawer-paper': {
                width: '35%', // Set the width of the Drawer paper
                boxSizing: 'border-box',
            },
        }} onClose={toggleDrawer}>
            <Header1 title={'Add an Expense'} description={"Adding expense can help you to view the detailed report of your monthly, yearly or weekly expenses. 💸"} />
            <ExpenseForm onDiscard={toggleDrawer} />
        </Drawer>
    </>
}
export default AddExpense