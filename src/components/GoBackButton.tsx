import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface GoBackButtonProps {
    addStyles?: {
        [key: string]: string | number
    }
}
const GoBackButton: React.FC<GoBackButtonProps> = ({ addStyles = {} }) => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1)
    const goBackButtonNotAllowed: Array<string> = ['/dashboard']
    return goBackButtonNotAllowed.includes(window.location.pathname) ? <></> : <Button onClick={handleGoBack} className='secondary-button' style={{ ...addStyles }} variant="contained">{'< Go Back'}</Button>
}
export default GoBackButton;