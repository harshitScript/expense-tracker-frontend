import * as yup from "yup";
import { email, name, password, phone } from "../utils/regexPatterns";

const schema = yup.object({
    firstName: yup.string().required('First name is required.').matches(name, 'Invalid first name.'),
    lastName: yup.string().required('Last name is required.').matches(name, 'Invalid last name'),
    phone: yup.string().required('Phone is required').length(10, 'Phone number length should be 10.').matches(phone),
    email: yup.string().required('Email is required.').matches(email, 'Email is Not Valid.'),
    password: yup.string().required('Password is required.').matches(password, 'Password is not valid.'),
    confirmPassword: yup.string().required('Confirm Password is required.')
})
export default schema;