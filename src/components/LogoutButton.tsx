import { Button } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../store/hook";
import forceLogout from "../utils/forceLogout";
import { clearAuthData } from "../store/slice/auth.slice";
import { clearUsersData } from "../store/slice/users.slice";
import { clearCategoryData } from "../store/slice/category.slice";
import { LogoutOutlined } from "@mui/icons-material";

const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(clearAuthData())
        dispatch(clearUsersData())
        dispatch(clearCategoryData())
        forceLogout();
    }
    return <Button onClick={handleLogout} className="primary-button" startIcon={<LogoutOutlined />} variant="contained">Logout</Button>
}
export default LogoutButton;