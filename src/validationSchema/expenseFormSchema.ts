import * as yup from "yup";
import { description, title } from "../utils/regexPatterns";

const schema = yup.object({
    title: yup.string().required('This field is required.').matches(title, 'Invalid Title.'),
    description: yup.string().required('This field is required').matches(description, 'Invalid Description.'),
    amount: yup.number().required('This field is required.').min(0, 'Minimum value is 1.').max(20000000000, 'Invalid Value'),
    category: yup.string().required('This field is required.'),
    spentAt: yup.string().required('This field is required.')
})
export default schema