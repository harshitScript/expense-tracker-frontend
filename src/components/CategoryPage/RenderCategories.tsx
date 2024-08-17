import styles from "./RenderCategories.module.css"
import { useAppSelector } from "../../store/hook";
import { Card, CardContent, CardHeader } from "@mui/material";

const RenderCategories: React.FC = () => {
    const { categories } = useAppSelector(state => state.category);
    return <>{
        (categories && categories.length) ? categories.map(category => <Card key={category?._id}>
            <CardHeader className={styles.category_card_title} title={category.title} />
            <CardContent className={styles.category_card_description}>{category.description}</CardContent>
        </Card>) : <p>No Categories Found...</p>
    }</>
}
export default RenderCategories;