import { Card, CardHeader } from "@mui/material";
import React from "react";
import styles from "./ActionCard.module.css";

interface ActionCardProps {
    title: string;
    icon: string;
    onClick(e: React.MouseEvent<HTMLElement>): void;
}
const ActionCard: React.FC<ActionCardProps> = ({ title, icon, onClick }) => {
    return <Card onClick={onClick} className={styles.action_card_outer}>
        <img src={icon} alt="category" loading="lazy" />
        <CardHeader title={title} />
    </Card>
}
export default ActionCard;