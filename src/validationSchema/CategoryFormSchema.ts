import { description, title } from "../utils/regexPatterns";
import * as yup from "yup";

const categoryFormSchema = yup.object({
    title: yup.string().required('Title is Required.').matches(title, 'Invalid Category Title.'),
    description: yup.string().required('Description is Required.').matches(description, 'Invalid Category Description.'),
})
export default categoryFormSchema;