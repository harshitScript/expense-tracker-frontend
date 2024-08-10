import * as yup from "yup";
import { email, password } from "../utils/regexPatterns";

const validationSchema = yup.object({
    email: yup.string().required('Email is required.').matches(email, 'Email is Not Valid.'),
    password: yup.string().required('Password is required.').matches(password, 'Password is not valid.')
})
export default validationSchema;