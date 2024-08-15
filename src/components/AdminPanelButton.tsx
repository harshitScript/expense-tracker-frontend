import React from "react";
import { useAppSelector } from "../store/hook";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminPanelButton: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useAppSelector(state => state.users);
    const adminPanelButtonNotAllowed: Array<string> = ['/admin-panel'];
    const adminPanelClickHandler = () => navigate('/admin-panel');
    return adminPanelButtonNotAllowed.includes(window.location.pathname) ? <></> : user?.isAdmin ? <Button variant="contained" className="primary-button" onClick={adminPanelClickHandler}>Admin Panel</Button> : <></>
}

export default AdminPanelButton;